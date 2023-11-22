from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt
import json
import os
from bson import ObjectId
from dotenv import load_dotenv
from cloudinary import config, uploader
from cloudinary.uploader import upload

load_dotenv()

mongo_url = os.getenv('mongodb_url')
client_name = os.getenv('client_name')


app = Flask(__name__)
CORS(app)
client = MongoClient(mongo_url, tlsAllowInvalidCertificates=True)
mongo = client[client_name]



config(
    cloud_name=os.getenv('CLOUD_NAME'),
    api_key=os.getenv('API_KEY'),
    api_secret=os.getenv('API_SECRET')
)


@app.route('/')
def home():
    return "Hello this is flask backend"; 


@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    user = mongo.users.find_one({'email': email})
    if user:
        if bcrypt.checkpw(password.encode('utf-8'), user['password']):
            user_data = {
                'name': user['name'],
                'email': user['email'],
                '_id': str(user['_id']),
            }
            response = make_response(jsonify({'message': 'Login Successful', 'user': user_data}))
            return response
        else:
            return jsonify({'message': "Password didn't match"})
    else:
        return jsonify({'message': 'User not registered'})



@app.route('/register', methods=['POST'])
def register():
    name = request.json.get('name')
    email = request.json.get('email')
    password = request.json.get('password')
    user = mongo.users.find_one({'email': email})
    
    if user:
        return jsonify({'message': 'User already registered'})
    else:
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        user = {
            'name': name,
            'email': email,
            'password': hashed_password,
            'videosUrls': [],
            'videoSegments':[]
        }
        mongo.users.insert_one(user)
        response = make_response(jsonify({'message': 'Successfully Registered, Please login now.'}))
        return response


@app.route('/save_trimmed_video', methods=['POST'])
def save_trimmed_video():
    try:
        file = request.files['file']
        user_email = request.form.get('email')  # Get the user's email from the form data
        main_video_url = request.form.get('main_video_url')
        start_time= request.form.get('start_time')
        end_time= request.form.get('end_time')
        main_video_duration= request.form.get('main_video_duration')

        if file and user_email:
            # Upload the video to Cloudinary
            upload_result = uploader.upload(
                file,
                resource_type="video",
            )

            # Get the secure URL of the uploaded video
            secure_url = upload_result.get('secure_url')

            # Retrieve the user's data from the database
            user = mongo.users.find_one({'email': user_email})

            if user:
                # Create a new video segment object
                video_segment = {
                    'mainVideoURL': main_video_url,
                    'segmentURL': secure_url,
                    'start_time': start_time,
                    'end_time': end_time,
                    'main_video_duration': main_video_duration,
                    'text_annotation':[],
                    'audio_annotation':[]
                }


                # Update the user's videoSegments array with the new video segment
                mongo.users.update_one(
                    {'_id': ObjectId(user['_id'])},
                    {'$push': {'videoSegments': video_segment}}
                )

                return jsonify({'message': 'Video segment uploaded successfully.'})
            else:
                return jsonify({'message': 'User not found'})

        else:
            return jsonify({'message': 'No file or user email provided'})
    except Exception as e:
        return jsonify({'message': str(e)})
    


   
    



@app.route('/upload_video', methods=['POST'])
def upload_video():
    try:
        file = request.files['file']
        user_email = request.form.get('email')  # Get the user's email from the form data

        if file and user_email:
            # Upload the video to Cloudinary
            upload_result = uploader.upload(
                file,
                resource_type="video",
            )
            
            # Get the secure URL of the uploaded video
            secure_url = upload_result.get('secure_url')

            # Save the secure URL to the user's videosUrls array in the database
            user = mongo.users.find_one({'email': user_email})
            if user:
                # Append the secure_url to the user's videosUrls array
                mongo.users.update_one(
                    {'_id': ObjectId(user['_id'])},
                    {'$push': {'videosUrls': secure_url}}
                )
                return jsonify({'message': 'Video Uploaded successfully.'})
            else:
                return jsonify({'message': 'User not found'})

        else:
            return jsonify({'message': 'No file or user email provided'})
    except Exception as e:
        return jsonify({'message': str(e)})


def extract_public_id_from_url(url):
    # Example URL format: https://res.cloudinary.com/your-cloud-name/video/upload/v123456789/public-id.mp4
    parts = url.split('/')
    file_name = parts[-1]
    public_id = file_name.split('.')[0]  # Remove file extension
    return public_id

def extract_folder_name(url):
    # Example URL format: https://res.cloudinary.com/your-cloud-name/video/upload/v123456789/folder-name/public-id.mp4
    parts = url.split('/')
    if len(parts) >= 6:
        return parts[7] 
    else:
        return None  


@app.route('/delete_video', methods=['DELETE'])
def delete_video():
    try:
        data = request.get_json()  # Get the data sent in the request body as JSON
        video_url = data.get('videoUrl')
        user_email = data.get('email')

        if video_url and user_email:
            video_public_id = extract_public_id_from_url(video_url)
            folder_name = extract_folder_name(video_url)
            print(folder_name)

            if folder_name == "RingMaster":
                # Only remove the video URL from the user's data in MongoDB
                user = mongo.users.find_one({'email': user_email})
                if user:
                    if 'videosUrls' in user:
                        user['videosUrls'].remove(video_url)
                        # Update the user's data in the database
                        mongo.users.update_one({'_id': user['_id']}, {'$set': user})
                    return jsonify({'message': 'Video deleted successfully'})
                else:
                    return jsonify({'message': 'User not found'})
            else:
                # Delete the video from Cloudinary
                result = uploader.destroy(video_public_id, resource_type='video', invalidate=True)
                if result.get('result') == 'ok':
                    # Remove the video URL from the user's data in MongoDB
                    user = mongo.users.find_one({'email': user_email})
                    if user:
                        if 'videosUrls' in user:
                            user['videosUrls'].remove(video_url)
                            # Update the user's data in the database
                            mongo.users.update_one({'_id': user['_id']}, {'$set': user})
                        return jsonify({'message': 'Video deleted successfully'})
                return jsonify({"message": "Failed to delete video"})
            
        else:
            return jsonify({"message": "Invalid request data"})
    except Exception as e:
        return jsonify({"message": str(e)})
    

# @app.route('/delete_video', methods=['DELETE'])
# def delete_video():
#     try:
#         data = request.get_json()  # Get the data sent in the request body as JSON
#         video_url = data.get('videoUrl')
#         user_email = data.get('email')

#         if video_url and user_email:
#             video_public_id = extract_public_id_from_url(video_url)

#             # Delete the video from Cloudinary
#             result = uploader.destroy(video_public_id, resource_type='video', invalidate=True)
#             if result.get('result') == 'ok':
#                 # Remove the video URL from the user's data in MongoDB
#                 user = mongo.users.find_one({'email': user_email})
#                 if user:
#                     if 'videosUrls' in user:
#                         user['videosUrls'].remove(video_url)
#                         # Update the user's data in the database
#                         mongo.users.update_one({'_id': user['_id']}, {'$set': user})
#                     return jsonify({'message': 'Video deleted successfully'})
#                 else:
#                     return jsonify({'message': 'User not found'})
#             else:
#                 return jsonify({"message": "Failed to delete video"})
            
#         else:
#             return jsonify({"message": "Invalid request data"})
#     except Exception as e:
#         return jsonify({"message": str(e)})


@app.route('/delete_video_segment', methods=['DELETE'])
def delete_video_segment():
    try:
        data = request.get_json()  # Get the data sent in the request body as JSON
        video_item = data.get('videoItem')
        user_email = data.get('email')

        if video_item and user_email:
            segmentURL = video_item.get('segmentURL')
            video_public_id = extract_public_id_from_url(segmentURL)

            # Delete the video from Cloudinary
            result = uploader.destroy(video_public_id, resource_type='video', invalidate=True)
            if result.get('result') == 'ok':
                # Remove the video URL from the user's data in MongoDB
                user = mongo.users.find_one({'email': user_email})
                if user:
                    if 'videoSegments' in user:
                        # Filter out the video item to be deleted from the videoSegments array
                        user['videoSegments'] = [item for item in user['videoSegments'] if item['segmentURL'] != segmentURL]
                        # Update the user's data in the database
                        mongo.users.update_one({'_id': user['_id']}, {'$set': user})
                    return jsonify({'message': 'Video deleted successfully'})
                else:
                    return jsonify({'message': 'User not found'})
            else:
                return jsonify({"message": "Failed to delete video"})
            
        else:
            return jsonify({"message": "Invalid request data"})
    except Exception as e:
        return jsonify({"message": str(e)})



@app.route('/load_videos', methods=['GET'])
def load_videos():
    user_email = request.args.get('email')  # Get the user's email from the query parameters
    user = mongo.users.find_one({'email': user_email})

    if user:
        videos_urls = user.get('videosUrls', [])  
        return jsonify({'videosUrls': videos_urls})
    else:
        return jsonify({'message': 'User not found'})
    


@app.route('/load_video_segments', methods=['GET'])
def load_video_segments():
    user_email = request.args.get('email')  # Get the user's email from the query parameters
    user = mongo.users.find_one({'email': user_email})

    if user:
        videoSegments = user.get('videoSegments', [])  
        return jsonify({'videoSegments': videoSegments})
    else:
        return jsonify({'message': 'User not found'})
    



@app.route('/text_annotation', methods=['POST'])
def save_text_annotation():
    try:
        data = request.json
        user_email = data.get('email')
        segmentURL = data.get('segmentURL')  # Get the URL of the segment
        annotationText = data.get('annotationText')

        # Assuming the user is logged in (you can add authentication logic here)
        user = mongo.users.find_one({'email': user_email})

        if user:
            # Find the video segment with the matching 'segmentURL' in the user's 'videoSegments' array
            video_segments = user.get('videoSegments', [])

            for segment in video_segments:
                if segment.get('segmentURL') == segmentURL:
                    # Append the annotation text to the 'text_annotation' array of the matching segment
                    segment['text_annotation'].append(annotationText)

            # Update the user's data in the database with the modified 'videoSegments' array
            mongo.users.update_one({'_id': user['_id']}, {'$set': {'videoSegments': video_segments}})

            return jsonify({'message': 'Text annotation added successfully'})
        else:
            return jsonify({'message': 'User not found'})

    except Exception as e:
        return jsonify({'message': 'Error saving text annotation: ' + str(e)})


    


@app.route('/delete_text_annotation', methods=['DELETE'])
def delete_text_annotation():
    try:
        data = request.json
        user_email = data.get('email')
        segmentURL = data.get('segmentURL')
        annotationText = data.get('annotationText')

        # Assuming the user is logged in (you can add authentication logic here)
        user = mongo.users.find_one({'email': user_email})

        if user:
            video_segments = user.get('videoSegments', [])

            for segment in video_segments:
                if segment.get('segmentURL') == segmentURL:
                    text_annotations = segment.get('text_annotation', [])

                    # Check if the annotation text exists in the array
                    if annotationText in text_annotations:
                        text_annotations.remove(annotationText)

                        # Update the user's videoSegments with the modified array
                        mongo.users.update_one(
                            {'_id': ObjectId(user['_id'])},
                            {'$set': {'videoSegments': video_segments}}
                        )

                        return jsonify({'message': 'Text annotation deleted successfully'})
                    else:
                        return jsonify({'message': 'Annotation text not found'})
            
            return jsonify({'message': 'Segment not found'})
        else:
            return jsonify({'message': 'User not found'})

    except Exception as e:
        return jsonify({'message': 'Error deleting text annotation: ' + str(e)})





@app.route('/save_audio_annotation', methods=['POST'])
def save_audio_annotation():
    try:
        email = request.form.get('email')
        segmentURL = request.form.get('segmentURL')
        audio_blob = request.files['audio_blob']

        if email and segmentURL and audio_blob:
            # Upload the audio blob to Cloudinary
            audio_upload_result = uploader.upload(
                audio_blob,
                resource_type="auto",
            )
            audio_url = audio_upload_result.get('secure_url')
            # Update the user's videoSegments array with the audio annotation URL
            user = mongo.users.find_one({'email': email})
            if user:
                # Find the video segment
                video_segment = next(
                    (segment for segment in user['videoSegments'] if segment['segmentURL'] == segmentURL), None)

                if video_segment:
                    # Append the audio URL to the video segment's audio_annotation array
                    video_segment['audio_annotation'].append(audio_url)

                    # Update the user's data in the database
                    mongo.users.update_one(
                        {'_id': ObjectId(user['_id'])},
                        {'$set': {'videoSegments': user['videoSegments']}}
                    )

                    return jsonify({'message': 'Audio annotation saved successfully'})
                else:
                    return jsonify({'message': 'Video segment not found'})
            else:
                return jsonify({'message': 'User not found'})
        else:
            return jsonify({'message': 'Invalid data provided'})
    except Exception as e:
        return jsonify({'message': 'Error saving audio annotation: ' + str(e)})

@app.route('/delete_audio_annotation', methods=['DELETE'])
def delete_audio_annotation():
    try:
        data = request.json
        user_email = data.get('email')
        segmentURL = data.get('segmentURL')
        annotationAudio = data.get('annotationAudio')

        if user_email and segmentURL and annotationAudio:
            # Get the user's data
            user = mongo.users.find_one({'email': user_email})

            if user:
                video_segments = user.get('videoSegments', [])

                for segment in video_segments:
                    if segment.get('segmentURL') == segmentURL:
                        audio_annotations = segment.get('audio_annotation', [])

                        # Check if the audio annotation URL exists in the array
                        if annotationAudio in audio_annotations:
                            # Delete the audio annotation from Cloudinary
                            audio_public_id = extract_public_id_from_url(annotationAudio)
                            result = uploader.destroy(audio_public_id, resource_type='video', invalidate=True)

                            if result.get('result') == 'ok':
                                audio_annotations.remove(annotationAudio)

                                # Update the user's videoSegments with the modified array
                                mongo.users.update_one(
                                    {'_id': ObjectId(user['_id'])},
                                    {'$set': {'videoSegments': video_segments}}
                                )

                                return jsonify({'message': 'Audio annotation deleted successfully'})
                            else:
                                return jsonify({'message': 'Failed to delete audio annotation'})

                        else:
                            return jsonify({'message': 'Annotation audio not found'})

                return jsonify({'message': 'Segment not found'})
            else:
                return jsonify({'message': 'User not found'})
        else:
            return jsonify({'message': 'Invalid request data'})

    except Exception as e:
        return jsonify({'message': 'Error deleting audio annotation: ' + str(e)})



@app.route('/upload_stock_video', methods=['POST'])
def upload_stock_video():
    try:
        videoUrl = request.form.get('videoUrl')
        user_email = request.form.get('email')
        if videoUrl and user_email:
            user = mongo.users.find_one({'email': user_email})
            if user:
                mongo.users.update_one(
                    {'_id': ObjectId(user['_id'])},
                    {'$push': {'videosUrls': videoUrl}}
                )
                return jsonify({'message': 'Video Uploaded successfully.'})
            else:
                return jsonify({'message': 'User not found'})
        else:
            return jsonify({'message': 'No video_id or user email provided'})
    except Exception as e:
        return jsonify({'message': str(e)})
    


@app.route('/threeD_model', methods=['POST'])
def threeD_model():
    try:
        videoItem = request.json.get('videoItem')
    
        if videoItem=="https://res.cloudinary.com/doi281cds/video/upload/v1700645944/kid_boxing_segment_dpj38e.mov":
            threeDModelLink="https://res.cloudinary.com/doi281cds/image/upload/v1700644445/kid_boxing_default_mvty2z.glb"
            threeDModelLink_id = extract_public_id_from_url(threeDModelLink)
            print(threeDModelLink_id)

            return jsonify({'message': 'Analysis of the video segment done successfully.','threeDModelLink':threeDModelLink_id})
        else:
            threeDModelLink_id=""
            return jsonify({'message': 'Please wait model is running','threeDModelLink':threeDModelLink_id})
    except Exception as e:
        return jsonify({'message': str(e)})



if __name__ == '__main__':
    app.run(debug=True)





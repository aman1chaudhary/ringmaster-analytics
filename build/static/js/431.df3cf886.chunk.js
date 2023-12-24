"use strict";(self.webpackChunkcombat_sports_analytics=self.webpackChunkcombat_sports_analytics||[]).push([[431],{4186:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(9439),i=n(2791),s=n(1809),r=(n(8200),n(1649)),o=n(4165),c=n(5861),d=n(9126),l=n(3262),u=n(7258),m=n(1243),p=n(7883),h=n(8820),v=n(3531),f=n.n(v),x=n(184),b=function(e){var t=e.animationPlay,n=e.threeDModelLink,s=(0,i.useState)(!1),r=(0,a.Z)(s,2),o=r[0],c=r[1];return(0,i.useEffect)((function(){c(!0)}),[]),(0,x.jsx)(x.Fragment,{children:o&&n&&(0,x.jsx)("div",{style:{width:"100%",height:"100%"},children:(0,x.jsx)("ar-3d-viewer",{cloud:"doi281cds",models:n,"animation-play":t.toString(),shadow:"true",ar:"false"})})})},j=function(e){var t=e.editVideoSrc,n=e.analysisVideo,s=e.segmentVideoRef,r=e.setSegmentVideos,v=e.setAnalysisVideo,j=e.threeDModelLink,g=(0,i.useState)(""),y=(0,a.Z)(g,2),_=y[0],k=y[1],N=(0,u.S)().loginUser,w=(0,l.o)(),Z=w.setAlertMessage,S=w.setShowAlert,R=(0,p.e)().setIsLoading,L=(0,i.useState)(!1),V=(0,a.Z)(L,2),C=V[0],U=V[1],A=(0,i.useState)(null),M=(0,a.Z)(A,2),E=M[0],T=M[1],F=(0,i.useState)(null),D=(0,a.Z)(F,2),P=D[0],I=D[1],B=i.useRef(),O=(0,i.useState)(!0),z=(0,a.Z)(O,2),W=z[0],q=(z[1],function(){var e=(0,c.Z)((0,o.Z)().mark((function e(a){var i,s,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("/api/load_video_segments?email=".concat(a));case 3:i=e.sent,s=i.data.videoSegments.filter((function(e){return e.mainVideoURL===t})),r(s),c=s.find((function(e){return e.segmentURL===n.segmentURL})),v(c),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),Z("Error loading video:",e.t0),S(!0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}());return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"tab_section",children:(0,x.jsx)("h1",{children:"Analysis Output"})}),n&&n.segmentURL&&j?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"tab_section",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("div",{className:"video_player",children:(0,x.jsx)("video",{ref:s,autoPlay:!0,loop:!0,muted:!0,src:n.segmentURL})})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)(b,{animationPlay:W,threeDModelLink:j})})]})}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"tab_section",children:[(0,x.jsxs)("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist",children:[(0,x.jsx)("li",{className:"nav-item",role:"presentation",children:(0,x.jsx)("button",{className:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true",children:"Add text annotation"})}),(0,x.jsx)("li",{className:"nav-item",role:"presentation",children:(0,x.jsx)("button",{className:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false",children:"Add voice annotation"})})]}),(0,x.jsxs)("div",{className:"tab-content",id:"myTabContent",children:[(0,x.jsx)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:(0,x.jsxs)("div",{className:"add_annotation",children:[(0,x.jsx)("h3",{children:"Add text annotation "}),(0,x.jsx)("textarea",{value:_,onChange:function(e){k(e.target.value)},rows:5,cols:30}),(0,x.jsx)("button",{onClick:function(){_?(R(!0),m.Z.post("/api/text_annotation",{email:N.email,segmentURL:n.segmentURL,annotationText:_}).then((function(e){Z(e.data.message),q(N.email),k(""),S(!0)})).catch((function(e){Z("An error occurred"+e),S(!0)})),R(!1)):(Z("No Annotation Text is provided."),S(!0))},disabled:!_,children:"Add"})]})}),(0,x.jsxs)("div",{className:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab",children:[(0,x.jsx)("h3",{children:"Add voice annotation"}),(0,x.jsxs)("div",{className:"add_annotation",children:[P&&(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("audio",{controls:!0,src:URL.createObjectURL(P)})}),C?(0,x.jsxs)("button",{disabled:C,children:[(0,x.jsx)(d.Svs,{color:"red"})," Recording..."]}):(0,x.jsx)("button",{onClick:function(){navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){var t=new(f())(e,{type:"audio"});B.current=t,t.startRecording(),T(e),U(!0)})).catch((function(e){Z("Error accessing microphone:",e),S(!0)}))},disabled:C,children:"Start Recording"}),(0,x.jsx)("button",{onClick:function(){B.current&&B.current.stopRecording((function(){I(B.current.getBlob()),E.getTracks().forEach((function(e){return e.stop()})),U(!1)}))},disabled:!C,children:"Stop Recording"}),(0,x.jsx)("button",{onClick:function(){if(P){R(!0);var e=new FormData;e.append("email",N.email),e.append("segmentURL",n.segmentURL),e.append("audio_blob",new Blob([P],{type:"audio/wav"})),m.Z.post("/api/save_audio_annotation",e).then((function(e){Z(e.data.message),q(N.email),I(null),S(!0)})).catch((function(e){Z("Error saving audio annotation:",e),S(!0)})).finally((function(){R(!1)}))}else Z("No recorded audio available to save."),S(!0)},disabled:C||!P,children:"Save Recorded Annotation"})]})]})]})]})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"tab_section",children:[(0,x.jsx)("h3",{children:"Added Annotations"}),n.text_annotation.map((function(e,t){return(0,x.jsxs)("div",{className:"add_annotation",children:[(0,x.jsx)("textarea",{value:e,disabled:!0},t),(0,x.jsx)("div",{className:"add_annotation_button",children:(0,x.jsx)("button",{onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete this Annotation text?"))try{R(!0),m.Z.delete("/api/delete_text_annotation",{data:{email:N.email,segmentURL:n.segmentURL,annotationText:e},headers:{"Content-Type":"application/json"}}).then((function(e){Z(e.data.message),q(N.email),S(!0)})).catch((function(e){Z("Error deleting annotation text:",e),S(!0)})).finally((function(){R(!1)}))}catch(t){Z("Error deleting annotation text:",t),S(!0),R(!1)}}(e)},children:(0,x.jsx)(h.VPh,{})})})]})})),n.audio_annotation.map((function(e,t){return(0,x.jsxs)("div",{className:"add_annotation",children:[(0,x.jsx)("audio",{controls:!0,src:e}),(0,x.jsx)("div",{className:"add_annotation_button",children:(0,x.jsx)("button",{onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete this Annotation audio?"))try{R(!0),m.Z.delete("/api/delete_audio_annotation",{data:{email:N.email,segmentURL:n.segmentURL,annotationAudio:e},headers:{"Content-Type":"application/json"}}).then((function(e){Z(e.data.message),q(N.email),S(!0)})).catch((function(e){Z("Error deleting annotation text:",e),S(!0)})).finally((function(){R(!1)}))}catch(t){Z("Error deleting annotation text:",t),S(!0),R(!1)}}(e)},children:(0,x.jsx)(h.VPh,{})})})]})}))]})})]})]}):(0,x.jsx)("div",{className:"tab_section",children:(0,x.jsx)("h3",{children:"Please Select a segment to analyze."})})]})},g=n(1413),y=n(5987),_=n(4464),k=n(300),N=n(7692),w=n(3427),Z=n(7288),S=["children"],R=function(e){var t=e.editVideoSrc,n=e.setAnalysisVideo,s=e.setSelectedIndex,r=e.segmentVideoRef,v=e.segmentVideos,f=e.setSegmentVideos,b=e.setThreeDModelLink,j=(0,i.useState)(!1),R=(0,a.Z)(j,2),L=R[0],V=R[1],C=(0,i.useRef)(new _.C),U=(0,i.useRef)(null),A=(0,i.useState)(""),M=(0,a.Z)(A,2),E=M[0],T=M[1],F=(0,u.S)().loginUser,D=(0,l.o)(),P=D.setAlertMessage,I=D.setShowAlert,B=(0,p.e)().setIsLoading,O=(0,i.useState)(0),z=(0,a.Z)(O,2),W=z[0],q=z[1],K=(0,i.useState)(0),Q=(0,a.Z)(K,2),Y=Q[0],H=Q[1],G=(0,i.useState)(0),J=(0,a.Z)(G,2),X=J[0],$=J[1],ee=(0,i.useState)(0),te=(0,a.Z)(ee,2),ne=te[0],ae=te[1],ie=(0,i.useRef)(),se=(0,i.useState)(""),re=(0,a.Z)(se,2),oe=re[0],ce=re[1],de=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd",(n=C.current).on("log",(function(e){var t=e.message;console.log(t)})),e.t0=n,e.next=6,(0,k.Wn)("".concat(t,"/ffmpeg-core.js"),"text/javascript");case 6:return e.t1=e.sent,e.next=9,(0,k.Wn)("".concat(t,"/ffmpeg-core.wasm"),"application/wasm");case 9:return e.t2=e.sent,e.t3={coreURL:e.t1,wasmURL:e.t2},e.next=13,e.t0.load.call(e.t0,e.t3);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){de().then((function(){V(!0)}))}),[]);var le=function(e){var t=parseInt(e,10),n=Math.floor(t/3600),a=Math.floor((t-3600*n)/60),i=t-3600*n-60*a;return n<10&&(n="0"+n),a<10&&(a="0"+a),i<10&&(i="0"+i),"00"===n?a+":"+i:n+":"+a+":"+i},ue=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var n,a,i,s,r,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L){e.next=30;break}return B(!0),e.prev=2,n=C.current,e.t0=n,e.next=7,(0,k.dc)(t);case 7:return e.t1=e.sent,e.next=10,e.t0.writeFile.call(e.t0,"input.mp4",e.t1);case 10:return a=parseInt(Y,10),i=parseInt(W,10),s=i-a,e.next=15,n.exec(["-i","input.mp4","-ss",le(a),"-t",le(s),"-c:v","copy","-c:a","copy","output.mp4"]);case 15:return e.next=17,n.readFile("output.mp4");case 17:r=e.sent,U.current&&(U.current.src=URL.createObjectURL(new Blob([r.buffer],{type:"video/mp4"}))),c=URL.createObjectURL(new Blob([r.buffer],{type:"video/mp4"})),T(c),ae(Y),$(W),e.next=29;break;case 25:e.prev=25,e.t2=e.catch(2),P("Error while trimming the video:",e.t2),I(!0);case 29:B(!1);case 30:case"end":return e.stop()}}),e,null,[[2,25]])})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(n){var a,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("/api/load_video_segments?email=".concat(n));case 3:a=e.sent,i=a.data.videoSegments.filter((function(e){return e.mainVideoURL===t})),f(i),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),P("Error loading video:",e.t0),I(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),pe=(0,Z.ZP)(w.ZP)((function(e){var t=e.theme;return{color:"#3a8589",height:3,padding:"13px 0","& .MuiSlider-thumb":{height:27,width:27,backgroundColor:"#fff",border:"1px solid currentColor","&:hover":{boxShadow:"0 0 0 8px rgba(58, 133, 137, 0.16)"},"& .airbnb-bar":{height:9,width:1,backgroundColor:"currentColor",marginLeft:1,marginRight:1}},"& .MuiSlider-track":{height:4},"& .MuiSlider-rail":{color:"dark"===t.palette.mode?"#bfbfbf":"#d8d8d8",opacity:"dark"===t.palette.mode?void 0:1,height:3}}}));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"tab_section",children:(0,x.jsx)("h1",{children:"Edit Video"})}),""!==t?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"video_player tab_section",children:(0,x.jsx)("video",{controls:!0,ref:ie,muted:!0,src:t,onLoadedMetadata:function(){ie.current&&(ce(ie.current.duration),q(ie.current.duration))}})}),(0,x.jsxs)("div",{className:"tab_section",children:[(0,x.jsx)("label",{children:"Trim Video:"}),(0,x.jsxs)("div",{className:"trim_video_section",children:[(0,x.jsx)("input",{type:"number",value:Y,min:0,max:W,onChange:function(e){var t=parseFloat(e.target.value,10);H(t)},step:"0.5",style:{marginRight:"15px"}}),(0,x.jsx)(pe,{valueLabelDisplay:"auto",min:0,max:oe,slots:{thumb:function(e){var t=e.children,n=(0,y.Z)(e,S);return(0,x.jsxs)(w.gs,(0,g.Z)((0,g.Z)({},n),{},{children:[t,(0,x.jsx)("span",{className:"airbnb-bar"}),(0,x.jsx)("span",{className:"airbnb-bar"}),(0,x.jsx)("span",{className:"airbnb-bar"})]}))}},getAriaLabel:function(e){return 0===e?"Min Value":"Max value"},value:[Y,W],onChange:function(e,t){H(t[0]),q(t[1])},step:.5}),(0,x.jsx)("input",{type:"number",min:Y,max:oe,value:W,onChange:function(e){var t=parseFloat(e.target.value,10);q(t)},step:"0.5",style:{marginLeft:"15px"}})]}),(0,x.jsxs)("button",{className:"general_btn",onClick:ue,children:["Trim ",(0,x.jsx)(N.tDd,{})]})]}),(0,x.jsxs)("div",{className:"row",children:[E&&(0,x.jsxs)("div",{className:"col-md-6",style:{marginBottom:"15px"},children:[(0,x.jsx)("div",{children:(0,x.jsx)("video",{controls:!0,width:"100%",ref:U,src:E})}),(0,x.jsx)(w.ZP,{disabled:!0,marks:!0,min:0,max:oe,value:[ne,X],size:"small",valueLabelDisplay:"on"}),(0,x.jsxs)("div",{className:"video_btns",children:[(0,x.jsx)("button",{onClick:function(){E?(B(!0),fetch(E).then((function(e){return e.blob()})).then((function(e){var n=new FormData;n.append("file",e);var a=F.email;n.append("email",a),n.append("main_video_url",t),n.append("start_time",ne),n.append("end_time",X),n.append("main_video_duration",oe),m.Z.post("/api/save_trimmed_video",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){P(e.data.message),I(!0),me(F.email),U.current&&(U.current.src=""),T(""),B(!1)})).catch((function(e){P("Error saving secure URL and user email:",e),I(!0)}))})).catch((function(e){P("Error saving secure URL and user email:",e),I(!0)}))):(P("No trimmed video URL provided"),I(!0))},children:"Save Video"}),(0,x.jsx)("button",{className:"",onClick:function(){if(E){B(!0);var e=document.createElement("a");e.href=E,e.download="trimmed_video.mp4",e.click(),B(!1)}},children:(0,x.jsx)(d.QNI,{})})]})]}),v&&v.map((function(e,t){return(0,x.jsxs)("div",{className:"col-md-6",style:{marginBottom:"15px"},children:[(0,x.jsxs)("video",{controls:!0,width:"100%",children:[(0,x.jsx)("source",{src:e.segmentURL,type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,x.jsx)(w.ZP,{disabled:!0,marks:!0,min:0,max:e.main_video_duration,value:[e.start_time,e.end_time],size:"small",valueLabelDisplay:"on"}),(0,x.jsxs)("div",{className:"video_btns",children:[(0,x.jsx)("button",{onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete this video?"))try{B(!0),m.Z.delete("/api/delete_video_segment",{data:{videoItem:e,email:F.email}}).then((function(e){P("Video deleted successfully"),I(!0),me(F.email)})).catch((function(e){P("Error deleting video:",e),I(!0)})),me(F.email),B(!1)}catch(t){P("Error deleting video:",t),I(!0)}}(e)},children:(0,x.jsx)(h.VPh,{})}),(0,x.jsx)("button",{onClick:function(){return function(e){e?(B(!0),m.Z.post("/api/threeD_model",{videoItem:e.segmentURL}).then((function(t){n(e),r.current&&(r.current.src=e.segmentURL),console.log(t.data.threeDModelLink),t.data.threeDModelLink&&setTimeout((function(){b(t.data.threeDModelLink),P(t.data.message),I(!0),B(!1),s(2)}),5e3)})).catch((function(e){P("An error occurred"+e),I(!0),B(!1)}))):(P("Invalid input"),I(!0))}(e)},children:"Run Model"})]})]},t)}))]})]}):(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"tab_section",children:(0,x.jsx)("h3",{children:"Please Select a video to Edit"})})})]})},L=n(6856),V=n(97),C=n.n(V),U=function(e){var t=e.fetchVideos,n=e.setActiveTab,s=(0,u.S)().loginUser,r=(0,l.o)(),v=r.setAlertMessage,b=r.setShowAlert,j=(0,p.e)().setIsLoading,g=(0,i.useRef)(null),y=(0,i.useState)(null),N=(0,a.Z)(y,2),w=N[0],Z=N[1],S=(0,i.useState)(!1),R=(0,a.Z)(S,2),V=R[0],U=R[1],A=(0,i.useState)(!1),M=(0,a.Z)(A,2),E=M[0],T=M[1],F=(0,i.useState)(""),D=(0,a.Z)(F,2),P=D[0],I=D[1],B=(0,i.useRef)(new _.C),O=(0,i.useState)(!1),z=(0,a.Z)(O,2),W=z[0],q=z[1],K=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd",(n=B.current).on("log",(function(e){var t=e.message;console.log(t)})),e.t0=n,e.next=6,(0,k.Wn)("".concat(t,"/ffmpeg-core.js"),"text/javascript");case 6:return e.t1=e.sent,e.next=9,(0,k.Wn)("".concat(t,"/ffmpeg-core.wasm"),"application/wasm");case 9:return e.t2=e.sent,e.t3={coreURL:e.t1,wasmURL:e.t2},e.next=13,e.t0.load.call(e.t0,e.t3);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){K().then((function(){q(!0)}))}),[]);var Q=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var a,i,r,c,d,l,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(W&&P&&s.email)){e.next=40;break}return j(!0),a=new FormData,i=s.email,e.prev=4,r=B.current,e.t0=r,e.next=9,(0,k.dc)(P);case 9:return e.t1=e.sent,e.next=12,e.t0.writeFile.call(e.t0,"input.mkv",e.t1);case 12:return e.next=14,r.exec(["-i","input.mkv","-c:v","copy","-c:a","copy","output.mp4"]);case 14:return e.next=16,r.readFile("output.mp4");case 16:return c=e.sent,d=URL.createObjectURL(new Blob([c.buffer],{type:"video/mp4"})),e.next=20,fetch(d).then((function(e){return e.blob()}));case 20:return l=e.sent,a.append("file",l,"output.mp4"),a.append("email",i),e.next=25,m.Z.post("/api/upload_video",a,{headers:{"Content-Type":"multipart/form-data"}});case 25:u=e.sent,v(u.data.message),b(!0),I(""),t(s.email),n("media"),j(!1),e.next=38;break;case 34:e.prev=34,e.t2=e.catch(4),v("Error while converting or uploading the video:",e.t2),b(!0);case 38:e.next=42;break;case 40:v("Please record a video before uploading."),b(!0);case 42:case"end":return e.stop()}}),e,null,[[4,34]])})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{children:[!E&&(0,x.jsx)("div",{className:"open_camera_section",children:(0,x.jsxs)("button",{className:"open_camera_btn",onClick:function(){T(!0)},children:[(0,x.jsx)(h.hOO,{color:"#1475cf",size:60}),(0,x.jsx)("br",{}),(0,x.jsx)("p",{children:"Open Camera"})]})}),E&&(0,x.jsx)("div",{className:"webcam_container",children:(0,x.jsx)(C(),{audio:!0,videoConstraints:{aspectRatio:1.77777778,facingMode:"user"},ref:g,screenshotFormat:"image/jpeg"})}),E&&!V&&(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"uploaded-row",children:[(0,x.jsx)("span",{className:"upload-content",children:(0,x.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){var e=g.current.video.captureStream(),t=f()(e,{mimeType:"video/webm",bitsPerSecond:128e3});t.startRecording(),Z(t),U(!0)},children:"Start Recording"})}),(0,x.jsx)("span",{className:"upload-content",children:(0,x.jsx)("button",{className:"btn btn-outline-secondary",disabled:V,onClick:function(){T(!1)},children:"Close Camera"})})]})}),V&&(0,x.jsxs)("div",{className:"uploaded-row",children:[(0,x.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){w.stopRecording((function(){var e=w.getBlob(),t=URL.createObjectURL(e);I(t),U(!1),T(!1)}))},children:"Stop Recording"}),(0,x.jsxs)("button",{disabled:!0,className:"btn btn-outline-secondary",children:[(0,x.jsx)(d.Svs,{color:"red"})," Recording.."]})]}),P&&(0,x.jsxs)("div",{className:"webcam_container",children:[(0,x.jsx)("p",{children:"Recorded Video"}),(0,x.jsx)("div",{className:"webcam_container_video",children:(0,x.jsx)("video",{autoPlay:!0,controls:!0,src:P})}),(0,x.jsxs)("div",{className:"uploaded-row",children:[(0,x.jsx)("span",{className:"upload-content",children:(0,x.jsx)("button",{className:"delete_btn",children:(0,x.jsx)(L.ZkW,{onClick:function(){I("")}})})}),(0,x.jsx)("span",{className:"upload-content",children:(0,x.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:Q,children:" Upload "})})]})]})]})},A=[{VideoLink:"https://res.cloudinary.com/doi281cds/video/upload/v1700644205/kid_boxing_qkwozp.mp4"},{VideoLink:"https://res.cloudinary.com/doi281cds/video/upload/v1697274754/RingMaster/My_Video_7_ukrh5r.mov"},{VideoLink:"https://res.cloudinary.com/doi281cds/video/upload/v1697274721/RingMaster/My_Video_11_zv5frz.mov"},{VideoLink:"https://res.cloudinary.com/doi281cds/video/upload/v1697274715/RingMaster/My_Video_10_uldwdm.mov"},{VideoLink:"https://res.cloudinary.com/doi281cds/video/upload/v1697274714/RingMaster/My_Video_8_s6rq35.mov"},{VideoLink:"https://res.cloudinary.com/doi281cds/video/upload/v1697274714/RingMaster/My_Video_9_oey8wh.mov"},{VideoLink:"https://res.cloudinary.com/doi281cds/video/upload/v1697274714/RingMaster/My_Video_okqbmq.mov"}],M=function(e){var t=e.fetchVideos,n=e.setActiveTab,a=(0,u.S)().loginUser,i=(0,l.o)(),s=i.setAlertMessage,r=i.setShowAlert,d=(0,p.e)().setIsLoading,h=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(i){var c,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),(c=new FormData).append("videoUrl",i),c.append("email",a.email),e.prev=4,e.next=7,m.Z.post("/api/upload_stock_video",c,{headers:{"Content-Type":"multipart/form-data"}});case 7:l=e.sent,s(l.data.message),r(!0),t(a.email),n("media"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),s("Error: "+e.t0.message),r(!0);case 18:d(!1);case 19:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsx)("div",{className:"video-list",children:(0,x.jsx)("div",{className:"row",children:A.map((function(e,t){return(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)("div",{className:"video_list",children:[(0,x.jsx)("video",{controls:!0,src:e.VideoLink}),(0,x.jsx)("div",{className:"video_btns",children:(0,x.jsx)("button",{onClick:function(){return h(e.VideoLink)},children:"Upload"})})]})},t)}))})})},E=function(e){var t=e.setEditVideoSrc,n=e.setSelectedIndex,s=e.setSegmentVideos,r=(0,u.S)().loginUser,d=(0,i.useState)(null),v=(0,a.Z)(d,2),f=v[0],b=v[1],j=(0,i.useState)([]),g=(0,a.Z)(j,2),y=g[0],_=g[1],k=(0,l.o)(),N=k.setAlertMessage,w=k.setShowAlert,Z=(0,i.useRef)(null),S=(0,p.e)().setIsLoading,R=(0,i.useState)("No selected file"),V=(0,a.Z)(R,2),C=V[0],A=V[1],E=(0,i.useState)("media"),T=(0,a.Z)(E,2),F=T[0],D=T[1],P=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("/api/load_videos?email=".concat(t));case 3:n=e.sent,_(n.data.videosUrls),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),N("Error loading video:",e.t0),w(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){P(r.email)}),[r.email]);var I=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(t,n){var a,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("/api/load_video_segments?email=".concat(t));case 3:a=e.sent,i=a.data.videoSegments.filter((function(e){return e.mainVideoURL===n})),s(i),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),N("Error loading video:",e.t0),w(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist",children:[(0,x.jsx)("li",{className:"nav-item",role:"presentation",children:(0,x.jsx)("button",{className:"nav-link ".concat("media"===F?"active":""),"data-bs-toggle":"tab",id:"tab-1","data-bs-target":"#media",type:"button",role:"tab","aria-controls":"media","aria-selected":"media"===F,onClick:function(){return D("media")},children:"Media"})}),(0,x.jsx)("li",{className:"nav-item",role:"presentation",children:(0,x.jsx)("button",{onClick:function(){return D("upload")},className:"nav-link ".concat("upload"===F?"active":""),id:"tab-2","data-bs-toggle":"tab","data-bs-target":"#upload",type:"button",role:"tab","aria-controls":"upload","aria-selected":"false",children:"Upload"})}),(0,x.jsx)("li",{className:"nav-item",role:"presentation",children:(0,x.jsx)("button",{onClick:function(){return D("record")},className:"nav-link ".concat("record"===F?"active":""),id:"tab-3","data-bs-toggle":"tab","data-bs-target":"#record",type:"button",role:"tab","aria-controls":"record","aria-selected":"false",children:"Record"})}),(0,x.jsx)("li",{className:"nav-item",role:"presentation",children:(0,x.jsx)("button",{onClick:function(){return D("youtube")},className:"nav-link ".concat("youtube"===F?"active":""),id:"tab-4","data-bs-toggle":"tab","data-bs-target":"#youtube",type:"button",role:"tab","aria-controls":"youtube","aria-selected":"false",children:"Stock Videos"})})]}),(0,x.jsxs)("div",{className:"tab-content",id:"myTabContent",children:[(0,x.jsx)("div",{className:"tab-pane fade ".concat("media"===F?"show active":""),id:"media",role:"tabpanel","aria-labelledby":"tab-1",children:(0,x.jsx)("div",{className:"row",children:y&&(0,x.jsx)(x.Fragment,{children:y.map((function(e,a){return(0,x.jsx)("div",{className:"col-md-6",style:{marginBottom:"15px"},children:(0,x.jsxs)("div",{className:"video_list",children:[(0,x.jsx)("video",{controls:!0,src:e}),(0,x.jsxs)("div",{className:"video_btns",children:[(0,x.jsx)("button",{onClick:function(){return function(e){t(e),I(r.email,e),n(1)}(e)},children:"Edit Video"}),(0,x.jsx)("button",{onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete this video?"))try{S(!0),m.Z.delete("/api/delete_video",{data:{videoUrl:e,email:r.email}}).then((function(e){N(e.data.message),w(!0),P(r.email)})).catch((function(e){N("Error deleting video:",e),w(!0)})),P(r.email),S(!1)}catch(t){N("Error deleting video:",t),w(!0)}}(e)},children:(0,x.jsx)(L.ZkW,{color:"#1475cf"})})]})]})},a)}))})})}),(0,x.jsxs)("div",{className:"tab-pane fade ".concat("upload"===F?"show active":""),id:"upload",role:"tabpanel","aria-labelledby":"tab-2",children:[(0,x.jsxs)("form",{onClick:function(){return document.querySelector(".input-field").click()},className:"file_upload_field",children:[(0,x.jsx)("input",{type:"file",accept:"video/*",className:"input-field",hidden:!0,onChange:function(e){var t=e.target.files[0];if(t.size>10485760)return N("File size exceeds 10MB"),w(!0),void(Z.current&&(Z.current.value=""));b(t),A(t.name)},ref:Z}),f?(0,x.jsx)("p",{children:C}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(L.UKH,{color:"#1475cf",size:60}),(0,x.jsx)("br",{}),(0,x.jsx)("p",{children:"Browse Files to upload"})]})]}),(0,x.jsxs)("div",{className:"uploaded-row",children:[(0,x.jsxs)("span",{className:"upload-content",children:[(0,x.jsx)(h.BYk,{color:"#1475cf"}),C," -",(0,x.jsx)("button",{className:"delete_btn",children:(0,x.jsx)(L.ZkW,{color:"#1475cf",onClick:function(){A("No selected file"),b(null)}})})]}),(0,x.jsx)("span",{className:"upload-content",children:(0,x.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){if(f&&r.email){S(!0);var e=new FormData;e.append("file",f);var t=r.email;e.append("email",t),m.Z.post("/api/upload_video",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){N(e.data.message),w(!0),b(null),Z.current&&(Z.current.value=""),P(r.email),S(!1),D("media")})).catch((function(e){N("Error saving secure URL and user email:",e),w(!0)}))}else N("Please select the file"),w(!0)},children:" Upload "})})]})]}),(0,x.jsx)("div",{className:"tab-pane fade ".concat("record"===F?"show active":""),id:"record",role:"tabpanel","aria-labelledby":"tab-3",children:(0,x.jsx)(U,{fetchVideos:P,setActiveTab:D})}),(0,x.jsx)("div",{className:"tab-pane fade ".concat("youtube"===F?"show active":""),id:"youtube",role:"tabpanel","aria-labelledby":"tab-4",children:(0,x.jsx)(M,{fetchVideos:P,setActiveTab:D})})]})]})},T=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),n=t[0],o=t[1],c=(0,i.useState)(),d=(0,a.Z)(c,2),l=d[0],u=d[1],m=(0,i.useState)(0),p=(0,a.Z)(m,2),h=p[0],v=p[1],f=(0,i.useRef)(null),b=(0,i.useState)([]),g=(0,a.Z)(b,2),y=g[0],_=g[1],k=(0,i.useState)(""),N=(0,a.Z)(k,2),w=N[0],Z=N[1],S=function(){v((function(e){return(e+1)%3}))},L=function(){v((function(e){return(e-1+3)%3}))};return(0,x.jsxs)("div",{className:"page_container",children:[(0,x.jsx)(r.Z,{}),(0,x.jsx)("div",{className:"",children:(0,x.jsxs)(s.mQ,{forceRenderTabPanel:!0,selectedIndex:h,onSelect:function(e){return v(e)},children:[(0,x.jsxs)(s.td,{children:[(0,x.jsx)(s.OK,{children:"Add Video"}),(0,x.jsx)(s.OK,{children:"Edit Video"}),(0,x.jsx)(s.OK,{children:"Analysis Output"})]}),(0,x.jsxs)(s.x4,{children:[(0,x.jsx)("div",{className:"tab_section",children:(0,x.jsx)("h1",{children:"Add Video"})}),(0,x.jsx)("div",{className:"tab_section",children:(0,x.jsx)(E,{setEditVideoSrc:o,setSelectedIndex:v,setSegmentVideos:_})}),(0,x.jsx)("div",{className:"footer_btns",style:{justifyContent:"right"},children:(0,x.jsx)("button",{onClick:S,children:"Proceed \xbb "})})]}),(0,x.jsxs)(s.x4,{children:[(0,x.jsx)(R,{editVideoSrc:n,setAnalysisVideo:u,setSelectedIndex:v,segmentVideoRef:f,segmentVideos:y,setSegmentVideos:_,setThreeDModelLink:Z}),(0,x.jsxs)("div",{className:"footer_btns",children:[(0,x.jsx)("button",{onClick:L,children:" \xab Back "}),(0,x.jsx)("button",{onClick:S,children:"Proceed \xbb "})]})]}),(0,x.jsxs)(s.x4,{children:[(0,x.jsx)(j,{analysisVideo:l,setAnalysisVideo:u,segmentVideoRef:f,setSegmentVideos:_,editVideoSrc:n,threeDModelLink:w}),(0,x.jsx)("div",{className:"footer_btns",children:(0,x.jsx)("button",{onClick:L,children:" \xab Back "})})]})]})})]})}}}]);
//# sourceMappingURL=431.df3cf886.chunk.js.map
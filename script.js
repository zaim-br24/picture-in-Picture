const  videoElement = document.getElementById('video');
const button = document.getElementById('button');



// prompt to select media => pass to video => play video
 async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // videoElement.hidden = false // able the video
        // add the seleced media to the srcObject of the video
        videoElement.srcObject = mediaStream;
        
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
        
    } catch (error) {
        console.log("whoooops a error here :" + error)
    }
}

button.addEventListener('click', async () =>{
    //disable button  run it
    button.disabled = true;
    // start Picture in picture
    await videoElement.requestPictureInPicture();
    // reset button  stop it
    button.disabled = false; 
});  

selectMediaStream();


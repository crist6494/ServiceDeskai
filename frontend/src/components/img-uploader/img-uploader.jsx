import React, {useEffect, useRef} from "react";
import './img-uploader.css';



export default function ImgUploader() {
    const canvasRef = useRef(null);
    const videoRef = useRef(null);

    function showCamera() {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const constraints = {
            video: true//limit video
        };
    
        navigator.mediaDevices.getUserMedia(constraints) //Acces user divices
            .then((stream) => {
                video.srcObject = stream; //return a new video stream
                //video.play();
            })
            .catch((error) => {
                console.error("Error accessing the camera: ", error);
            });
    }

    const takeCapture = () =>{
        console.log('takeCapture');
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        video.pause();
        context.filter = 'contrast(1) brightness(1)'
        context.save();
        context.scale(-1, 1);
        context.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
    }

    useEffect(() => {
        showCamera(); // Llama a la función al montar el componente
    }, []);

    return(
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center position-relative mb-4" id="image-uploader">
                <video ref={videoRef}  autoPlay playsInline></video>
                <canvas ref={canvasRef}></canvas>
            </div>
            <button onClick={takeCapture} className='btn btn-dark mt-5' >Take capture</button>
        </div>
    );
}


/* const resetVideo = () => {
    const video = videoRef.current;
    video.srcObject.getTracks().forEach(track => track.stop()); // Detiene el video actual
    showCamera(); // Vuelve a mostrar la cámara
}; */
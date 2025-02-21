import React, { useRef, useEffect } from "react";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import "@tensorflow/tfjs";

const FaceRecognition = () => {
    const videoRef = useRef(null);
    
    useEffect(() => {
        const loadModelAndStartVideo = async () => {
            // Load the face detection model
            const model = await faceLandmarksDetection.createDetector(
                faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh, {
                    runtime: 'mediapipe', // Use mediapipe for better performance
                    maxFaces: 1,
                }
            );

            // Start video stream
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;

            // Function to estimate faces
            const estimateFaces = async () => {
                if (videoRef.current) {
                    const predictions = await model.estimateFaces({ input: videoRef.current });
                    console.log(predictions); // Log predictions to console
                }
                requestAnimationFrame(estimateFaces); // Loop for continuous detection
            };

            estimateFaces(); // Start the face detection loop
        };

        loadModelAndStartVideo(); // Call the function on component mount
    }, []);

    return (
        <div>
            <h2>Face Recognition</h2>
            <video ref={videoRef} autoPlay style={{ width: "100%" }} />
        </div>
    );
};

export default FaceRecognition;

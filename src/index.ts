import {SelfieSegmentation} from "@mediapipe/selfie_segmentation";
import "@mediapipe/control_utils";
import "@mediapipe/drawing_utils";
import {Camera} from "@mediapipe/camera_utils";

var blurMode = false;

const handleFetchImage = async () => {
  blurMode = false;
  const url = (<HTMLInputElement>document.getElementById("input-text")).value
  if (url.length == 0) {
    alert("Please enter image URL")
    return;
  }
  try {
    const response = await fetch(url)
    if (response.status != 404) {
      const blob = await response.blob()
      const imgURL = URL.createObjectURL(blob)
      img.src = imgURL
      showVideo()
    }
    else {
      alert("Image not found")
    }
  }
  catch(err) {
    alert("Cannot fetch the image")
  }
}

const toggleSelfie = async () => {
  selfie_mode = !selfie_mode
  if (selfie_mode) {
    (<HTMLVideoElement>document.getElementsByClassName("input_video")[0]).classList.add("selfie-mode");
    (<HTMLCanvasElement>document.getElementsByClassName("output_canvas")[0]).classList.add("selfie-mode");
    (<HTMLButtonElement>document.getElementById("selfie-btn")).value = "Selfie Mode: On";
    (<HTMLButtonElement>document.getElementById("selfie-btn")).classList.add("grass-green-bg");
    (<HTMLButtonElement>document.getElementById("selfie-btn")).classList.remove("red-bg");


  }
  else {
    (<HTMLVideoElement>document.getElementsByClassName("input_video")[0]).classList.remove("selfie-mode");
    (<HTMLCanvasElement>document.getElementsByClassName("output_canvas")[0]).classList.remove("selfie-mode");
    (<HTMLButtonElement>document.getElementById("selfie-btn")).value = "Selfie Mode: Off";
    (<HTMLButtonElement>document.getElementById("selfie-btn")).classList.remove("grass-green-bg");
    (<HTMLButtonElement>document.getElementById("selfie-btn")).classList.add("red-bg");
  }
}

const showVideo = () => {
  const selfieSegmentation = new SelfieSegmentation({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`;
    }});
    selfieSegmentation.setOptions({
    modelSelection: 1,
    });
    selfieSegmentation.onResults(onResults);
    
    const camera = new Camera(videoElement, {
    onFrame: async () => {
      await selfieSegmentation.send({image: videoElement});
    },
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT
    });
    camera.start();
}

function onResults(results: any) {
  canvasCtx!.save();
  canvasCtx!.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx!.drawImage(results.segmentationMask, 0, 0,
                      canvasElement.width, canvasElement.height);

  // Only overwrite existing pixels.
  if (blurMode){
  canvasCtx!.filter = `blur(15px)`;
  canvasCtx!.globalCompositeOperation = 'source-out';
  canvasCtx!.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
  canvasCtx!.filter = `none`;
  }
  else{
  canvasCtx!.globalCompositeOperation = 'source-out';
  canvasCtx!.drawImage(img, 0, 0, img.width, img.height, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
  
  // Only overwrite missing pixels.

  canvasCtx!.globalCompositeOperation = 'destination-atop';
  canvasCtx!.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

  canvasCtx!.restore();
}

const handleBlur = () => {
  blurMode = true;
  showVideo();	
}

const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 450;

let selfie_mode = false

const videoElement = <HTMLVideoElement>document.getElementsByClassName('input_video')[0];
const canvasElement = <HTMLCanvasElement>document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

canvasElement.width = CANVAS_WIDTH;
canvasElement.height = CANVAS_HEIGHT;

const img = new Image()

document.getElementById("input-btn")!.addEventListener("click", handleFetchImage)
document.getElementById("selfie-btn")!.addEventListener("click", toggleSelfie)
document.getElementById("blur-btn")!.addEventListener("click", handleBlur)

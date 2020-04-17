import React from 'react';
import PropTypes from 'prop-types';
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';

import shutter from './data/camera-shutter.base64.json'

require('tracking')
require('tracking/build/data/face')

const PHOTO_PROMTS = {
  TAKE_PHOTO: 'Take Photo',
  RETAKE_PHOTO: 'Retake Photo'
}

class Camera extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.cameraPhoto = null;
    this.videoRef = React.createRef();
    // this.canvasRef = React.createRef();
    this.state = {
      trackedObject: null,
      dataUri: ''
    }
  }

  componentDidMount () {
    this.cameraPhoto = new CameraPhoto(this.videoRef.current);
    this.cameraPhoto.startCameraMaxResolution(FACING_MODES.USER)

    
    // this.canvasRef.current.width = '1000'; //context.canvas.clientWidth;
    // this.canvasRef.current.heght = '450'; // context.canvas.clientHeight;
    // let context = this.canvasRef.current.getContext('2d')
    
    let tracker = new window.tracking.ObjectTracker('face');
    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);

    window.tracking.track(this.videoRef.current, tracker);

    tracker.on('track', (event) => (this.handleTrackEvent(event)));
  }

  handleTrackEvent (event, context) {
    // if (event.data[0]) {
      
    // }
    this.setState({
      trackedObject: event.data[0],
      dataUri: this.state.dataUri,
    })
    // let canvas = context.canvas;
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // event.data.forEach(this.drawFaceBoundingBox);
  }

  drawFaceBoundingBox (rect, context) {
    // test rect
    context.strokeRect(0, 0, 50, 50);

    context.strokeStyle = '#a64ceb';
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
    context.font = '11px Helvetica';
    context.fillStyle = "#fff";
    context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
    context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
  }

  takePhoto () {
    if (this.state.dataUri) {
        return this.reset()
    }
    const config = {
      sizeFactor: 1
    };
  
    this.playShutterClick()
    let dataUri = this.cameraPhoto.getDataUri(config);
    this.setState({ dataUri });
    this.props.onImageCapture(dataUri)
  }

  playShutterClick () {
    let audio = new Audio('data:audio/mp3;base64,' + shutter.base64);
    audio.play();
  }

  reset () {
    this.setState({dataUri: ''})
  }

  printTrackingInfo () {
    let trackedObject = this.state.trackedObject;
    if (!trackedObject) {
      trackedObject = {
        x: 'N/A',
        y: 'N/A',
        width: 'N/A',
        height: 'N/A',
      }
    }
    var res = `
      x: ${trackedObject.x}
      y: ${trackedObject.y}
      width: ${trackedObject.width}
      height: ${trackedObject.height}
    `
    return res
  }

  render () {
    let cameraFlashClass = this.state.dataUri ? 'do-transition camera-flash' : 'camera-flash';
    return (
      <div className="camera-component">
        <div className="camera-wrapper">
          <div className={ cameraFlashClass }></div>
          <div className="tracking-info">
            {this.printTrackingInfo()}
          </div>
          <video
            ref={this.videoRef}
            autoPlay={true}
            className="camera-video"
            style={{ display: this.state.dataUri ? 'none' : 'block' }}
          />
          {/* <canvas className="camera-video" ref={this.canvasRef}/> */}
          <img
            alt="imgCamera"
            src={this.state.dataUri}
            className="camera-video"
            style={{ display: this.state.dataUri ? 'block' : 'none' }}
          />
          <button className="btn btn-primary camera-btn" accessKey="c" onClick={ () => {
            this.takePhoto();
          }}> {this.state.dataUri ? PHOTO_PROMTS.RETAKE_PHOTO : PHOTO_PROMTS.TAKE_PHOTO} </button>
        </div>
        
      </div>
    );
  }
}

Camera.propTypes = {
  onImageCapture: PropTypes.func.isRequired,
}

export default Camera;
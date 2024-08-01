import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ParticlesBg from 'particles-bg';

import './App.css';

const returnClarafiaRequestOptions = (imgURL) => {
  const PAT = 'dca58c86145443cb840b66346e8cbc7b';
  const USER_ID = 'enuber';
  const APP_ID = 'face-recognition-24';
  const IMAGE_URL = imgURL;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key ' + PAT,
    },
    body: raw,
  };
  return requestOptions;
};

class App extends Component {
  state = {
    input: '',
    imageURL: '',
    boxes: [],
    route: 'signin',
    isSignedIn: false,
  };

  onInputChange = (evt) => {
    this.setState({ input: evt.target.value });
  };

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImg');
    const width = Number(image.width);
    const height = Number(image.height);
    const list = data.outputs[0].data.regions;
    const bounding_boxes = [];
    list.forEach((item) => {
      const faceLoc = item.region_info.bounding_box;
      bounding_boxes.push({
        leftCol: faceLoc.left_col * width,
        topRow: faceLoc.top_row * height,
        rightCol: width - faceLoc.right_col * width,
        bottomRow: height - faceLoc.bottom_row * height,
      });
    });
    return bounding_boxes;
  };

  displayFaceBox = (boxes) => {
    this.setState({ boxes: boxes });
  };

  onBtnSubmit = () => {
    const MODEL_ID = 'face-detection';
    this.setState({ imageURL: this.state.input });
    fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      returnClarafiaRequestOptions(this.state.input)
    )
      .then((response) => response.json())
      .then((data) => this.displayFaceBox(this.calculateFaceLocation(data)))
      .catch((error) => console.log('error', error));
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageURL, route, boxes, input } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="polygon" bg={true} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === 'home' ? (
          <>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              input={input}
              onBtnSubmit={this.onBtnSubmit}
            />
            <FaceRecognition boxes={boxes} imageURL={imageURL} />
          </>
        ) : route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;

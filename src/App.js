import './App.css';
import React from "react";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <video id="my-video" className="video-js" controls preload="auto" poster="https://images.pexels.com/photos/5702341/pexels-photo-5702341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-setup loop>
        <source src="https://res.cloudinary.com/weknow-creators/video/upload/v1649939963/trailers/1434659607842-pgv4ql-1649782335512_o7izfp.mp4" type="video/mp4" />
      </video>
      <Helmet>
      <script
          src="https://vjs.zencdn.net/5.4.6/video.js"
          type="text/javascript"
        />
            </Helmet>
    </div>
  );
}

export default App;

import './App.css';
import React from "react";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <video id="my-video" className="video-js" controls preload="auto" poster="https://images.pexels.com/photos/5702341/pexels-photo-5702341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-setup loop>
        <source src="https://nl33.seedr.cc/ff_get/1150728698/Ambulance.2022.2022.720p.WEBRip.900MB.x264-GalaxyRG.mkv?st=Uy6Kd1RSkMxSOdUxfbUWkQ&e=1650692147" type="video/mp4" />
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

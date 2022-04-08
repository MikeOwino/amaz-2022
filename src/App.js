import './App.css';
import React from "react";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <video id="my-video" className="video-js" controls preload="auto" poster="https://images.pexels.com/photos/5702341/pexels-photo-5702341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-setup loop>
        <source src="https://nl20.seedr.cc/ff_get/1142816681/All.the.Old.Knives.2022.1080p.AMZN.WEBRip.1400MB.DD5.1.x264-GalaxyRG.mkv?st=2bAlgF7BRoM9F0EBWbwdyA&e=1649503710" type="video/mp4" />
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

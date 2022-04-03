import './App.css';
import React from "react";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <video id="my-video" className="video-js" controls preload="auto" poster="https://images.pexels.com/photos/5702341/pexels-photo-5702341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-setup loop>
        <source src="https://imdb-video.media-imdb.com/vi1119011353/1434659607842-pgv4ql-1648573860780.mp4?Expires=1649068720&Signature=BRIheDDrFVIJ2RVmCftOaXMdwpxKB-YRHcO54ZuNckEAOzNjFMoLp6dPbAilBZmu3uH8rQa2ho3Yuv-IrPBxVOg1IpLOo1I5~SMfclHHsQ6ioovRvtB8D4-LgiEgGzrnYZrxvmZ5VVRnjPtuUn6omtdOMLeDujnm6sD7s5cnu2vMF88o2eVgz2sZa5m51FABriHLJvVEpjGdT0h2ajdYGC6FewL8HCghVdSjlAT176HYpI0eKfam86NyGWwxIeCZCtjwavpAvzBiN9E7Nq8XTa~~apw01RYd3yTqOwRPnnbh4GeLyze8oBHwCOkUvEXTRtgHk2aJJsJpcnZBFYY0Nw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" type="video/mp4" />
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

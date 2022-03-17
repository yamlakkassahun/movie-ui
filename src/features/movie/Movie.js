import React from "react";
import Video from "./Video";

const Movie = () => {
    const playerRef = React.useRef(null);

    const videoJsOptions = { // lookup the options in the docs for more options
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: 'https://api.etnet.et/movies/hedar.m3u8',
        type: 'application/x-mpegURL'
      }]
    }
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // you can handle player events here
      player.on('waiting', () => {
        console.log('player is waiting');
      });
  
      player.on('dispose', () => {
        console.log('player will dispose');
      });
    };
  
    return (
      <div className="container">
        <Video options={videoJsOptions} onReady={handlePlayerReady} style={{ margin: '0px', padding: '0px' }}/>
      </div>
    );
};

export default Movie;

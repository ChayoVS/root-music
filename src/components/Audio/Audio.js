import React from "react";
import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";
import useAudioPlayer from './useAudioPlayer';
import './styles.css';



const Audio = () =>  {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();

  return (
    <div className="player">
      <audio id="audio">
        <source src="../../../public/song.mp3" type="audio/mp3"></source>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Song songName="Caprice 24" songArtist="Nicolo Paganini" />
      <div className="controls">
        {playing ? 
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
        <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
      </div>
    </div>
  );
}

export default Audio;

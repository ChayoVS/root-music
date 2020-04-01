import React from 'react';

const Song = (props) => {
    const {songName, songArtist} = props;
    return (
        <div className="song">
            <h2 className="song_title">{songName}</h2>
             <h3 className="song_artist">{songArtist}</h3>
        </div>
    )
}

export default Song;
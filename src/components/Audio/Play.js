import React from 'react';
import { PlayCircleFilled } from '@material-ui/icons';

const Play = (props) => {
    const { handleClick } = props;

    return (
        <button className="player_button" onClick={() => handleClick()}>
            <PlayCircleFilled/>
        </button>
    );
}

export default Play;
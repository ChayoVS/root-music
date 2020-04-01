import React, { Fragment } from 'react';
import ContainerMap from '../ContainerMap/ContainerMap'
import Audio from '../Audio/Audio'


const Home = () => {
    return (
        <Fragment>
            <div className="all-container">
            <h3>Welcome!</h3>
        <div className="container-map">
        <ContainerMap/>
        </div>
        <div>
        <Audio className="audio-container"/>
        </div>
            </div>
        
        
        </Fragment>
    )
        
  
}

export default Home;
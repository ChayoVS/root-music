import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css'

mapboxgl.accessToken = 'pk.eyJ1Ijoia29uYWNoaW1uZXkiLCJhIjoiY2s4Z2R5NXB0MDBsbzNwcnlqYmRiMm52OCJ9.IxKv2JuQYrAtT6hdXZlj2g';


const ContainerMap = () => {



    const mapContainerRef= useRef(null);

    useEffect(() =>{
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style:'mapbox://styles/mapbox/streets-v11',
            center: [-100.309, 25.6714],
            zoom: 12
        });
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }), 
        );
    return () => map.remove();
}, []);

    return (
         <div className="map-container" ref={mapContainerRef}>
         </div>
    )
}

export default ContainerMap;
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia29uYWNoaW1uZXkiLCJhIjoiY2s4Z2R5NXB0MDBsbzNwcnlqYmRiMm52OCJ9.IxKv2JuQYrAtT6hdXZlj2g';

const ContainerMap = () => {

    const mapContainerRef= useRef(null);

    useEffect(() =>{
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style:'mapbox://styles/mapbox/streets-v11',
            center: [-104.9876, 39.7405],
            zoom: 12.5
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
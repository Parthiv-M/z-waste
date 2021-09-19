import React, { useEffect } from "react";
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlcHJvdG9uMjUiLCJhIjoiY2txdjAwdXFwMDlvbjJvbzZrNGJsYjBxeSJ9.cMvYXpGi2feyvpgpvaqLkg';

const MapComponent = () => {

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            var map = new mapboxgl.Map({
                container: 'map-box',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lon, lat],
                zoom: 15
            });
            // const el = document.createElement('div');
            // el.className = 'marker';
            // new mapboxgl.Marker(el)
            //     .setLngLat([lon, lat])
            //     .addTo(map);
        })
    }, [])

    return (
        <div id="map-box" className="h-100 w-100"></div>
    );
}

export default MapComponent;
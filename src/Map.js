import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const API_KEY = 'AIzaSyB_M984Gqdi9fZFoMuVDHJscPWilRotXg8';

const Map = ({ lat, lon }) => {
    const [center, setCenter] = useState({
        lat: lat,
        lng: lon,
    });

    useEffect(() => {
        setCenter({ lat, lng: lon });
    }, [lat, lon]);

    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
            >
                {/* Add markers or other components here */}
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;

import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';

import './Map.css';


export default function Map(){   
    let token = 'pk.eyJ1IjoibG9yZW56b3BhY2hpb2xpIiwiYSI6ImNsMmV2cjZjbjAwMHMzY28zenZucGpsenIifQ.82GjVOTfUBEcg3LJ42gvlw';
    let url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${token}`
    let screenW = window.innerWidth;       

    return (
        <div className='maps' >
            <MapContainer className='mapContainer' center={screenW > 900 ? ([-37.9945824, -57.5969219]):([-38.0068100, -57.5656882])}  zoom={13} zoomControl= {false}  scrollWheelZoom={true}  >
            
            <TileLayer
                className='tileLayer'
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                url={url}
            />
            <Marker position={[-37.9945824, -57.5670940]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

        </div>
        
    )
}
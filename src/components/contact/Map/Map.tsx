import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';

import './Map.css';


export default function Map(){   
           
    let url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoibG9yZW56b3BhY2hpb2xpIiwiYSI6ImNsMmV3MXQ4cDAwMDIzaXNhbG05bTVqbXEifQ.bN1ZOkFwfl2LonjJb11Xog`
            

    return (
        <div className='maps' >
            <MapContainer className='mapContainer' center={[-37.9945824, -57.5969219]}  zoom={13} zoomControl= {false}  scrollWheelZoom={true}  >
            
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
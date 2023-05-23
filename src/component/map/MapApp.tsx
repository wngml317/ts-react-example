import React, { useState } from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup, useMapEvents, LayersControl, LayerGroup, Polygon, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { LatLngExpression, icon } from "leaflet";
import { styled } from "styled-components";

const MapBlock = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
    display: flex;

    justify-content: center;
    flex-direction: column;
`

const Icon = icon ({
    iconUrl: "images/marker-icon.png"
})

const MapApp = () => {
    const center:LatLngExpression = [37.142803, 128.18161]
    const position1:LatLngExpression = [37.142703, 128.19561]
    const position2:LatLngExpression = [37.153203, 128.20661]
    const position3:LatLngExpression = [37.142803, 128.17161]
    const fillBlueOptions = { fillColor: 'blue' }
    const fillRedOptions = { fillColor: 'red', color: 'red' }
    const yellowOptions = { color: 'yellow'};
    
    const polygon:LatLngExpression[] = [
        [37.151803, 128.12531],
        [37.144803, 128.15564],
        [37.148812, 128.15861],
        [37.153203, 128.17036],
        [37.160278, 128.14858],
    ]
    const multiPolygon:LatLngExpression[][] = [
        [
            [37.101803, 128.11331],
            [37.123803, 128.11464],
            [37.130812, 128.13661],
            [37.120373, 128.14346],
        ],
        [
            [37.112803, 128.20331],
            [37.141803, 128.23331],
            [37.123803, 128.25564],
            [37.124812, 128.24561],
            [37.120373, 128.24846],
        ],
    ]
    return (
        <MapBlock>
            <MapContainer style={{position: "relative", height: "100vh"}} center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LayersControl position="topright"  >
                    <LayersControl.Overlay name="Marker with popup">
                        <Marker position={center} icon={Icon} >
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay checked name="Layer group with circles">
                        <LayerGroup>
                            <Circle center={position1} pathOptions={fillBlueOptions} radius={200} />
                            <Circle center={position2} pathOptions={fillRedOptions} radius={300}/>
                            <LayerGroup>
                                <Circle center={position3} pathOptions={{fillColor: 'green', color: 'green'}} radius={150} />
                            </LayerGroup>
                        </LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Feature group1">
                        <FeatureGroup pathOptions={{ color: 'purple' }}>
                            <Polygon positions={polygon} />
                        </FeatureGroup>
                    </LayersControl.Overlay>                    
                    <LayersControl.Overlay checked name="Feature group2">
                        <Polygon positions={multiPolygon} pathOptions={yellowOptions} />
                    </LayersControl.Overlay>
                </LayersControl>
            </MapContainer>
        </MapBlock>
    )
}

export default MapApp;
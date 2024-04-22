
import React, { useRef, useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import './map.css';

import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const center = { lng: 13.338414, lat: 45.507932 };
    const [zoom] = useState(1);

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new L.Map(mapContainer.current, {
            center: L.latLng(center.lat, center.lng),
            zoom: zoom
        });

        const SFRRIIcon = L.Icon.extend({
            options: {
                // shadowUrl: "/SFRRIMapMarker.png",
                iconSize: [36, 36],
                // shadowSize: [50, 64],
                // iconAnchor: [16, 36],
                // shadowAnchor: [4, 62],
                // popupAnchor: [-3, -76]
            }
        });

        const sfrriIcon = new SFRRIIcon({ iconUrl: "/SFRRIMapMarker.png" });

        L.marker([39.9125, -86.1365], { icon: sfrriIcon })
            .bindPopup("<a href='http://sfrbm.org/' target='_blank'><img style='width:65px;' src='static/images/societyLogos/SFRBM-logo.png' draggable='false' /></a><br />Society for<br />Redox Biology<br />and Medicine<br /><a href='http://sfrbm.org/' target='_blank'>sfrbm.org</a>")
            .addTo(map.current)

        L.marker([-8.466939, 33.574219], { icon: sfrriIcon })
            .bindPopup("<a href='http://vcilt.uom.ac.mu/sfrr/' target='_blank'><img style='width:65px;' src='static/images/societyLogos/SFRR-Africa-logo.png' draggable='false' /></a><br />Society for<br />Free Radical<br />Research Africa<br /><a href='http://vcilt.uom.ac.mu/sfrr/' target='_blank'>vcilt.uom.ac.mu/sfrr/</a>")
            .addTo(map.current)

        L.marker([35.6764, 139.65], { icon: sfrriIcon })
            .bindPopup("<a href='http://sfrrj.umin.jp/asia/' target='_blank'><img style='width:65px;' src='static/images/societyLogos/SFRR-Asia-logo.png' draggable='false' /></a><br />Society for<br />Free Radical<br />Research Asia<br /><a href='http://sfrrj.umin.jp/asia/' target='_blank'>sfrrj.umin.jp/asia</a>")
            .addTo(map.current)

        L.marker([-26.431228064506424, 134.296875], { icon: sfrriIcon })
            .bindPopup("<a href='http://www.sfrr-australasia.org/' target='_blank'><img style='width:65px;' src='static/images/societyLogos/SFRR-Australasia-logo.png' draggable='false' /></a><br />Society for<br />Free Radical<br />Research <br />Australasia<br /><a href='http://www.sfrr-australasia.org/' target='_blank'>sfrr-australasia.org</a>")
            .addTo(map.current)

        L.marker([47, 8.3], { icon: sfrriIcon })
            .bindPopup("<a href='http://sfrr-europe.org' target='_blank'><img style='width:65px;' src='static/images/societyLogos/SFRR-Europe-logo.png' draggable='false' /></a><br />Society for<br />Free Radical<br />Research Europe<br /><a href='http://sfrr-europe.org' target='_blank'>sfrr-europe.org</a>")
            .addTo(map.current)

        // Create a MapTiler Layer inside Leaflet
        const mtLayer = new MaptilerLayer({
            // Get your free API key at https://cloud.maptiler.com
            apiKey: "o6CdZHsSQ4hguSHTK1f0",
            style: "eaf6403c-e5fa-4c11-8049-575b3f03ce4c",
        }).addTo(map.current);

    }, [center.lng, center.lat, zoom]);

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    )
}

export default Map;

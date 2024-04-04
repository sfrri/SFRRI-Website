"use client";
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  /*width: '400px',
  height: '400px'*/
  width: '100%',
  height: '120%'
};

const center = {
  /*lat: -3.745,
  lng: -38.523*/
  lat: 41,
  lng: 12,
};

const options = [
    {
        minZoom: 1,
        maxZoom: 1,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        styles: [{
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'administrative',
            'elementType': 'labels',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'administrative.country',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'administrative.province',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#3d6fb4'
            }]
        }, {
            'featureType': 'landscape.natural',
            'elementType': 'labels',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'poi',
            'elementType': 'all',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'all',
            'stylers': [{
                'color': '#cccccc'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'transit',
            'elementType': 'labels.icon',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'transit.line',
            'elementType': 'geometry',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'transit.line',
            'elementType': 'labels.text',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'transit.station.airport',
            'elementType': 'geometry',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'transit.station.airport',
            'elementType': 'labels',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#ffffff'
            }]
        }, {
            'featureType': 'water',
            'elementType': 'labels',
            'stylers': [{
                'visibility': 'off'
            }]
        }]
    }
]

function GMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={1}
        onLoad={onLoad}
        onUnmount={onUnmount}
        defaultOptions={{
            styles: options
        }}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GMap)
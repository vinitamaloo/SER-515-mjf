import React from 'react';
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api';
const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 33.43087824988882,
    lng: -111.95213674482129
  }

  const locations = [
    {
      name: "Field 1",
      location: { 
        lat: 33.401103927340735,
        lng: -111.97081548583894   
      },
    },
    {
      name: "Field 2",
      location: { 
        lat: 33.46149340943859,
        lng: -111.96099915514885   
      },
    },
    {
      name: "Field 3",
      location: { 
        lat: 33.435481766546374,
        lng:-112.00982359562549    
      },
    },
    {
      name: "Field 4",
      location: { 
        lat: 33.467254881151234,
        lng:  -111.9146589607051  
      },
    },
    {
      name: "Field 5",
      location: { 
        lat: 33.427204,
        lng: -111.939887 
      },
    },
    {
      name: "Field 6",
      location: { 
        lat:33.457515456379674,
        lng: -112.0261165011812 
      },
    },
    {
      name: "Field 7",
      location: { 
        lat: 33.46961144114428,
        lng: -112.06224126400522 
      },
    },
    {
      name: "Field 8",
      location: { 
        lat: 33.413764058147514,
        lng: -111.87274967234652 
         
      },
    },
    {
      name: "Field 9",
      location: { 
        lat:  33.4364850768064,
        lng: -111.86675516441026  
      },
    },
    {
      name: "Field 10",
      location: { 
        lat: 33.44585985966238,
        lng:  -111.98421933424875  
      },
    }
    
  ];
  
  

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAiBOJI499DIHllqoV1dVz12oCTGatKEWE'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
        {locations.map(item => {
              return (
              <div>
                <Marker key={item.name} position={item.location}/>
                <OverlayView
                key={item.name}
                position={item.location}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                <div
                    style={{
                        background: `#203254`,
                        padding: `7px 12px`,
                        fontSize: '11px',
                        color: `white`,
                        borderRadius: '4px',
                    }}
                >
                {item.name}
                </div>
                </OverlayView>
              </div>
              )
            })
         }
        </GoogleMap>
     </LoadScript>
  )
}
export default MapContainer;
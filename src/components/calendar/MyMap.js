import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';



export const MyMap = (props) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyB3V2yTv11sv-RvJwjAGeu2x6LKEavAsTA"
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map coordinates={props.coordinates}/>;
}

function Map(props) {
    const options = {
        disableDefaultUI: true, // Disables the default UI elements
        zoomControl: true, // Enables the zoom control
        zoomControlOptions: {
            position: window.google.maps.ControlPosition.LEFT_CENTER, // Set the position of the zoom control
          },
        mapTypeId: 'satellite',
      };
      
    console.log(props.coordinates)
    if(typeof props.coordinates === 'undefined'){
        return(<p>bad</p>);}
    else{
    const lat = parseFloat(props.coordinates[0]);
    const lng = parseFloat(props.coordinates[1]);
    
    return (
        <GoogleMap
        zoom ={18}
        center={{lat:lat, lng:lng}}
        mapContainerClassName="map-container"
        options={options}
        >
        <Marker position={{lat:lat, lng:lng}}/>
        </GoogleMap>
    );}
 }

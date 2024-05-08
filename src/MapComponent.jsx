import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: 22.302711,
  lng: 114.177216
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCrv9jWPTVkD6NnwXINhoqBXuAPkYZPzHA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      ></GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
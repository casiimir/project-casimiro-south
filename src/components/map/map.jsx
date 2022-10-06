import styles from './index.module.scss';

import { GoogleMap } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import { useOutletContext } from "react-router-dom";


export function Map() {
  const [latitude, longitude] = useOutletContext();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCpiE2_dlGNKj2Q7IKCwXSOYCPVz2UPcfk",
  });
  const mapContainerStyle = {
    width: "100%",
    height: "60vh",
  };
  const center = {
    lat: latitude,
    lng: longitude,
  };
  const position = {
    lat: latitude,
    lng: longitude,
  };

  const renderMap = () => {
  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center}>
      <MarkerF
        key="marker_1"
        position={position}
      />
    </GoogleMap>
  );
        
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : "Loading Maps..." ;
}
  


// export function Map() {
//   const [latitude, longitude] = useOutletContext();
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyCpiE2_dlGNKj2Q7IKCwXSOYCPVz2UPcfk",
//   });
//   const mapContainerStyle = {
//     width: "100%",
//     height: "60vh",
//   };
//   const center = {
//     lat: latitude,
//     lng: longitude,
//   };
//   const position = {
//     lat: latitude,
//     lng: longitude,
//   };
//   // const onLoad = (marker) => {
//   //   console.log("marker: ", marker);
//   // };

//   // if (loadError) return "Error loading Maps";
//   // if (!isLoaded) return "Loading Maps...";

//   return (
//     {(latitude && longitude).length ? (
//       <div className={styles.Main}>
//           {/* <button onClick={() => console.log(latitude)}>Console</button> */}
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             zoom={15}
//             center={center}
//           >
//             <Marker
//               key="marker_1"
//               position={position}
//               // onLoad={onLoad}
//               // clickable={true}
//             />
//           </GoogleMap>
//         <div/> )
//       : "Loading Maps..."
//   }
    
//   );
// }

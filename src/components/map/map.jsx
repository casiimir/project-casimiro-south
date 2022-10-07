import styles from './index.module.scss';

import { GoogleMap } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import { useOutletContext } from "react-router-dom";
import { useSelector } from 'react-redux';


export function Map() {
  const { lang } = useSelector((state) => state);
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
    position.lat ? 
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center}>
      <MarkerF
        key="marker_1"
        position={position}
      />
    </GoogleMap>
     : <div>{lang.toggle ? "Non ci sono posizioni per questa attività" : "There are no positions for this activity"}</div>
  );
        
  }

  if (loadError) {
    return (
      <div>
        {lang.toggle
          ? "Ci dispiace, la mappa non può essere caricata in questo momento..."
          : "Map cannot be loaded right now, sorry..."}
      </div>
    );
  }

  return isLoaded ? renderMap() : lang.toggle ? "Caricamento Maps..." : "Loading Maps..." ;
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

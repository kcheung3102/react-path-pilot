import "../css/Leaflet.css";
import { useEffect } from "react";

function Leaflet() {
  useEffect(() => {
    const accessToken = "AAPTxy8BH1VEsoebNVZXo8HurKLkDLXrxZfJDFrWSa3fsh_dhngzjn7oRhCY6PjuC1lxVBQ5lvnrFZmfuGUQdVKq4SfEx48EqplTmU_D-NM7Y30KOjgV5MJjI9yMfP7EdXKsQTZkMmHRdqeXdxtB9o2DO6XLsjiCY7zGcrfOEtxNP9wan-XN1fPKyzBaLAy_pkN5ykxKKWuBkvtVBRo1yRuMlYnLTlt3VHgFd5MD1YACD8Q.AT1_Sd6vhrXT";
    const basemapEnum = "arcgis/navigation";

    // eslint-disable-next-line
    const map = L.map("map", { 
      minZoom: 0
    }).setView([25, -30], 2); //Latitude, longitude
    
    // eslint-disable-next-line
    L.esri.Vector.vectorBasemapLayer(basemapEnum, {
      token: accessToken
    }).addTo(map);
    return () => {
      map.remove();
    }
  });
  return (
    <>
      <div id="map"></div>
    </>
  );
}

export default Leaflet;

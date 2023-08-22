import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Map
      <h1>
        lat: {lat} lng: {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 24, lng: 40 })}>
        Set position
      </button>
    </div>
  );
}

export default Map;

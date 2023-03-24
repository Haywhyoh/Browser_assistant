import { useLocation } from "react-router-dom";
import "./utubevid.css";

export default function Watch() {
  const location = useLocation();
  const videoId = location.state.id;
  return (
    <div className="utube_play">
      <iframe
        id="player"
        type="text/html"
        width="350"
        height="200"
        src={`http://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        title={videoId}
      ></iframe>
    </div>
  );
}

import { useLocation } from "react-router-dom";

export default function Watch() {
    const location = useLocation()
    const videoId = location.state.id;
    return (
        <div>
            <iframe id="player" type="text/html" width="400" height="390"
             src={`http://www.youtube.com/embed/${videoId}`}
             frameBorder="0" title={videoId}></iframe>
        </div>
    )
}
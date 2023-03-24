import { Link } from "react-router-dom";
import "./utubevid.css";

export default function VideoBox(props) {
  const title = props.snippet.title;
  const imageUrl = props.snippet.thumbnails.default.url;
  const id = props.id.videoId;
  return (
    <div>
      <Link className="utube_video" to={"/watch"} state={{ id: id }}>
        <div>
          <img src={imageUrl} alt={title} />
        </div>
        <div className="vid_title">{title}</div>
      </Link>
    </div>
  );
}

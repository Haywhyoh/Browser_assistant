import { Link } from 'react-router-dom';

export default function VideoBox(props) {
    const title = props.snippet.title;
    const imageUrl = props.snippet.thumbnails.default.url;
    const id = props.id.videoId
    return (
        <div>
        <Link to={'/watch'} state={{id: id}}> 
            <div><img src={imageUrl} alt={title} /></div>
            <div>{ title }</div>
        </ Link>
        </div>

    )
}
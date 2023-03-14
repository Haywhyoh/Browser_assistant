import { RiDeleteBin6Line } from "react-icons/ri";
import './organizer.css'
export default function Ideabox(props) {
  const content = props['content'];
  const excerpt = content.slice(0, 80);
  return (
  <div className="idea_container">
    <h3>{props.title}</h3>
    <div className="excerpt_container">
      <p className="excerpt">{excerpt}</p>
      <RiDeleteBin6Line className="excerpt_icon"/>
    </div>
    
  </div>
  )
}
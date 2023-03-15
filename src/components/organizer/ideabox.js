import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import './organizer.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "./Ideacontext";
import EditNote from "./editNote";

export default function Ideabox(props) {
  const {ideas, setIdeas} = useContext(NotesContext);
  const content = props['content'];
  const excerpt = content.slice(0, 80);

  return (
  <div className="idea_container">
    <h3>{props.title}</h3>
    <div className="excerpt_container">
      <p className="excerpt">{excerpt}</p>
      <RiDeleteBin6Line className="excerpt_icon" id={props.id} onClick={ () => {
          const remaininIdeas = ideas.filter( (idea) => idea.id !== props.id );
          setIdeas(remaininIdeas);
          localStorage.removeItem(props.id) 
      }}/>
      <Link to='/edit' state={{id: props.id}}><RiEditBoxLine className="excerpt_icon"/></Link>
    </div>
  </div>
  )
}




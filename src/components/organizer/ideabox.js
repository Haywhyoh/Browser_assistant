import { RiDeleteBin6Line } from "react-icons/ri";
import "./organizer.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "./Ideacontext";

export default function Ideabox(props) {
  const { ideas, setIdeas } = useContext(NotesContext);
  const content = props["content"];
  const excerpt = content.slice(0, 80);

  return (
    <div className="idea_container">
      <div className="excerpt_container">
        <h3>{props.title}</h3>
        <div className="excerpt">
          <p>{excerpt}</p>
          <Link to={"/organizer"}>
            <RiDeleteBin6Line
              className="excerpt_icon"
              id={props.id}
              onClick={() => {
                const remaininIdeas = ideas.filter(
                  (idea) => idea.id !== props.id
                );
                setIdeas(remaininIdeas);
                localStorage.removeItem(props.id);
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

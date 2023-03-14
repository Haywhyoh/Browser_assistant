import Ideabox from "./ideabox";
import { Link } from "react-router-dom";
export default function Organizer() {
  const ideas = require("../data/idea_ex.json");
  return (
    <div className="idea_box_container">
      <div className="idea_box">
      {ideas.map((idea) => (
        <Ideabox 
          key= {ideas.id}
          {...idea}/>
      ))}
      </div>
      <Link to={'/add'}><button>Add New Idea</button></Link>
    </div>
  )
}
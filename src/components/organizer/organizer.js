import Ideabox from "./ideabox";
import { Link } from "react-router-dom";
import { NotesContext } from "./Ideacontext";
import { useContext } from "react";

export default function Organizer() {
  const {ideas, setIdeas} = useContext(NotesContext)
  function clearAll() {
    localStorage.clear();
    setIdeas([])
  }

  return (
    <div className="idea_box_container">
      <NotesContext.Provider value={{ideas, setIdeas}}> 
      <div className="idea_box">
      {ideas.map((idea) => (
        <Ideabox 
          key= {idea.id}
          {...idea}/>
      ))}
      </div>
      </NotesContext.Provider>
      <Link to={'/add'}><button>Add New Idea</button></Link>
      <button onClick={clearAll}>Clear All</button>
    </div>
  )
}




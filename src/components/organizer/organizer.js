import Ideabox from './ideabox';
import { Link } from 'react-router-dom';
import { NotesContext } from './Ideacontext';
import { useContext } from 'react';
import './organizer.css';

export default function Organizer () {
  const { ideas, setIdeas } = useContext(NotesContext);
  function clearAll () {
    localStorage.clear();
    setIdeas([]);
  }

  return (
    <div className='idea_box_container'>
      <NotesContext.Provider value={{ ideas, setIdeas }}>
        <div className='idea_box'>
          {ideas.map((idea) => (
            <Ideabox key={idea.id} {...idea} />
          ))}
        </div>
      </NotesContext.Provider>
      <h2>Save your Note</h2>
      <div className='idea_box_container_button'>
        <Link to="/add">
          <button>New Note</button>
        </Link>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}

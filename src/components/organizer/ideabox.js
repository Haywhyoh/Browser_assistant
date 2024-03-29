import { RiDeleteBin6Line, RiEditBoxLine } from 'react-icons/ri';
import { BsChevronExpand } from 'react-icons/bs';
import './organizer.css';

import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { NotesContext } from './Ideacontext';
import EditNote from './editNote';

export default function Ideabox (props) {
  const { ideas, setIdeas } = useContext(NotesContext);
  const content = props.content;
  const tiny = content.slice(0, 80);
  const [excerpt, setExcerpt] = useState(tiny);

  const [show, setShow] = useState(false);
  return (

    <div className='idea_container'>
      <div className='excerpt_container'>
        <h3>{props.title}</h3>
        <div className='excerpt'>
          <p>{excerpt}</p>
          <Link to="/organizer">
            <BsChevronExpand
className='excerpt_icon'
              onClick={() => {
                setShow(!show);
                show ? setExcerpt(content) : setExcerpt(tiny);
              }}
            />
            <RiDeleteBin6Line
              className='excerpt_icon'
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
          <Link to='/edit' state={{ id: props.id }}><RiEditBoxLine className='excerpt_icon' /></Link>
        </div>
      </div>

    </div>
  );
}

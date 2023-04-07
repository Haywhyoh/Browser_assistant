import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './popup.css';
import { HiHome } from 'react-icons/hi';
import { BiNotepad } from 'react-icons/bi';
import { FaGamepad, FaYoutube } from 'react-icons/fa';
import { RiScreenshot2Fill } from 'react-icons/ri';
import { BsFillChatSquareTextFill } from 'react-icons/bs';
import { MdSummarize } from 'react-icons/md';

export default function Popup () {
  return (
    <div className='popup'>
      <div>
        <h2>Browser Assistant</h2>
        <p>Surf smarter, not harder.</p>
      </div>

      <div className='popup_items'>
        <CustomLink to='/' className='tooltip'>
          <HiHome />
          <span className='tooltiptext'>Home</span>
        </CustomLink>
        <CustomLink to='/organizer' className='tooltip'>
          <BiNotepad />
          <span className='tooltiptext'>NotePad</span>
        </CustomLink>
        <CustomLink to='/summarise' className='tooltip'>
          <MdSummarize />
          <span className='tooltiptext'>Summarise</span>
        </CustomLink>
        <CustomLink to='/askchatgpt' className='tooltip'>
          <BsFillChatSquareTextFill />
          <span className='tooltiptext'>AskChatgpt</span>
        </CustomLink>
        <CustomLink to='/utubevid' className='tooltip'>
          <FaYoutube />
          <span className='tooltiptext'>UtubeVid</span>
        </CustomLink>
        <CustomLink to='/screenshot' className='tooltip'>
          <RiScreenshot2Fill />
          <span className='tooltiptext'>Screenshot</span>
        </CustomLink>
        <CustomLink to='/games' className='tooltip'>
          <span className='tooltiptext'>Games</span>
          <FaGamepad />
        </CustomLink>
      </div>
    </div>
  );
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

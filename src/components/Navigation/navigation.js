import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <div>
      <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/organizer'>Organizer</CustomLink>
        <CustomLink to='/summarise'>Summarise</CustomLink>
        <CustomLink to='/askchatgpt'>AskChatgpt</CustomLink>
        <CustomLink to='/utubevid'>UtubeVid</CustomLink>
        <CustomLink to='/screenshot'>Screenshot</CustomLink>
        <CustomLink to='/games'>Games</CustomLink>

      </div>
    </div>
  )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className= {isActive ? "active" : ""} >
      <Link to={to} {...props} >{children}</Link>
    </li>
    
  );
}
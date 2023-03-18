import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./popup.css";

export default function Popup() {
  return (
    <div className="popup">
      <div>
        <h2>Browser Assistant</h2>
        <p>Surf smarter, not harder.</p>
      </div>

      <div className="popup_items">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/organizer">Organizer</CustomLink>
        <CustomLink to="/summarise">Summarise</CustomLink>
        <CustomLink to="/askchatgpt">AskChatgpt</CustomLink>
        <CustomLink to="/utubevid">UtubeVid</CustomLink>
        <CustomLink to="/screenshot">Screenshot</CustomLink>
        <CustomLink to="/games">Games</CustomLink>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div></div>
      <ul>
        <li><Link className="headerButton" to={'/'}>Home</Link></li>
        <li><Link className="headerButton" to={'/about'}>About</Link></li>
        <li><Link className="headerButton" to={'/work'}>Work</Link></li>
        <li><Link className="headerButton" to={'/contact'}>Contact me!</Link></li>
      </ul>
    </header>
  );
}

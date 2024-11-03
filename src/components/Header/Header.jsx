import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span>headers link</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact</Link>
        <a href="/error">Error</a>
      </nav>
    </div>
  );
};

export default Header;

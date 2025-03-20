import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 flex justify-center space-x-6 text-white">
    <Link to="/">Top Users</Link>
    <Link to="/trending">Trending Posts</Link>
    <Link to="/feed">Feed</Link>
  </nav>
);

export default Navbar;

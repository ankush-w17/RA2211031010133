import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Top Users', path: '/' },
    { name: 'Trending Posts', path: '/trending' },
    { name: 'Feed', path: '/feed' },
  ];

  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 border-white'
                  : 'text-blue-200 hover:text-white'
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

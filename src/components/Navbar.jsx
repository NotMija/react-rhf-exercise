import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/posts">Listado de Posts</Link></li>
        <li><Link to="/create-post">Crear Post</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

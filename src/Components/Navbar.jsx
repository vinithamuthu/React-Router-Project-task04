import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
      <Link to='/'>ALL</Link>
      <Link to='/fullStackDeveloper'>FULL STACK DEVELOPMENT</Link>
      <Link to='/dataScience'>DATA SCIENCEL</Link>
      <Link to='/cyberSecurity'>CYBER SECURITY</Link>
      <Link to='/career'>CAREER</Link>
      </nav>
    </div>
  );
};

export default Navbar;
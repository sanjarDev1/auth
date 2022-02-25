import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/teacher'>Teacher</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

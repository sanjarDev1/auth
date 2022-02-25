import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { data } from '../utils/navbar';
import Login from '../pages/LogIn';
import AuthContext from '../context/AuthContext';

const Root = () => {
  const { authed } = useContext(AuthContext);
  console.log(authed);
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(
          ({ pathname, id, Component }) =>
            pathname !== '/login' && (
              <Route
                path={pathname}
                key={id}
                element={!authed ? <Navigate to={'/login'} /> : <Component />}
              />
            )
        )}
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default Root;

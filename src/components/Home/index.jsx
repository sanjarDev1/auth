import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { Navigate, Route } from 'react-router-dom';
const Home = () => {
  const { idUser, authed } = useContext(AuthContext);
  useEffect(() => {
    axios({
      url: 'https://aravagent.herokuapp.com/v1/admin',
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      params: {
        id: idUser,
      },
    })
      .then((res) => console.log(res))
      .catch(() => <Route element={<Navigate to='/login' />} />);
  }, []);
  console.log(idUser);
  return <div>Homeed</div>;
};

export default Home;

import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(false);
  const [token, setToken] = useState('');
  const [idUser, setIdUser] = useState('');
  const navigate = useNavigate()
  let loginUser = (phone_number, password) => {
    if (phone_number && password)
      axios
        .post('https://aravagent.herokuapp.com/v1/admin/login', {
          phone_number,
          password,
        })
        .then((res) => {
          setAuthed(res?.data?.success);
          localStorage.setItem('token', res?.data?.data?.token);
          setIdUser(res?.data?.data?.admin?._id);
          navigate('/')
        });
  };
  const contextData = {
    loginUser,
    authed,
    idUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { Wrapper, Form, Input,Btn } from './style';

const LogIn = () => {
  const { loginUser } = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  return (
      <Wrapper>
          <Form>

      <Input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        name='phone_number'
        />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name='password'
        />
        <Btn onClick={() => loginUser(phoneNumber, password)}>Submit</Btn>
        </Form>
        </Wrapper>
  );
};

export default LogIn;

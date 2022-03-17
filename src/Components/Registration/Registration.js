import React from 'react';

import SignUp from './SignUp';
import Login from './Login';
import Status from '../User/Status';
import { Account } from '../User/Account';

const Registration = () => {
  return (
    <Account>
        <Status />
        <SignUp />
        <Login />
    </Account>
  )
}

export default Registration;
import { useState } from 'react';
import UserPool from '../User/UserPool';

import Button from '@mui/material/Button';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
  <form onSubmit={onSubmit}>
    <div>SIGN UP</div>
    <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <input 
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <Button type="submit">Submit</Button>
  </form>
  )
};

export default SignUp;

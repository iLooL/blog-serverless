// import React, { createContext} from 'react';

// const Account = (Username, Password) => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const onSubmit = (e) => {
//       e.preventDefault();
//       const user = new CognitoUser({
//           Username: email,
//           Pool: UserPool
//       });
  
//       const authDetails = new AuthenticationDetails({
//           Username: email,
//           Password: password
//       });
  
//       user.authenticateUser(authDetails, {
//           onSuccess: data => {
//               console.log('onSuccess: ', data);
//           },
  
//           onFailure: err => {
//               console.error('onFailure: ', err);
//           },
  
//           newPasswordRequired: data => {
//               console.log('newPasswordRequired: ', data);
//           }
//       });

//     const AccountContext = createContext();
//     }

//     return (
//     <AccountContext.Provider>

//     </AccountContext.Provider>
//     );
// }

// export default Account;
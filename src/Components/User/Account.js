import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import Pool from './UserPool';

const AccountContext = createContext();

const Account = (props) => {

    const navigate = useNavigate();
    const getSession = async() => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                });
            } else {
                reject();
            }
        });
    };

    const authenticate = async(Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({ Username, Password });
            user.authenticateUser(authDetails, {
                onSuccess: data => {
                    console.log('onSuccess: ', data);
                    sessionStorage.setItem('email', Username);
                    resolve(data);
                    navigate('/');
                },
        
                onFailure: err => {
                    console.error('onFailure: ', err);
                    reject(err);
                },
        
                newPasswordRequired: data => {
                    console.log('newPasswordRequired: ', data);
                    resolve(data);
                }
            });
        });
    };

    const logout = () => {
        const user = Pool.getCurrentUser();
        console.log(user);
        if (user) {
            user.signOut();
            sessionStorage.clear();
            navigate('/login');
        }
    };
    
    return (
        <AccountContext.Provider value={{ authenticate, getSession, logout }}>
            {props.children}
        </AccountContext.Provider>
    )
}

export { Account, AccountContext };

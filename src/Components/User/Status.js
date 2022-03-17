import React, { useState, useEffect, useContext } from 'react';
import { AccountContext } from './Account';
import Button from '@mui/material/Button';

const Status = () => {
    const [status, setStatus] = useState(false);
    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then((session) => {
                console.log("Session: ", session);
                setStatus(true);
            });
    }, []);
    return (
        <div>{ status ? <Button onClick={logout}>Logout</Button> : "Please Login"}</div>
    )
};

export default Status;
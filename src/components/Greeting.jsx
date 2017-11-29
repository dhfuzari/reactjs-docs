import React, { Component } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting name="Daniel H. Fuzari" />
    } else {
        return <GuestGreeting />
    }
}

export default Greeting;


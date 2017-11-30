import React, { Component } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;    
    return isLoggedIn ? <UserGreeting name="Daniel H. Fuzari" /> : <GuestGreeting />        
}

export default Greeting;


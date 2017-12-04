import React, {Component} from 'react';

function ListItem(props) {    
    return (
        <li>-> {props.value}</li>
    );
}

function NumbersList(pros) {
    const numbers = [2, 6, 67, 5, 103];

    const listOfNumbers = numbers.map((item, index, arr) => {
        return <ListItem key={index.toString()} value={item * item} />;
    })
    return <ul>{listOfNumbers}</ul>;
}

export default NumbersList;
import React, {Component} from 'react';

function NumbersList(pros) {
    const numbers = [2, 6, 67, 5, 103];

    const listOfNumbers = numbers.map((item, index, arr) => {
        return <li>{item * item}</li>;
    })
    return <ul>{listOfNumbers}</ul>;
}

export default NumbersList;
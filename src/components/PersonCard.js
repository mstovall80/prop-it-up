import React, { Component } from 'react';
    
    const PersonCard = props => {
        return (
            <div>
                <h1> { props.firstName } {props.lastName }  </h1>
                <p>age: {props.age} </p>
                <p>hair color: {props.hairColor}</p>
            </div>
    
        );
    }

    
export default PersonCard;

                

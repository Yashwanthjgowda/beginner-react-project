import React, { Component } from 'react';
import UserCard from './UserCard';

export default class Users extends Component {
   
    render() {
        return (
            <div>
                {
                    this.props.users.map((item, index)=>{
                        return(<UserCard key={index} {...item}/>) 
                    })
                }
            </div>
        );
    }
}



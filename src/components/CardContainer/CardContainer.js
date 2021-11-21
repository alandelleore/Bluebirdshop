import React, { useEffect, useState } from "react";
import CardUser from "../CardUser/CardUser";
import './CardContainer.css';

const CardContainer = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.github.com/users')   
            .then((response) => response.json())
            .then((json) => setUsers(json));
        }, 2000);
    }, []);
    
    return (
        <div className='CardContainer'>
                {users.map((user) => {
                    return <CardUser data={user} key={user.id}/>
                })}
        </div>
    );
};

export default CardContainer;

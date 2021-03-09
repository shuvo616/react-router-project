import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    let { userId } = useParams();
    const [user, setUser] = useState({});
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, []);
    return (
        <div>
            <p>This is User Detail: {userId}</p>
            <h3>Name: {user.name}</h3>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default UserDetail;
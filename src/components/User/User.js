import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./User.css";

const User = (props) => {
const {name,email,id} = props.user;
const history = useHistory();
const handelClick = (userId) => {
    const url = `/user/${userId}`;
    history.push(url);
}
    return (
        <div className="user-style">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>Show Detail {id}</Link>
            <button onClick={()=> handelClick(id)}> Click Me </button>
        </div>
    );
};

export default User;
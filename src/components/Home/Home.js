import { useEffect, useState } from 'react';
import User from '../User/User';


const Home = () => {
    const  [users,setUsers]= useState([]);
    useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users`;
      fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
  
    }, [])

    return (
        <div>
            <h1>Basic React Router Project</h1>
            <h3>Users length: {users.length}</h3>
            {
                users.map(user => <User user = {user}></User>)
            }
        </div>
    );
};

export default Home;
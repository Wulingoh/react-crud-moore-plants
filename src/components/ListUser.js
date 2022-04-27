import axios from "axios"
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ListUser() {
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get(`http://localhost:8888/api/users`).then(function(response) {
          console.log(response.data);
          setUsers(response.data);  
        });
    }
    const deleteUser = (userId) => {
        axios.delete(`http://localhost:8888/api/users/${userId}/delete`).then(function(response) {
            console.log(response.data);
            getUsers();
        })
    }

    return (
        <div>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((user, key) => 
                        <tr key={key}>
                            <td>{user.user_id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                            <Link to={`/admin/users/${user.user_id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                            <button onClick={() =>deleteUser(user.user_id)}>Delete</button>
                            </td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>

    );
}
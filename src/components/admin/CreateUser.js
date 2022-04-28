import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_HOST } from "../../config";
import { TextField } from "@mui/material";

export default function ListUser() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}));
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        axios.post(`${API_HOST}api/users`, inputs)
        .then(function(response) {
         console.log(response.data);
         navigate("/admin/users");
        })
        .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log("server responded");
            } else if (error.request) {
              console.log("network error");
            } else {
              console.log(error);
            }
          });
    }

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit} >
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <TextField id="outlined-basic" name="name" label="Outlined" variant="outlined" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Role: </label>
                            </th>
                            <td>
                                <input type="text" name="role" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        
    );
}
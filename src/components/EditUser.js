import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    axios.get(`http://localhost:8888/api/user/${userId}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http:localhost:3000/api/user/${userId}/edit`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };
  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                  <input value={inputs.name} type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email: </label>
              </th>
              <td>
                  <input value={inputs.email} type="text" name="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Role: </label>
              </th>
              <td>
                  <input value={inputs.role} type="text" name="role" onChange={handleChange} />
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

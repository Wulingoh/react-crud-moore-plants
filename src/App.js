import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import ListUser from "./components/ListUser";

function App() {
  return (
    <div className="App">
      <h5>Moore Plants Admin Users Index</h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/admin/users">List Users</Link>
            </li>
            <li>
              <Link to="/admin/users/create">Create Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/admin/users" element={<ListUser />} />
          <Route path="/admin/users/create" element={<CreateUser />} />
          <Route path="/admin/users/:userId/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

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
              <Link to="admin/">List Users</Link>
            </li>
            <li>
              <Link to="admin/user/create">Create Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="admin/user/create" element={<CreateUser />} />
          <Route path="admin/user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

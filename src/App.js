import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin/Admin"

function App() {
  return (
    <div className="App">
      <h5>Moore Plants Admin Users Index</h5>
      <BrowserRouter>
        <Routes>
          <Route path="/admin*" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

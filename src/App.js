import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin*" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

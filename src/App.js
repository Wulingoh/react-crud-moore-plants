import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import "./App.css";
import Shop from "./components/Shop";
import Admin from "./components/Admin";
import "@fontsource/oxygen/300.css";
import "@fontsource/oxygen/400.css";
import "@fontsource/oxygen/700.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/*" element={<Shop />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

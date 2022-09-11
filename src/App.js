import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

import AuthContext from "./pages/context/AuthContext";

function App() {

  const { name } = useContext(AuthContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={name ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

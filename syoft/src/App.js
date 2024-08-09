import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import Login from "./components/Login";

import Registration from "./components/Registration";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>          
         <Route path="/" element={<Home/>} ></Route>           
         <Route path="/login" element={<Login/>} ></Route>
         <Route path="/register" element={<Registration/>} ></Route>
         <Route path="/dashboard" element={<Dashboard/>} ></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

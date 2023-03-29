import './App.css';
import {BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom";

import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Home from './pages/Home/Home.js';
import Stamp from './pages/Stamp/Stamp.js';
import Coupon from './pages/Coupon/Coupon.js';
import Validate from './pages/CodeValidate/validate.js';
import AdminLanding from './pages/Admin/Landing/AdminLanding';
import AdminLogin from './pages/Admin/Login/AdminLogin';

function App() {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/home/scan" element={<Home/>} />
        <Route path="/home" element={<Stamp/>} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
        <Route path="/home/stamp" element={<Stamp/>} />
        <Route path="/home/coupon" element={<Coupon/>} />
        <Route path="/home/coupon/validate" element={<Validate/>} />
        <Route path="/admin" element={<AdminLanding/>} />
        <Route path="/admin/login" element={<AdminLogin/>} />
      </Routes>
    </Router>
  );
}

export default App;

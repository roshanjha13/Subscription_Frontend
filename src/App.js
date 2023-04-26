import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassWord from './components/Auth/ResetPassWord';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payment/Subscribe';
import Notfound from './components/Payment/NotFound';
import PaymentFail from './components/Payment/PaymentFail';
import PaymentSuccess from './components/Payment/PaymentSuccess';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassWord />} />

        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

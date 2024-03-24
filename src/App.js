
import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './pages/signup.jsx';
import 'remixicon/fonts/remixicon.css';
import './components/car-list.css';


import Signup from './pages/signup.jsx';
import Login from './pages/login.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Home from './pages/home.jsx';
import Vehicles from './pages/vehicles.jsx';
import Reviews from './pages/review.jsx';
import Reservation from './pages/reservation.jsx';
// import Movie from './pages/Movie.js';
// import Movies from './pages/Movies.js';
// import Profile from './pages/Profile.js';
// import SeatBook from './pages/SeatBook.js';
// import Success from './pages/Success.js';
// import Book from "./pages/Book.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reservation" element={<Reservation />} />
          {/* <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="../" />} /> */}
          {/* <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to="../" />} /> */}
          
          {/* <Route path="/movie" element={isLoggedIn ? <Movie /> : <Navigate to="/login" />} /> */}
          {/* <Route path="/movies" element={<Movies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/seatbook" element={<Movies />} />
          <Route path="/success" element={<Success />} /> */}
          {/* <Route path="/logout" element={<Logout />} /> */}

          {/* <Route path="/movie/:movieId" element={<Movie />} /> */}
          {/* <Route path="/seatbook/:movieId/:time/:date" element={<SeatBook />} /> */}
          {/* <Route path="/book/:movieId/:time/:date/:adultTicket/:childrenTicket/:selectedSeats" element={<Book />} /> */}
          {/* <Route path="/success/:movieId/:time/:date/:adultTicket/:childrenTicket/:selectedSeats" element={<Success />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

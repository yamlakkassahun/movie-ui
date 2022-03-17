import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './features/shared/Navbar';
import Footer from './features/shared/Footer';
import Home from './features/home/Home';
import Movie from './features/movie/Movie';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/movie" element={<Movie />} />
        </Routes>
      </main>
    </div>
    <Footer />
  </Router>
  );
}

export default App;

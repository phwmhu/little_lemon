import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename="/little_lemon">
      <>
        <Navbar />
        <Routing />
        <Footer />
      </>
    </Router>
  );
}

export default App;

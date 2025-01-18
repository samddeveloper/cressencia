import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookingPage from "./components/BookingPage";
import Terms from "./pages/Terms"; // Importera Terms-komponenten

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om" element={<About />} />
          <Route path="/tjanster" element={<Services />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/boka" element={<BookingPage />} />
          <Route path="/villkor" element={<Terms />} /> {/* Ny route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

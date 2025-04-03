import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">My Portfolio</h1>
    <div>
      <Link className="mx-2" to="/">Home</Link>
      <Link className="mx-2" to="/about">About</Link>
      <Link className="mx-2" to="/services">Services</Link>
      <Link className="mx-2" to="/portfolio">Portfolio</Link>
      <Link className="mx-2" to="/contact">Contact</Link>
    </div>
  </nav>
);

const Home = () => <section className="p-6 text-center text-xl">Welcome to my Portfolio!</section>;
const About = () => <section className="p-6 text-center text-xl">About Me</section>;
const Services = () => <section className="p-6 text-center text-xl">Services I Offer</section>;
const Portfolio = () => <section className="p-6 text-center text-xl">My Work</section>;
const Contact = () => <section className="p-6 text-center text-xl">Contact Me</section>;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

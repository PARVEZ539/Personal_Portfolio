import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import ContactDetail from "./pages/ContactDetail";
import AboutDetail from "./pages/AboutDetail";
import ServicesDetail from "./pages/ServicesDetail";

function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <div
        id="header"
        className="min-h-screen bg-[url('/header-bg.jpg')] bg-cover"
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactDetail />} />
        <Route path="/about" element={<AboutDetail />} />
        <Route path="/services" element={<ServicesDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

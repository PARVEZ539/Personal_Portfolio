import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Contact1 from "./Contact1";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const navLinks = [
    { label: "Home", to: "/", anchor: "#header" },
    { label: "About", to: "/", anchor: "#about" },
    { label: "Services", to: "/", anchor: "#services" },
    { label: "Portfolio", to: "/", anchor: "#portfolio" },
    { label: "Contact", to: "/contact", anchor: null },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10" />
      </Link>

      <Contact1 />
      {/* Desktop */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) =>
          link.anchor && onHome ? (
            // Scroll link — only works when already on home
            <li
              key={link.label}
              id={link.anchor}
              className="text-white hover:text-orange-400 transition-colors"
            >
              {link.label}
            </li>
          ) : (
            // Route link
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-white hover:text-orange-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(true)}
      >
        <i className="fa-solid fa-bars" />
      </button>

      {/* Side drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-52 bg-gray-800 z-50 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={() => setOpen(false)}
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <ul className="flex flex-col gap-6 pt-16 pl-8">
          {navLinks.map((link) =>
            link.anchor && onHome ? (
              <li
                key={link.label}
                id={link.anchor?.substring(1)}
                onClick={() => setOpen(false)}
                className="text-gray-200 hover:text-orange-400"
              >
                {link.label}
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 hover:text-orange-400"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

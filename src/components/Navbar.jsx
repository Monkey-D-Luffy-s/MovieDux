// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavbarSimple = ({ setIsOpen, isOpen }) => {
  return (
    <nav className="bg-inherit p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-semibold outline-none">
          MovieDux
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <div
          className={`w-full md:flex md:items-center md:w-auto 
                    md:space-x-4 absolute md:relative top-16 left-0 md:top-0 
                    md:left-0 p-4 md:p-0 bg-gray-800 md:bg-transparent 
                    transition-all duration-500 ease-in-out transform ${
                      isOpen ? "translate-x-0 mb-10" : "hidden translate-x-full"
                    } md:translate-x-0`}
        >
          <Link
            to="/"
            className="block py-2 px-4 text-white hover:text-gray-200
                                   md:inline-block hover:bg-zinc-700"
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="block py-2 px-4 text-white hover:text-gray-200
                                   md:inline-block hover:bg-zinc-700"
          >
            Movies
          </Link>
          <Link
            to="/employees"
            className="block py-2 px-4 text-white hover:text-gray-200 
                                   md:inline-block hover:bg-zinc-700"
          >
            Employees
          </Link>
          <Link
            to="/edata"
            className="block py-2 px-4 text-white hover:text-gray-200 
                                   md:inline-block hover:bg-zinc-700"
          >
            EData
          </Link>
        </div>
      </div>
    </nav>
  );
};

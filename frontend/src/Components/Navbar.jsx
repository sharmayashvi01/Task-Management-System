import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const Navbar = () => {
  return (
    <div>
      <Toaster />
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand yellowtail-regular">Task Management System</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success mx-1"
                  aria-current="page"
                  to="/"
                >
                  All Task
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-outline-danger mx-1"
                  aria-current="page"
                  to="/add"
                >
                  Add Task
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

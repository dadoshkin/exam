import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/shopping-cart.png";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">Navbar</a>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-primary position-relative mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

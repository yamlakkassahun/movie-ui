import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img
            className="img-fluid"
            src="/assets/logo.3113682a.png"
            alt="etnet"
            style={{
              height: "100px",
              marginTop: "-25px",
              marginBottom: "-25px",
            }}
          />
        </Link>
        <button
          className="navbar-toggler bg-dark "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: "white" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="collapsibleNavId">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to={"/home"}
              >
                Home <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to={"/movie"}
              >
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to={"/counter"}
              >
                Tv Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to={"/counter"}
              >
                Genres
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to={"/counter"}
              >
                Account
              </Link>
            </li>
          </ul>
          <form className="d-flex" style={{ marginLeft: "auto" }}>
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 d-none"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to={"/counter"}
              >
                  Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
const options = {
  items: 3,
  lazyLoad: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    720: {
      items: 1,
      nav: false,
    },
    1020: {
      items: 1,
      nav: false,
    },
  },
};
const Home = () => {
  return (
    <div className="container-fluid ">
      <OwlCarousel className="owl-theme" {...options} loop autoplay>
        <div className="item img-fluid " >
          <div className="container-fluid ">
            <img
              className="banner grad1"
              src="https://i.pinimg.com/originals/2d/9e/b2/2d9eb29bd92687ae277d51a8f568f551.jpg"
              alt=""
              style={{ objectFit: "cover", opacity: "0.8" }}
            />
            <div className="centered  w-50">
              <h1 style={{ textShadow: "5px 5px 6px black" }}>Endazh Endaza</h1>
              <div className="d-flex">
                <Link
                  to={"/movie"}
                  className="btn "
                  style={{
                    width: "100px",
                    backgroundColor: "#E10814",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  play
                </Link>
                <button
                  className="btn "
                  style={{
                    width: "100px",
                    backgroundColor: "#E10814",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  wachelist
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="item img-fluid " >
          <div className="container-fluid ">
            <img
              className="img-fluid"
              src="https://i.pinimg.com/originals/ba/92/9a/ba929a8ee7cc5a4ea547a9738e194669.jpg"
              alt=""
              style={{ objectFit: "cover", opacity: "0.8" }}
            />
            <div className="centered  w-50">
              <h1 style={{ textShadow: "5px 5px 6px black" }}>Endazh Endaza</h1>
              <div className="d-flex">
                <Link
                  to={"/movie"}
                  className="btn "
                  style={{
                    width: "100px",
                    backgroundColor: "#E10814",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  play
                </Link>
                <button
                  className="btn "
                  style={{
                    width: "100px",
                    backgroundColor: "#E10814",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  wachelist
                </button>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      <hr />
      <div className="container-fluid">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <h4 style={{ marginRight: '20px', color: 'white'}}>Recommended</h4>
          </li>
          <li class="nav-item ">
            <a class="nav-link active" data-bs-toggle="tab" href="#menu1">
              Movies
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu2">
              TVShows
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane container-fluid fade" id="menu1">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6 mt-3 mb-3">
                <img
                  className="img-fluid"
                  src="https://i.pinimg.com/564x/7d/5f/b8/7d5fb85369e7abe164db192e3581c3a4.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6 mt-3 mb-3">
                <img
                  className="img-fluid"
                  src="https://i.pinimg.com/564x/ac/ae/38/acae38e6960b7d743d7817204f7d800f.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6 mt-3 mb-3">
                <img
                  className="img-fluid"
                  src="https://i.pinimg.com/564x/9b/98/23/9b9823d684e3365967cfc0c86a405eed.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6 mt-3 mb-3">
                <img
                  className="img-fluid"
                  src="https://i.pinimg.com/564x/9b/79/2c/9b792cfaa8624c09c08115cae2d80f22.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6 mt-3 mb-3">
                <img
                  className="img-fluid"
                  src="https://i.pinimg.com/564x/48/e4/35/48e43506346263e3ade4ca689c1b24ef.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6 mt-3 mb-3">
                <img
                  className="img-fluid"
                  src="https://i.pinimg.com/564x/69/c4/14/69c414137ee331e3ba3fec28b4f14d26.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="tab-pane container fade" id="menu2">
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

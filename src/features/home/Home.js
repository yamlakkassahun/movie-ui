import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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
    <div className="container-fluid mb-5">
      <OwlCarousel className="owl-theme"{...options} loop  autoplay >
        <div className="item">
        </div>
        <div className="item">
         <img src="https://www.whoa.in/20150417-Whoa/London-Has-Fallen-Hollywood-Upcoming-Movies-HD-Poster.jpg" alt=""/>
        </div>
        <div className="item">
         <img src="https://c4.wallpaperflare.com/wallpaper/353/918/371/thor-movies-poster-movie-poster-wallpaper-preview.jpg" alt=""/>
        </div>
        <div className="item">
         <img src="https://c4.wallpaperflare.com/wallpaper/353/918/371/thor-movies-poster-movie-poster-wallpaper-preview.jpg" alt=""/>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        
      </OwlCarousel>
    </div>
  );
};

export default Home;
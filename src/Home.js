import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB.CB428684220_.jpg"
          alt=""
        /> */}
        {/* <img
          className="home_image"
          src="https://i.teknolojioku.com/2/1280/720/storage/files/images/2022/07/11/asdasd-kxgo-cover-hOAo_cover.png"
          alt=""
        /> */}
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123321341"
            title="The lean startup: How Constant Innovation Creates Radically Successful Buisnesses Paper Back "
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood kMIx STand MIxer for Baking ,Styling Kitchen Mixer with K-beater Dough Hook ANd Whisk ,5 Liter Glass Bowl "
            price={239.0}
            image="https://m.media-amazon.com/images/I/71xZ6NsKDjL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 256GB Storage, 200MP Camera, "
            price={1199.9}
            image="https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="4654564213"
            title=" Echo Dot (5th Gen, 2022 release) with clock | Smart speaker with clock and Alexa | Cloud Blue"
            price={199.9}
            image="https://m.media-amazon.com/images/I/71jThE945YL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display, 256GB, Wi-Fi 6, 12MP"
            price={597}
            image="https://m.media-amazon.com/images/I/71TUZPsvieL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332 "
            title="HP Newest Flagship 15.6 HD Pavilion Laptop for Business and Student, Intel Pentium Quad-Core Processor, 16GB"
            price={469}
            image="https://m.media-amazon.com/images/I/61qw1PevupL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

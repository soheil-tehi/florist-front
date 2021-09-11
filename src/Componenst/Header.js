import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/*       
      <header id="header" className="fixed-top header-transparent">
        <div className="container d-flex align-items-center">
          {/* <div className="logo mr-auto"> */}
      {/* <h1 className="text-light"> */}
      {/* <a href="index.html">
               
              </a> */}
      {/* </h1> */}

      {/* <a href="index.html">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </a> */}
      {/* </div> */}

      {/* <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li>
                <Link to="/contact">تماس با ما</Link>
              </li>
              <li>
                <Link to="/about">درباره ما</Link>
              </li>
              <li>
                <Link to="/products">محصولات</Link>
              </li>
              <li>
                <Link to="/">خانه</Link>
              </li>
            </ul>
          </nav> */}
      {/* </div>
      </header> */}

      <section id="hero">
        <div
          className="hero-container"
          data-aos="fade-up"
          style={{ color: "rgb(139 145 176)" }}
        >
          <h1>خوش آمدید به گلستان</h1>
          <h2>بزرگترین مجموعه فروش آنلاین گل و گیاه و ملزومات مربوط به آنها</h2>
          {/* <a href="#about" className="btn-get-started scrollto">
            <i className="bx bx-chevrons-down"></i>
          </a> */}
        </div>
      </section>
    </div>
  );
};

export default Header;

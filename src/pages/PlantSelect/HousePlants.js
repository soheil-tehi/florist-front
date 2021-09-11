import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HousePlants = () => {
  const [palnts, setPlants] = useState([{}]);

  let HouseClass = [];

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/florist/get`;
    axios
      .get(url)
      .then((plant) => setPlants(plant.data))
      .catch((err) => console.log(err));
  }, []);

  HouseClass = palnts.filter((plant) => plant.class == "house");

  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <h2>گیاه آپارتمانی</h2>
            <p style={{ textAlign: "end" }}>
              هنگام خرید گیاه آپارتمانی جدید، آن را به چشم یک موجود زنده نگاه
              کنید. شرایط خانه‌تان را برای ورود انواع گیاه گلدانی جدید آماده
              کنید. جای مناسب به او اختصاص دهید. سپس از گلخانه فروشگاه اینترنتی
              گل و گیاه گلستان او را به خانه خود دعوت کنید. گلستان با راه‌اندازی
              لاین فروش گل و گیاه اینترنتی این موقعیت را برای شما فراهم کرده و
              شما می‌توانید بدون نیاز به رفتن به بازار گل و گیاه، با خرید آنلاین
              گیاه آن‌ها را در محل خود تحویل بگیرید.
            </p>
          </div>

          {/* <div className="row" data-aos="fade-in">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    همه
                  </li>
                  <li data-filter=".filter-app">آپارتمانی</li>
                  <li data-filter=".filter-card">کاکتوس</li>
                  <li data-filter=".filter-web">ساکولنت</li>
                </ul>
              </div>
            </div> */}

          <div className="row portfolio-container" data-aos="fade-up">
            {HouseClass.map((kaktos) => (
              <div
                key={kaktos._id}
                className="col-lg-3 col-md-6 portfolio-item filter-app"
              >
                <Link to={`/detail/${kaktos._id}`}>
                  <div className="portfolio-wrap">
                    <img
                      src={kaktos.images[0]}
                      className="img-fluid"
                      alt=""
                    />
                    {
                      console.log("kaktos.images[0]",kaktos.images[0])
                    }
                    <div className="portfolio-links">
                      <h4>{kaktos.name}</h4>
                      {/* <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="App 1"
                      >
                      <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HousePlants;

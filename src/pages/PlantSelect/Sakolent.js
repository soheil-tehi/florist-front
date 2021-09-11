import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Kaktos = () => {
  const [palnts, setPlants] = useState([{}]);

  let sakolentClass = [];

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/florist/get`;
    axios
      .get(url)
      .then((plant) => setPlants(plant.data))
      .catch((err) => console.log(err));
  }, []);

  sakolentClass = palnts.filter((plant) => plant.class === "sakolent");

  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <h2>ساکولنت</h2>
            <p style={{ textAlign: "end" }}>
              ساکولنت‌ها گیاهانی زیبا با جثه‌ي کوچک یا متوسط هستند که تنوع زیادی
              در شکل، اندازه و رنگ دارند. ساکولنت‌ها زمانی گیاهان بومی بیابان
              بودند و حالا در خانه‌های ما هستند و به عنوان گیاهان آپارتمانی جالب
              و متنوع از آن‌ها استفاده می‌کنیم
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
            {sakolentClass.map((kaktos) => (
              <div
                key={kaktos._id}
                className="col-lg-3 col-md-6 portfolio-item filter-app"
              >
                <Link to={`/detail/${kaktos._id}`}>
                  <div className="portfolio-wrap">
                    <img src={kaktos.images[0]} className="img-fluid" alt="" />
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

export default Kaktos;

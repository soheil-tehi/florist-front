import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div >
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <h2>محصولات</h2>
            <p>
              هنگام خرید گیاه آپارتمانی جدید، آن را به چشم یک موجود زنده نگاه
              کنید. شرایط خانه‌تان را برای ورود انواع گیاه گلدانی جدید آماده
              کنید. جای مناسب به او اختصاص دهید. سپس از گلخانه فروشگاه اینترنتی
              گل و گیاه گُل‌سِتان او را به خانه خود دعوت کنید. گُل‌سِتان با
              راه‌اندازی لاین فروش گل و گیاه اینترنتی این موقعیت را برای شما
              فراهم کرده و شما می‌توانید بدون نیاز به رفتن به بازار گل و گیاه،
              با خرید آنلاین گیاه آن‌ها را در محل خود تحویل بگیرید
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
            {/* garden plants */}

            <div className="col-lg-3 col-md-6 portfolio-item filter-card">
              <Link to="/plant/GardenPlants">
                <div className="portfolio-wrap">
                  <img
                    src="/images/class/garden.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <h4 style={{ color: "green" }}>گیاهان فضای باز</h4>

                    {/* <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Card 2"
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

            {/* kaktos */}
            <div className="col-lg-3 col-md-6 portfolio-item filter-app">
              <Link to="/plant/kaktos">
                <div className="portfolio-wrap">
                  <img
                    src="images/class/kaktos.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <h4 style={{ color: "green" }}>کاکتوس</h4>
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

            {/* sakolnet plants */}
            <div className="col-lg-3 col-md-6 portfolio-item filter-app">
              <Link to="/plant/Sakolent">
                <div className="portfolio-wrap">
                  <img
                    src="/images/class/sakolent.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <h4 style={{ color: "green" }}>ساکولنت</h4>
                    {/* <a
                      href="assets/img/portfolio/portfolio-3.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="App 2"
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

            {/* House plants */}
            <div className="col-lg-3 col-md-6 portfolio-item filter-web">
              <Link to="/plant/HousePlants">
                <div className="portfolio-wrap">
                  <img
                    src="/images/class/house.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <h4 style={{ color: "green" }}>گیاه آپارتمانی</h4>
                    {/* <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Web 3"
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

            {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-5.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Web 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-6.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="App 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-7.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Card 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-8.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Card 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-9.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            
             */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

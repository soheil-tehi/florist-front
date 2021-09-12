import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ marginTop: "10em" }}>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="footer-info"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <h3>گلستان</h3>
                  <p className="pb-3">
                    <em>
                      آدرس گل فروشی آنلاین گلستان (دفتر مرکزی): تهران، خیابان
                      کریمخان زند، خیابان ایرانشهر، خیابان بهشهر، پلاک 37، عمارت
                      گلستان
                    </em>
                  </p>
                  <p>
                    <br />
                    <strong>تلفن : </strong> 021 88468729
                    <br />
                    golestan@info.com <strong> : ایمیل</strong>
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a className="facebook">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a className="instagram">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a className="google-plus">
                      <i className="bx bxl-skype"></i>
                    </a>
                    <a className="linkedin">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 footer-newsletter mr-5 ml-5"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <h4 style={{ textAlign: "end" }}>عضویت در خبرنامه</h4>
                <p style={{ textAlign: "end" }}>
                  برای اطلاع از آخرین مقالات و تخفیف ها عضو خبر نامه شوید
                </p>
                <form>
                  <input type="email" name="email" />
                  <input
                    type="submit"
                    value="عضویت"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    style={{ fontFamily: "Parastoo" }}
                  />
                </form>
              </div>

              <div
                className="col-lg-2 col-md-6 footer-links ml-5"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <h4>گلستان</h4>
                <ul style={{ marginLeft: "15px" }}>
                  <li>
                    <Link to="/">خانه</Link>
                    <i className="bx bx-chevron-right"></i>{" "}
                  </li>
                  <li>
                    <Link to="/products">محصولات</Link>
                    <i className="bx bx-chevron-right"></i>{" "}
                  </li>
                  <li>
                    <Link to="/blog">بلاگ</Link>
                    <i className="bx bx-chevron-right"></i>{" "}
                  </li>
                  <li>
                    <Link to="/contact">تماس با ما</Link>
                    <i className="bx bx-chevron-right"></i>{" "}
                  </li>
                  <li>
                    <Link to="/about">درباره ما</Link>
                    <i className="bx bx-chevron-right"></i>{" "}
                  </li>
                </ul>
              </div>

              {/* <div
                className="col-lg-2 col-md-6 footer-links"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <h4>خ</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>گلستان</span>
            </strong>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

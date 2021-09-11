import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact section-bg">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <h2>تماس با ما</h2>
            <p>
            تمامی مشتریان میتوانند جهت کسب اطلاعات بیشتر از محصولات سایت گلستان با شماره 88468729 -021 تماس حاصل نمایند و یا با فرم زیر در ارتباط باشند
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map"></i>
                <h3>آدرس</h3>
                <p>
                  آدرس گل فروشی آنلاین گلستان (دفتر مرکزی): تهران، خیابان
                  کریمخان زند، خیابان ایرانشهر، خیابان بهشهر، پلاک 37، عمارت
                  گلستان
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope"></i>
                <h3>ایمیل ما</h3>
                <p>golestan@info.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>با ما تماس بگیرید</h3>
                <p>021-88468729</p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-6 ">
              {/* <iframe
                className="mb-4 mb-lg-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameBorder="0"
                style={{ border: "0", width: "100%", height: " 384px" }}
                allowFullScreen
              ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.781368236301!2d51.41990718106466!3d35.71188702325057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01b4e8ac0045%3A0x831a07098c69a147!2sGol%20Setan%20Florist!5e0!3m2!1sen!2s!4v1631273075969!5m2!1sen!2s"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                style={{ border: "0", width: "100%", height: " 384px" }}
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form
                
                role="form"
                className="php-email-form"
              >
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="نام "
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="ایمیل"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="موضوع"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="پیغام"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                   
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">ارسال پیغام</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

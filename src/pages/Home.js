import React from "react";
import { Link } from "react-router-dom";
//icon import
// import { Icon } from "@iconify/react";
import Header from "../Componenst/Header";
//import Header

const Home = () => {
  return (
    <div>
      <Header />
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row no-gutters">
              <div
                className="content col-xl-5 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="content" style={{ textAlign: "end" }}>
                  <h3>اهمیت و مزایای نگهداری گل در منزل و محل کار</h3>
                  <p>
                    فواید بی نظیر نگهداری گل و گلدان در منزل و شرکت بر هیچکس
                    پوشیده نیست؛ نگهداری گلدان در محل کار و منزل، علاوه بر القای
                    حس زیبایی، مزایای جسمی و روحی بسیاری بر افراد دارد. بسیاری
                    از خانم‌های خانه دار و حتی مدیران شرکت‌ها از انواع گل‌ها جهت
                    زیباسازی دکوراسیون منزل و شرکت استفاده می‌کنند و بر این
                    باورند که نگاه کردن به گل‌ها در طول روز، باعث افزایش انرژی،
                    سرزندگی و شادابی می شود. اما این‌ موارد تنها مزایای نگهداری
                    گلدانی پر از گل‌های زیبا در منزل نیست و همان طور که اشاره
                    کردیم نگهداری گل مزایای فراوانی بر سلامت جسم و روان افراد
                    نیز دارد.
                  </p>
                  <Link to="/about" className="about-btn link">
                    درباره ما
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
              <div
                className="col-xl-7 d-flex align-items-stretch"
                style={{ textAlign: "end" }}
              >
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                     <i className="bx bxs-cloud-rain"></i>
                      <h4>تصفیه هوا و آزاد شدن اکسیژن</h4>
                      <p>
                        با قرار دادن گل در نقاط مختلف منزل می توان این آلودگی را
                        تا حدودی کنترل کرد، چرا که گل‌ها، دی اکسید کربن هوا را
                        می گیرند و اکسیژن آزاد می کنند.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                       <i className="bx bxs-heart"></i>
                      <h4>افزایش روابط صمیمی‌تر و موثرتری با دیگران </h4>
                      <p>
                        در زمینه تاثیر نگهداری گل در خانه و شرکت تحقیقات بسیاری
                        صورت گرفته که یکی دیگر از آن‌ها نشان می‌دهد افرادی که
                        زمان زیادی را صرف نگهداری از گل و گیاه می کنند، روابط
                        صمیمی‌تر و موثرتری با دیگران دارند
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="bx bx-cycling"></i>
                      <h4> کاهش استرس</h4>
                      <p>
                        نگهداری گل استرس در منزل و محل کار را کاهش می دهد؛
                        گیاهان روح و روان انسان ها را تسکین می دهند و به عنوان
                        راهی برای از بین بردن استرس معرفی می شوند.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                        <i className="bx bxs-shield"></i>
                      <h4>کاهش سرماخوردگی، گلودرد و سرفه‌های خشک</h4>
                      <p>
                        براساس مطالعه‌ای که در دانشگاه کشاورزی نروژ انجام شد
                        وجود گیاهان سالم در فضای خانه احتمال ابتلا به
                        سرماخوردگی، گلودرد و سرفه‌های خشک را کاهش می‌دهد. ظاهرا
                        افزایش رطوبت محیط خانه عاملی است که از گسترش ویروس
                        آنفلوآنزا جلوگیری می‌کند.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <h2>خدمات</h2>
              <p>
                گلستان در راستای راحتی شما و رفع نیازهای روزمره‌تون، خدمات
                باغبانی و فضای سبز رو با بهترین قیمت و کیفیت،‌ در سریع‌ترین زمان
                ممکن و زیر نظر متخصصان حرفه‌ای به شما ارائه می‌ده. ضمنا شما
                می‌تونید با توجه به سوابق و امتیازات متخصصان و قیمت‌های پیشنهادی
                اون‌ها،‌ انتخاب دقیق‌تری داشته باشید. با گلستان می‌تونید یک
                خونه‌ی همیشه سبز داشته باشید
              </p>
            </div>

            <div className="row" style={{ textAlign: "end" }}>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up">
                  <div className="icon">
                  <i className="bx bxs-shield"></i>
                  </div>
                  <h4 className="title">
                    <p >ضمانت اصالت و سلامت کالا</p>
                  </h4>
                  <p className="description">
                    تمامی محصولات  گلستان همراه با پلاکِ مخصوصِ برندِ ما
                    عرضه خواهند شد و شما میتوانید محصولات فرعی و غیر اصل را توسط
                    این پلاک تشخیص دهید.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                  <i className="bx bx-money"></i>
                  </div>
                  <h4 className="title">
                    <p>پرداخت در محل</p>
                  </h4>
                  <p className="description">
                    پرداخت به سفیر  گلستان در محل، به صورت نقدی و یا از طریق
                    کارت‌خوان.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                  <i className="bx bxs-tree"></i>
                  </div>
                  <h4 className="title">
                    <p>خدمات باغبانی و گیاهان آپارتمانی</p>
                  </h4>
                  <p className="description">
                    خبر خوب این است که  گلستان بعد از اتمام فرآیند خرید، شما
                    را تنها نخواهد گذاشت. کارشناسان ما همواره برای پاسخگویی به
                    سوالات شما عزیزان، آماده به خدمت خواهند بود
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                  <i className="bx bx-run"></i>
                  </div>
                  <h4 className="title">
                    <p>ارسال سریع و مطمئن</p>
                  </h4>
                  <p className="description">
                    روز و ساعت دقیق تحویل سفارشات؛ بلافاصله پس از آماده شدن
                    محصول از طریق پیامک، به اطلاع مشتری خواهد رسید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts  section-bg">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-simple-smile"></i>
                  <span data-toggle="counter-up">345</span>
                  <p>
                    <strong>رضایت مشتری</strong>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-document-folder"></i>
                  <span data-toggle="counter-up">5210</span>
                  <p>
                    <strong>فروش موفق</strong>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-live-support"></i>
                  <span data-toggle="counter-up">1,463</span>
                  <p>
                    <strong>ساعت پشتیبانی</strong>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-users-alt-5"></i>
                  <span data-toggle="counter-up">15</span>
                  <p>
                    <strong>کارمند سخت کوش</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="text-center">
              <h3>مشاوره</h3>
              <p>
                {" "}
                اگر شما هم نیاز به مشاوره برای گیاهان آپارتماین خود
                دارید،میتوانید روی متخصصین گل و گیاه گلستان حساب کنید و از
                خدمات و سرویس‌های ما استفاده کنید
              </p>
              <Link className="cta-btn link" to="/contact">
                ارتباط با پشتیبانی
              </Link>
            </div>
          </div>
        </section>

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
                کنید. جای مناسب به او اختصاص دهید. سپس از گلخانه فروشگاه
                اینترنتی گل و گیاه گلستان او را به خانه خود دعوت کنید.
                گلستان با راه‌اندازی لاین فروش گل و گیاه اینترنتی این موقعیت
                را برای شما فراهم کرده و شما می‌توانید بدون نیاز به رفتن به
                بازار گل و گیاه، با خرید آنلاین گیاه آن‌ها را در محل خود تحویل
                بگیرید
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

        <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              <h2>حسین پناهی</h2>
              <p style={{lineHeight:2}}>
                پدرم می‌گوید کتاب<br/> 
                مادرم می‌گوید دعا <br/>
                و من خوب می‌دانم که زیباترین
                تعریف خدا را فقط باید از زبان گل‌ها شنید
              </p>
            </div>
            {/* 
            <div className="owl-carousel testimonials-carousel">
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-1.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>

              <div
                className="testimonial-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>

              <div
                className="testimonial-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>

              <div
                className="testimonial-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-4.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>

              <div
                className="testimonial-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-5.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

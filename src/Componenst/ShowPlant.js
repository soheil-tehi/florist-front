import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//import CSS
import "./ShowPlant.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/Actions";

const ShowPlant = (props) => {
  const [plant, setPlant] = useState({});

  //redux fill
  const cartState = useSelector((state) => state);

  const cartAction = useDispatch();

  //get id plant
  const id = props.match.params.id;
  // `/florist/plant/${id}`
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/florist/plant/${id}`;
    axios
      .get(url)
      .then((plant) => setPlant(plant.data))
      .catch((error) => console.log(error));
  }, []);

  function changeImage(element) {
    var main_prodcut_image = document.getElementById("main_product_image");
    main_prodcut_image.src = element.src;
  }

  function separate(Number) {
    Number += "";
    Number = Number.replace(",", "");
    let x = Number.split(".");
    let y = x[0];
    let z = x.length > 1 ? "." + x[1] : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
    return y + z;
  }

  return (
    <div>
      {!plant.images ? (
        <div></div>
      ) : (
        <div className="container mt-5 mb-5">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-6 border-end">
                <div className="d-flex flex-column justify-content-center">
                  <div className="main_image">
                    {" "}
                    <img
                      src={plant.images[0]}
                      id="main_product_image"
                      width="350"
                    />{" "}
                  </div>
                  <div className="thumbnail_images">
                    <ul id="thumbnail">
                      {plant.images.map((image, index) => (
                        <li key={index}>
                          <img
                            onClick={(e) => changeImage(e.target)}
                            src={plant.images[index]}
                            width="100"
                          />
                        </li>
                      ))}
                      {/* <li>
                        <img
                          onClick={(e) => changeImage(e.target)}
                          src={`/uploads/${plant.images[1]}`}
                          width="100"
                        />
                      </li>
                      <li>
                        <img
                          onClick={(e) => changeImage(e.target)}
                          src={`/uploads/${plant.images[2]}`}
                          width="100"
                        />
                      </li>
                      <li>
                        <img
                          onClick={(e) => changeImage(e.target)}
                          src={`/uploads/${plant.images[3]}`}
                          width="100"
                        />
                      </li>
                      <li>
                        <img
                          onClick={(e) => changeImage(e.target)}
                          src={`/uploads/${plant.images[4]}`}
                          width="100"
                        />
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 right-side">
                  {/* <div className="d-flex justify-content-between align-items-end"> */}
                  <h3 style={{ textAlign: "center" }}>{plant.name}</h3>{" "}
                  {/* <span className="heart">
                      <i className="bx bx-heart"></i>
                    </span> */}
                  {/* </div> */}
                  <div className="mt-2 pr-3 content">
                    <p style={{ textAlign: "center" }}>{plant.mainTitle}</p>
                  </div>
                  <h3 style={{ textAlign: "center" }}>
                    {separate(plant.price)}
                  </h3>
                  {/* ratings -----------------------------*/}
                  {/* <div className="ratings d-flex flex-row align-items-center">
                        <div className="d-flex flex-row"> <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bx-star'></i> </div> <span>441 reviews</span>
                    </div> */}
                  {/* colors--------------------------------- */}
                  {/* <div className="mt-5"> <span className="fw-bold">Color</span>
                        <div className="colors">
                            <ul id="marker">
                                <li id="marker-1"></li>
                                <li id="marker-2"></li>
                                <li id="marker-3"></li>
                                <li id="marker-4"></li>
                                <li id="marker-5"></li>
                            </ul>
                        </div>
                    </div> */}
                  <div className="buttons d-flex flex-row mt-5 gap-3">
                    {" "}
                    {/* <Link to="/cart"> */}
                    <button
                      style={{ margin: "0 auto" }}
                      className="btn btn-outline-success"
                      onClick={() => cartAction(addToCart(plant))}
                    >
                      اضافه به سبد خرید
                    </button>
                    {/* </Link> */}
                  </div>
                  <br />
                  <hr />
                  <h3 style={{ textAlign: "end" }}>
                    مشخصات محصولی که دریافت می‌کنید
                  </h3>
                  <p style={{ textAlign: "end" }}>
                    فیکوس الاستیکا شرابی که از گل‌سِتان دریافت می‌کنید دارای
                    مشخصات زیر است : فیکوس الاستیکا شرابی (یاقوتی) گلدان
                    پلاستیکی مشکی که گیاه در آن کاشته شده است. ارتفاع محصول 45
                    تا 55 و عرض 25 تا 30 سانتی‌متر است. کارت پستال رایگان با متن
                    دلخواه بر روی محصول قرار می‌گیرد. دوستداران گل و گیاه
                    سلیقه‌های مختلفی در انتخاب گیاه خانگی مورد نظرشان دارند.
                    برخی گیاهان کوچک و مینیمال را برای تزیین کردن محل کار یا
                    زندگی‌شان ترجیح می‌دهند. برخی دیگر گیاهان بزرگ برگ پهن و
                    برخی دیگر گیاهانی با ظاهری شبیه درختان موجود در طبیعت را
                    می‌پسندند. برای آشنایی با درختچه آپارتمانی مقاله‌ای که در
                    این زمینه آماده کرده‌ایم را مطالعه فرمایید.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div style={{ textAlign: "end", padding: "1em" }}>
              <h4>{plant.titles[0]}</h4>
              <p>{plant.descs[0]}</p>
            </div>
            <div style={{ textAlign: "end", padding: "1em" }}>
              <h4>{plant.titles[1]}</h4>
              <p>{plant.descs[1]}</p>
            </div>

            <div style={{ textAlign: "end", padding: "1em" }}>
              <h4>{plant.titles[2]}</h4>
              <p>{plant.descs[2]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowPlant;

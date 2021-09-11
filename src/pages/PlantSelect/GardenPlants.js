import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Kaktos = () => {
  const [palnts, setPlants] = useState([{}]);

  let gardenClass = [];

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/florist/get`;
    axios
      .get(url)
      .then((plant) => setPlants(plant.data))
      .catch((err) => console.log(err));
  }, []);

  gardenClass = palnts.filter((plant) => plant.class === "garden");

  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <h2>گیاهان فضای باز</h2>
            <p style={{ textAlign: "end" }}>
              گیاهان فضای باز شامل انواع گل ها، درختان تزیینی و مثمر، درتخچه ها،
              گیاهان بوته ای و چمن هاست. از مشخصه های بارز این گیاهان مقاومت
              آنها به تغییرات زیاد دما و میزان نور خورشید است. طبیعتاً مطلوب تر
              این است که این گیاهان در هوای آزاد باشند تا بتوانند به خوبی رشد و
              نمو داشته و نگهداری شوند
            </p>
          </div>

          

          <div className="row portfolio-container" data-aos="fade-up">
            {gardenClass.map((kaktos) => (
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
                    <div className="portfolio-links">
                      <h4>{kaktos.name}</h4>
                
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

import React from "react";
import "./CartEmpty.css";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div>
      <div className="container-fluid mt-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body cart">
                <div className="col-sm-12 empty-cart-cls text-center">
                  {" "}
                  <img
                    src="https://i.imgur.com/dCdflKN.png"
                    width="130"
                    height="130"
                    className="img-fluid mb-4 mr-3"
                  />
                  <h3>
                    <strong>سبد خرید شما خالیست</strong>
                  </h3>
                  <h4>برای خرید گیاه مورد علاقه خود وارد صفحه محصولات شوید</h4>
                  <Link
                    to="/products"
                    className="btn btn-success cart-btn-transform m-3"
                    data-abc="true"
                  >
                    صفحه محصولات
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;

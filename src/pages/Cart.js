import React, { useState, useEffect } from "react";
import "./Cart.css";
//if cart emty
import CartEmpty from "../Componenst/CartEmpty";

//import icon
// import { Icon } from "@iconify/react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addQuantity, minusQuantity } from "../Redux/Actions";

const Cart = () => {
  const [cartItems, setCartItems] = useState(useSelector((state) => state));

  //مقدار دهی با redux
  let cartItem2 = useSelector((state) => state);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  }, [cartItem2]);

  //redux
  const cartActions = useDispatch();

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
      {cartItems === null || cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <div class="container mt-5 mb-5">
          <div class="d-flex justify-content-center row">
            <div class="col-md-8">
              <div class="p-2">
                <h4>لیست خرید</h4>
              </div>

              {/* cart item.................................. */}
              {cartItems.map((item) => (
                <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                  <div class="mr-1">
                    <img class="rounded" src={item.images[0]} width="70" />
                  </div>
                  <div class="d-flex flex-column align-items-center product-details">
                    <span class="font-weight-bold">{item.name}</span>
                  </div>
                  <div class="d-flex flex-row align-items-center qty">
                    <i
                      className="bx bx-minus-circle"
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => cartActions(minusQuantity(item))}
                    ></i>

                    <h5 class="text-grey mt-1 mr-3 ml-3"> {item.ccount} </h5>
                    <i
                      className="bx bx-plus-circle"
                      onClick={() => cartActions(addQuantity(item))}
                      style={{ cursor: "pointer", color: "green" }}
                    ></i>
                  </div>
                  <div>
                    <h5 class="text-grey">{separate(item.price)}</h5>
                  </div>
                  <div class="d-flex align-items-center">
                    <i
                      className="bx bxs-trash"
                      onClick={() => cartActions(removeFromCart(item))}
                      style={{ cursor: "pointer", color: "red", fontSize: 20 }}
                    ></i>
              
                  </div>
                </div>
              ))}
              {/* cart item.................................. */}

              <div
                style={{ direction: "rtl" }}
                class="d-flex flex-row align-items-center mt-3 p-2  bg-white rounded"
              >
                <input
                  type="text"
                  class="form-control border-0 gift-card"
                  placeholder="کد تخفیف را وارد کنید..."
                />
                <button
                  class="btn btn-outline-success btn-sm mr-2 ml-2"
                  type="button"
                >
                  تایید
                </button>
              </div>
              <div class="d-flex flex-row align-items-center mt-3  p-2 bg-white rounded">
                <button
                  class="btn btn-success btn-block btn-lg ml-2 pay-button"
                  type="button"
                >
                  پرداخت
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

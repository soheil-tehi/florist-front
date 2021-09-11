import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import bootstrap Componets
import { Navbar, Container, Button, Badge, Nav } from "react-bootstrap";
//import css
import "./NavCom.css";

//redux
import { useSelector } from "react-redux";

const NavCom = () => {
  const [cartItems, setCartItems] = useState(useSelector((state) => state));
  const [counter, setCounter] = useState();

  //مقدار دهی با redux
  let cartItem2 = useSelector((state) => state);

  useEffect(() => {
    if (cartItem2 != null) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
      for (let i = 0; i < cartItem2.length + 1; i++) {
        setCounter(i);
      }
    }
  }, [cartItem2]);

  return (
    <div>
      {/* {console.log("cart count", counter)} */}
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h2 style={{ fontWeight: "bolder", color: "green", marginTop: 10 }}>
              گلستان
            </h2>
          </Navbar.Brand>
          <Link to="/cart">
            <Button variant="light">
              <Badge bg="success">{counter}</Badge>
              سبد خرید
            </Button>
            {/* )} */}
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link className="navItem" to="/contact">
              تماس با ما
            </Link>
            <Link className="navItem" to="/about">
              درباره ما
            </Link>
            <Link className="navItem" to="/blog">
              بلاگ{" "}
            </Link>
            <Link className="navItem" to="/products">
              محصولات
            </Link>
            <Link className="navItem" to="/">
              خانه
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavCom;

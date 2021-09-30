import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NaviBar = () => {
  let history = useHistory();

  const logOut = (event) => {
    localStorage.removeItem("tokenz");
    history.push("/login");
  };

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // if (localStorage.getItem("tokenz") != null) {
    //   console.log("false");
    //   setShowNavbar(true);
    // } else {
    //   console.log("true");
    //   setShowNavbar(false);
    // }
  });
  return (
    <div>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src="logo-dbs.png" height="80"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            {showNavbar ? (
              <>
                <Nav.Link href="/ProductPageScreen">View All Products</Nav.Link>
                <Nav.Link href="/ShoppingCart">Shopping Cart</Nav.Link>
                {/* <Nav.Link href="/TopProduct">Top Product</Nav.Link> */}
                <Nav.Link href="/LoginScreen" onClick={logOut}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <></>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NaviBar;

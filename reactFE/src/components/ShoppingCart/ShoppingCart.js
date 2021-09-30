import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import Axios from "axios";

import service from "../../services/APIServices";

const ShoppingCart = () => {
  const initialCarts = [
    {
      product_id: 1,
      order_id: 1,
      customer_id: 1,
      product_qty: 2,
      item_price: 100,
      qty: 1,
    },
    {
      product_id: 1,
      order_id: 1,
      customer_id: 1,
      product_qty: 2,
      item_price: 100,
      qty: 2,
    },
  ];

  const getData = (event) => {
    var userid = localStorage.getItem("userID");

    var data = service.getOrder(userid);
    setCarts(data);
  };

  const initCoupon = {
    couponValue: "",
    isApply: false,
  };

  useEffect(() => {
    let value = 0;
    carts.forEach((element) => {
      value += element.item_price;
    });

    setTotalPrice(value);
  });
  const [carts, setCarts] = useState(initialCarts);
  const [coupon, setCoupon] = useState(initCoupon);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCoupon({ ...coupon, [name]: value });
  };
  const handleClickCoupon = (event) => {
    if (coupon.couponValue === "FIRSTTIME") {
      setCoupon({ isApply: true });
      console.log("true");
    }
    console.log(coupon);
  };

  const handleClickRemoveItem = (event) => {
    // service.deleteOrder(event.id);
    // static remove

    var items = carts;
    items.forEach((element) => {
      if (element.product_id == event.id) {
        element.qty = 0;
      }
    });
    setCarts(items);
  };

  console.log(carts);
  return (
    <div>
      <section class="section-pagetop bg">
        <div class="container">
          <h2 class="title-page">Shopping Cart</h2>
        </div>
      </section>

      <section class="section-content padding-y">
        <div class="container">
          <div class="row">
            <main class="col-md-9">
              {carts &&
                carts.map((item) => (
                  <>
                    <div class="card">
                      <table class="table table-borderless table-shopping-cart">
                        <thead class="text-muted">
                          <tr class="small text-uppercase">
                            <th scope="col">Product</th>
                            <th scope="col" width="120">
                              Quantity
                            </th>
                            <th scope="col" width="120">
                              Price
                            </th>
                            <th scope="col" class="text-right" width="200">
                              {" "}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <figure class="itemside">
                                <div class="aside">
                                  <img
                                    src="https://picsum.photos/seed/picsum/100/100"
                                    class="img-sm"
                                  />
                                </div>
                                <figcaption class="info">
                                  <a href="#" class="title text-dark">
                                    {/* Product Name */}
                                    {item.product_id}
                                  </a>
                                  <p class="text-muted small">
                                    Size: XL, Color: blue, <br /> Brand: Gucci
                                  </p>
                                </figcaption>
                              </figure>
                            </td>
                            <td>
                              <div class="qty-wrap">
                                <var class="qty">{item.qty}</var>
                              </div>
                            </td>
                            <td>
                              <div class="price-wrap">
                                <var class="price">
                                  ${item.item_price * item.qty}
                                </var>
                                <small class="text-muted">
                                  {" "}
                                  ${item.item_price} each{" "}
                                </small>
                              </div>
                            </td>
                            <td class="text-right">
                              <a
                                href=""
                                class="btn btn-light"
                                name={item.product_id}
                                onClick={handleClickRemoveItem}
                              >
                                {" "}
                                Remove
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </>
                ))}

              <div class="alert alert-success mt-3">
                <p class="icontext">
                  <b>Purchase Successful!</b>
                  <br />
                  <b>Balance Amount: ?</b>
                </p>
              </div>
            </main>
            <aside class="col-md-3">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="form-group">
                    <label>Have coupon?</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        name="couponValue"
                        placeholder="Coupon code"
                        onChange={handleInputChange}
                      />
                      <span class="input-group-append">
                        <button
                          class="btn btn-primary"
                          onClick={handleClickCoupon}
                        >
                          Apply
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <dl class="dlist-align">
                    <dt>Total price:</dt>
                    <dd class="text-right">USD 568</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Discount:</dt>
                    <dd class="text-right">USD 658</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Total:</dt>
                    <dd class="text-right  h5">
                      <strong>
                        {coupon.isApply ? totalPrice * 0.2 : totalPrice}
                      </strong>
                    </dd>
                  </dl>
                  <hr />
                  <a href="#" class="btn btn-primary float-md-right">
                    {" "}
                    Make Purchase{" "}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;

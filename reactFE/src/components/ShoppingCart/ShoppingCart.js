import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import Axios from "axios";

const ShoppingCart = () => {
  const initialCarts = [
    {
      product_id: 1,
      order_id: 1,
      customer_id: 1,
      product_qty: 2,
      item_price: 100,
    },
  ];

  const [carts, setCarts] = useState(initialCarts);
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
                                <var class="qty">$1156.00</var>
                              </div>
                            </td>
                            <td>
                              <div class="price-wrap">
                                <var class="price">$1156.00</var>
                                <small class="text-muted"> $315.20 each </small>
                              </div>
                            </td>
                            <td class="text-right">
                              <a href="" class="btn btn-light">
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
                  <form>
                    <div class="form-group">
                      <label>Have coupon?</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          name=""
                          placeholder="Coupon code"
                        />
                        <span class="input-group-append">
                          <button class="btn btn-primary">Apply</button>
                        </span>
                      </div>
                    </div>
                  </form>
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
                      <strong>$1,650</strong>
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

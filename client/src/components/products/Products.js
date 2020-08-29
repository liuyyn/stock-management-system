import React, { Component } from "react";
import { Col, Row } from "reactstrap";

class Products extends Component {
  render() {
    return (
      <div className="products">
        {/* <h2>Products Menu</h2> */}
        <div className="container products-btn ">
          {/* <Container className="products-container"> */}
          <Col>
            <Row>
              {/* <a href="/products/add"> */}
              <button
                className="product-btn"
                onClick={() => (window.location.href = "/products/addProducts")}
              >
                Add Products
              </button>
              {/* </a> */}
            </Row>
            <Row>
              <button
                className="product-btn"
                onClick={() => (window.location.href = "/products/allProducts")}
              >
                View All Products
              </button>
            </Row>
            <Row>
              <button
                className="product-btn"
                onClick={() =>
                  (window.location.href = "/products/productsPerCategory")
                }
              >
                View Products Per Category
              </button>
            </Row>
            <Row>
              <button
                className="product-btn"
                onClick={() =>
                  (window.location.href = "/products/productsPerCompany")
                }
              >
                View Products Per Company
              </button>
            </Row>
          </Col>
          {/* </Container> */}
        </div>
      </div>
    );
  }
}

export default Products;

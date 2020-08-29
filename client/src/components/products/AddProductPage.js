import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addProduct } from "../redux/actions/productActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

class AddProductPage extends Component {
  state = {
    name: "",
    quantity: null,
    price: null,
  };

  static propTypes = {
    products: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: uuid(),
      name: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price,
    };

    // console.log(this.state);

    this.props.addProduct(newProduct);

    console.log(this.props.products.products);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.onSubmit}>
          <FormGroup className="add-product-form">
            <h2>Add Product</h2>
            <Label for="product-name">Name</Label>
            <Input
              name="name"
              placeholder="Eska water 110ml"
              onChange={this.onChange}
            ></Input>

            <Label for="product-quantity">Quantity</Label>
            <Input
              name="quantity"
              type="number"
              placeholder="Product quantity"
              onChange={this.onChange}
            ></Input>

            <Label for="product-price">Price</Label>
            <Input
              name="price"
              type="number"
              placeholder="1.19"
              onChange={this.onChange}
            ></Input>

            <Button>Add Product</Button>
          </FormGroup>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { addProduct })(AddProductPage); // using connect because we are using redux in this component i.e. called a container

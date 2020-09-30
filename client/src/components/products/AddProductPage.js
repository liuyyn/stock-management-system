import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addProduct } from "../redux/actions/productActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddProductPage extends Component {
  state = {
    name: "",
    quantity: null,
    price: null,
    company: "",
    category: "",
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
      name: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price,
      company: this.state.company,
      category: this.state.category,
    };

    // console.log(this.state);

    this.props.addProduct(newProduct);

    // console.log(this.props.products.products);
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
              step={0.01}
              precision={2}
              placeholder="1.19"
              onChange={this.onChange}
            ></Input>

            <Label for="product-company">Company</Label>
            <Input
              name="company"
              placeholder="Metro"
              onChange={this.onChange}
            ></Input>

            <Label for="product-category">Category</Label>
            <Input
              name="category"
              placeholder="Drink"
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

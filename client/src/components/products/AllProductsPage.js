import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AllProductsPage extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
  };

  render() {
    return (
      <>
        <h2>All products</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Company</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {this.props.products.products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.company}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(AllProductsPage);

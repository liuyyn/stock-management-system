import React, { Component } from "react";
import DataTable from "../common/DataTable";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../redux/actions/productActions";

class AllProductsPage extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  static propTypes = {
    products: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <h2>All Products</h2>
        <DataTable products={this.props.products.products} />

        {/* <Table responsive>
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
        </Table> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProducts })(AllProductsPage);

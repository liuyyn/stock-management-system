import React, { Component } from "react";
// import { Table } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DataTable from "../common/DataTable";

class PerCompanyPage extends Component {
  static propTypes = {
    companies: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
  };

  render() {
    const URL = window.location.href;
    const lastURLSegment = URL.substr(URL.lastIndexOf("/") + 1);

    // check if there is a slug after the /productsPerCompany/:slug
    const cArr = this.props.companies.filter(
      (company) => company.id === lastURLSegment
    );
    const company = cArr.length === 1 ? cArr[0] : null;

    return company !== null ? (
      <>
        <h2>{company.name} Products</h2>

        <DataTable
          products={this.props.products.filter(
            (product) => product.company === company.name
          )}
        />
      </>
    ) : (
      <>
        <h2>Products per companies</h2>
        {this.props.companies.map((company) => (
          <div key={company.id}>
            <h4>{company.name}</h4>
            <DataTable
              products={this.props.products.filter(
                (product) => product.company === company.name
              )}
            />
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  companies: state.companies.companies,
  products: state.products.products,
});

export default connect(mapStateToProps)(PerCompanyPage);

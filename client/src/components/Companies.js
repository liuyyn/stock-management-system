import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "reactstrap";

class Companies extends Component {
  static propTypes = {
    companies: PropTypes.array.isRequired,
  };

  render() {
    return (
      <>
        <ListGroup>
          {this.props.companies.map((company) => (
            <ListGroupItem
              action
              key={company.id}
              tag="button"
              onClick={() =>
                (window.location.href = `/products/productsPerCompany/${company.id}`)
              }
            >
              {company.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  companies: state.companies.companies,
});

export default connect(mapStateToProps)(Companies);

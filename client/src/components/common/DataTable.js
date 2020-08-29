import React from "react";
import { Table } from "reactstrap";

const DataTable = (props) => {
  return (
    <>
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
          {props.products.map((product) => (
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
};

export default DataTable;

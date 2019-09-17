import React from "react";
import "../stylesheets/components/listings.scss";
import Button from "./Button";

export default class ListingsItem extends React.Component {
  render() {
    return (
      <tr className="item">
        <td>logo</td>
        <td>{this.props.source}</td>
        <td>ABC Dental</td>
        <td>2101 California St.</td>
        <td>1.1.1.1</td>
        <td>3/5</td>
        <td>No</td>
        <td>{this.props.status}</td>
        <td>
          <Button />
        </td>
      </tr>
    );
  }
}

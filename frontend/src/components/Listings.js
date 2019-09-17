import React from "react";
import ListingsItem from "./ListingsItem";
import "../stylesheets/components/listings.scss";
export default class Listings extends React.Component {
  render() {
    return (
      <div className="Lisitings-cont">
        <div className="Listings-table">
          <table>
            <tr>
              <th className="LT-head" colspan="9">
                LISTINGS
              </th>
            </tr>

            <tr>
              <th> </th>
              <th>Source</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Rating</th>
              <th>Listed</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <ListingsItem source="Google" />
            <ListingsItem source="Google" />
            <ListingsItem source="Google" />
            <ListingsItem source="Google" />
            <ListingsItem source="Google" />
          </table>
        </div>
      </div>
    );
  }
}

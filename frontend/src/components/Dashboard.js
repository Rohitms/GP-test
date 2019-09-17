import React from "react";
import SideNav from "./SideNav";
import Listings from "./Listings";
export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <SideNav />
        <Listings />
      </div>
    );
  }
}

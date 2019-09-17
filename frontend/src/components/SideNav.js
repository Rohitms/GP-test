import React from "react";
import SNitem from "./SNitem";
import "../stylesheets/components/sidenav.scss";

export default class SideNav extends React.Component {
  render() {
    return (
      <div className="SN-cont">
        <div className="SN-Name">GROWTH PLUG</div>
        <div className="SN-items">
          <SNitem name="Dashboard" />
          <SNitem name="Website" />
          <SNitem name="Visitor" />
          <SNitem name="Review" />

          <div className="active">
            <SNitem name="Listings" />
          </div>
          <SNitem name="Appointments" />
          <SNitem name="Settings" />
        </div>
      </div>
    );
  }
}

import React from "react";

export default class SNitem extends React.Component {
  render() {
    return <div className="SN-item">{this.props.name}</div>;
  }
}

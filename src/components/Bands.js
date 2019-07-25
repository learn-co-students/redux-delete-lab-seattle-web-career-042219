import React, { Component } from "react";
import Band from "./Band";

class Bands extends Component {
  render() {
    const bands = this.props.bands.map((band, index) => {
      return (
        <Band key={index} band={band} deleteBand={this.props.deleteBand} />
      );
    });
    return <ul>{bands}</ul>;
  }
}
export default Bands;

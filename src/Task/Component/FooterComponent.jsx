import React from "react";

export default class FooterComponent extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <p>
          &copy; Copyright {this.props.tahun} {this.props.nama}
        </p>
      </footer>
    );
  }
}

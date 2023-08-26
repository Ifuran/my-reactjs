import React from "react";

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="Header">
        <nav className="Nav">
          React Task by{" "}
          <a title="Creator" href="https://ifuran.github.io">
            {this.props.nama}
          </a>
        </nav>
      </header>
    );
  }
}

import React from "react";

export default class ClassComponent extends React.Component {
  state = {
    nilai: 10,
  };
  handleAdd = () => {
    this.setState({ nilai: this.state.nilai + 1 });
  };
  handleRemove = () => {
    if (this.state.nilai > 0) {
      this.setState({ nilai: this.state.nilai - 1 });
    }
  };
  render() {
    return (
      <div className="Container">
        <h1>Class Component</h1>
        <p>Ini dibuat {this.props.nama} dengan Class Component</p>
        <button className="Btn" onClick={this.handleRemove}>
          -
        </button>
        <span className="ValueAngka">{this.state.nilai}</span>
        <button className="Btn" onClick={this.handleAdd}>
          +
        </button>
      </div>
    );
  }
}

import "./Website/Style.css";
import React from "react";
import Navigation from "./Website/Navigation";
import Content from "./Website/Content";

export default class Component extends React.Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Content></Content>
      </div>
    );
  }
}

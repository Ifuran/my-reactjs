import React from "react";
import FunctionComponent from "./Component/FunctionComponent";
import ClassComponent from "./Component/ClassComponent";
import HeaderComponent from "./Component/HeaderComponent";
import FooterComponent from "./Component/FooterComponent";

export default class Component extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent nama="Ifuran"></HeaderComponent>
        <FunctionComponent nama="Ifran Silalahi"></FunctionComponent>
        <ClassComponent nama="Ifuran"></ClassComponent>
        <FooterComponent nama="Ifuran" tahun={2023}></FooterComponent>
      </div>
    );
  }
}

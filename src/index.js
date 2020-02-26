import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

const App = () => {
  return <p className="myClass">Hello World in react</p>;
};

const WhereToRenderReact = document.querySelector("#root");

ReactDOM.render(<App />, WhereToRenderReact);

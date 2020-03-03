import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return <div className="jumbotron mt-4" style={{ color: "whitesmoke", backgroundImage: "url(images/book-blur.jpg)", backgroundSize: "fill", backgroundRepeat: "no-repeat" }}>{children}</div>;
}

export default Jumbotron;

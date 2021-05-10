import { Component } from "react";
import "../styles/Landing.css";
import { init } from "ityped";

import Main from "./Main";
export default class Landing extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: true,
      strings: ["festivals", "venues", "events"],
      typeSpeed: 100,
    });
  }
  render() {
    return (
      <>
        <div className="landing-container">
          <h1 className="title">Good Foot Productions</h1>
          <p className="bannerCaption">
            Creative Management for <span id="myElement"></span>
          </p>
        </div>
        <Main />
      </>
    );
  }
}

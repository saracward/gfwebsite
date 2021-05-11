import { Component } from "react";
import "../styles/Landing.css";
import { init } from "ityped";

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
        <div className="aboutContainer">
          <div className="contentBox">
            <h1>We Create Experiences</h1>
            <p>
              <span id="special">
                The Good Foot specializes in live music, but we do so much more.
              </span>{" "}
              Our goal is to facilitate success for performers, venues,
              festivals and events through constantly evolving creative
              management. We have worked with top quality talent, festivals and
              venues both locally and nationally. We relish every opportunity to
              make events worthwhile, create memorable experiences, and take
              great pride in our reputation for doing so with an upbeat positive
              energy.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1620000928/Portfolio1/anthony-delanoix-hzgs56Ze49s-unsplash_flfru5.jpg"
            alt=""
          />
        </div>
      </>
    );
  }
}

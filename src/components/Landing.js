import { Component } from 'react';
import '../styles/Landing.css';
import { init } from "ityped";
export default class Landing extends Component {
    // componentDidMount() {
    //     const myElement = document.querySelector("#myElement");
    //     init(myElement, {
    //       showCursor: true,
    //       strings: ["Creative Management for festivals.","Creative Management for venues.", "Creative Management for events."],
    //       typeSpeed: 75
    //     });
    //   }
    componentDidMount() {
        const myElement = document.querySelector("#myElement");
        init(myElement, {
          showCursor: true,
          strings: ["festivals","venues", "events"],
          typeSpeed: 100
        });
      }
      render () { return (
        <>
        <div className="landing-container">
            <h1 className="title">Good Foot Productions</h1>
            <p className="bannerCaption">Creative Management for <span id="myElement"></span></p>
            {/* <p className="bannerCaption"><span id="myElement"></span></p> */}
        </div>
        </>
      )}
}
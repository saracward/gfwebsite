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
              <br />
              <br />
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
        <div className="services">
          <h1>Services & Specialties</h1>
          <p>
            Our specialty is programming and managing unique live entertainment
            for festivals and venus. Our connections to bands and performers of
            all varieties make us an invaluable asset to create an atmosphere of
            entertainment catered to the client's vision.
          </p>
          <div className="serviceBox">
            <div>
              <img
                src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1620754667/Portfolio1/alexey-ruban-73o_FzZ5x-w-unsplash_zw6hxn.jpg"
                alt=""
              />
              <h2>Production Management</h2>
              {/* <button>Learn More</button> */}
            </div>
          </div>
          <div className="serviceBox">
            <div>
              <img
                src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1620762274/Portfolio1/siim-lukka-S8E5a5ZlkNc-unsplash_lht5lh.jpg"
                alt=""
              />
              <h2>Festival Management</h2>
            </div>
          </div>
          <div className="serviceBox">
            <div>
              <img
                src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1620762274/Portfolio1/taya-iv-sBr-g8wJw5k-unsplash_viuigd.jpg"
                alt=""
              />
              <h2>Music Curation</h2>
            </div>
          </div>
        </div>
        <div className="testimonialContainer">
          <div className="divider"></div>
          <h1>Testimonials</h1>
          <ul className="testCards">
            <li className="testCards_item">
              <div className="testCard">
                <div className="testCard_content">
                  <i class="fas fa-quote-left" />
                  <p className="testCard_text">
                    Since coming on the team 4 years ago, the Food Foot team ahs
                    become an essential element of the A3C team. Their
                    professionalism, communication skills, and positive
                    attitudes has not only contributed to the success of our
                    events but has elevated the experience for attendees,
                    vendors, and partners alike.{" "}
                    {/* <i class="fas fa-quote-right" /> */}
                  </p>
                  <p className="testPartner">
                    Matt Weiss, Production Director for A3C Festival &
                    Conference, Event Management, Festival Management
                  </p>
                </div>
              </div>
            </li>
            <li className="testCards_item">
              <div className="testCard">
                <div className="testCard_content">
                  <i class="fas fa-quote-left" />
                  <p className="testCard_text">
                    Ally did an excellent job coordination my wedding day. The
                    event flowed seamlessly, Ally was professional throughout
                    and our guests could not have had a better time. Ally is the
                    right person for a perfect production.
                    {/* <i class="fas fa-quote-right" /> */}
                  </p>
                  <p className="testPartner">
                    Leah Hampton, Bride, Event Management
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="divider"></div>
        </div>
      </>
    );
  }
}

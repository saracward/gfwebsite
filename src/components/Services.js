import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";

// import ProductionManagement from "./ProductionManagement";
// import FestivalManagement from "./FestivalManagement";
// import MusicCuration from "./MusicCuration";

const Services = () => {
  return (
    <div className="containers">
      {/* <ProductionManagement />
      <FestivalManagement />
      <MusicCuration /> */}
      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://i.ibb.co/3Tb9M8W/Screen-Shot-2021-05-06-at-2-28-12-PM.png"
                  alt=""
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">Production Management</h2>
                <p className="card_text">Corporate | Public | Private</p>
                <p className="card_text">
                  Good Foot realizes it takes a village and we’re ready
                  contribute to your vision in a variety of ways. We can do as
                  much or as little as you need. As little as providing day-of
                  staff. As much as full-scale management & support with both
                  pre-production and on-site execution.
                </p>
                <p className="card_text">
                  We value our team of experts, whose skills range from creating
                  perfectly color-coded spreadsheets to improvising through
                  unexpected on-site challenges. We always tackle anything
                  thrown our way with a smile.
                </p>
                <Link to="/contact">
                  <button className="btn card_btn">Get in Touch</button>
                </Link>{" "}
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://i.ibb.co/3Tb9M8W/Screen-Shot-2021-05-06-at-2-28-12-PM.png"
                  alt=""
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">Festival Management</h2>
                <p className="card_text">We. Know. Festivals.</p>
                <p className="card_text">
                  From music to food festivals, from 3,000 to 30,000 patrons;
                  our team is comfortable, positive and professional in any
                  setting.
                </p>
                <p className="card_text">
                  We can work under the Good Foot name or partner with your
                  production company, providing support staff to build-out your
                  team. Our goal is to be an asset for whatever role or roles
                  you need filled. There’s no egos on the Good Foot team, only
                  hard-working team members operating together with you towards
                  a successful festival.
                </p>
                <Link to="/contact">
                  <button className="btn card_btn">Get in Touch</button>
                </Link>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://i.ibb.co/3Tb9M8W/Screen-Shot-2021-05-06-at-2-28-12-PM.png"
                  alt=""
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">Music Curation</h2>
                <p className="card_text">
                  Corporate | Weddings | Festivals | Parties | Venues | More!
                </p>
                <p className="card_text">
                  Put your best foot forward at your next event with Good Foot
                  Productions. Create a memorable experience with entertainment
                  that expresses you or your message.
                </p>
                <p className="card_text">
                  While we have booked entertainment at venues and festivals all
                  over the world, we do not have a roster of talent. Our only
                  allegiance is to you and your vision. In fact, if we can’t
                  find entertainment that matches your vision, we’ll custom
                  create a band for you.
                </p>
                <Link to="/contact">
                  <button className="btn card_btn">Get in Touch</button>
                </Link>{" "}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;

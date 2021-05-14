import React from "react";
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
                <h2 className="card_title">Card Grid Layout</h2>
                <p className="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className="btn card_btn">Get in Touch</button>
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
                <h2 className="card_title">Card Grid Layout</h2>
                <p className="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className="btn card_btn">Get in Touch</button>
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
                <h2 className="card_title">Card Grid Layout</h2>
                <p className="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button className="btn card_btn">Get in Touch</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;

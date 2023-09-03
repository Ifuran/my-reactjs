import Hero from "./Hero";
import React, { useState } from "react";
import Modalcomponent from "./Modalcomponent";

const Maincontent = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Hero></Hero>
      <div className="About" id="About">
        <div className="container">
          <h3>Hi, I’m Ifuran. Nice to meet you.</h3>
          <div className="row py-3">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <p className="About-description">
                I'm an aspiring web developer with a passion for crafting digital innovation. Armed with a foundation in HTML, CSS, and JavaScript, I'm poised to transform designs into captivating interactive experiences. Continuous
                learning and collaboration drive me, aiming to deliver inspiring and delightful web journeys for users.
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="Skills">
          <h4 className="Language py-3">Languages I speak</h4>
          <ul className="Skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className="Skills">
          <h4 className="Tools py-3">Tools I use</h4>
          <ul className="Skills-list">
            <li>Bootstrap</li>
            <li>GIT</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Codeigniter</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="Skills">
          <h4 className="Portfolio py-3">Projects I build</h4>
          <div className="Portfolio-wrapper">
            <button onClick={openModal} className="Portfolio-btn btn btn-secondary">
              My Projects
            </button>
            <Modalcomponent show={showModal} onClose={closeModal} />
          </div>
        </div>
      </div>
      <div className="Footer text-center bg-secondary">
        <div className="Contact text-white" id="Contact">
          <div className="container">
            <div className="Contact">
              <h4 className="Social-media py-3 text-center">Social media</h4>
              <ul className="Contact-list">
                <li className="Contact-list-links">
                  <a href="https://www.instagram.com/ifurandesuu" className="Contact-link">
                    Instagram
                  </a>
                </li>
                <li className="Contact-list-links">
                  <a href="https://www.youtube.com/@jarikeyboard" className="Contact-link">
                    Youtube
                  </a>
                </li>
                <li className="Contact-list-links">
                  <a href="#Telegram" className="Contact-link" title="lupa linknya..">
                    Telegram
                  </a>
                </li>
                <li className="Contact-list-links">
                  <a href="https://www.linkedin.com/in/ifransilalahi" className="Contact-link">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="Footer-description">Handcrafted by me &copy; Ifurandesu</p>
      </div>
    </div>
  );
};

export default Maincontent;

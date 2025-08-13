import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myPhoto from '../assets/images/myphoto.jpg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myPhoto} alt="My Avatar" />

        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/chalani1224" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/chalani-serasinghe-a6b683347/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>S.M.C.N.Serasinghe</h1>
          <p>UI/UX Designer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/chalani1224" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/chalani-serasinghe-a6b683347/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
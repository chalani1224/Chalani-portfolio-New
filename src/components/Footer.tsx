import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/chalani1224" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/chalani-serasinghe-a6b683347" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://www.linkedin.com/in/chalani-serasinghe-a6b683347/" target="_blank" rel="noreferrer">CHALANI</a> 💜</p>
    </footer>
  );
}

export default Footer;
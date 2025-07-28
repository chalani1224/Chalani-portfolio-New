import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/nethmi999" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/nethmi-sathsarani-b2a0752b4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://www.linkedin.com/in/nethmi-sathsarani-b2a0752b4/" target="_blank" rel="noreferrer">SATHSARANI</a> 💜</p>
    </footer>
  );
}

export default Footer;
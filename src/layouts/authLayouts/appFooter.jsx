import React from 'react';
import logo from '../../../src/assets/images/frlogo.1.jpg'
import { Avatar, IconButton,Container} from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className='ava'>
            <a href='/home'>
        <Avatar src={logo} sx={{ width: 86, height: 86 }} /></a>
        </div>
        <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae<br/>
        odio quis nisl dapibus malesuada. 
        </p>
        </div>
        <div className="footer-section">
        <a href='/about'> <h2>About Us</h2></a> 
          <p>We are a company dedicated to providing the best service possible.</p>
        </div>
        <div className="footer-section">
         <a href='/contact'><h2>Contact</h2></a> 
          <p>Email: info@company.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="https://www.facebook.com/help/668969529866328" className="social-link"><FacebookOutlinedIcon/></a>
            <a href="https://twitter.com/i/flow/signup?lang=en" className="social-link"><XIcon/></a>
            <a href="" className="social-link"><InstagramIcon/></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <Container>
        <p>&copy; 2024 Company Name. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}

export default AppFooter;

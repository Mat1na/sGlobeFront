import React from 'react'
import { GoMail } from "@react-icons/all-files/go/GoMail";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { Link } from 'react-router-dom';

function Footer() {

  window.addEventListener('click', (e) => {
    if (window.location.pathname === '/login' || window.location.pathname === '/dashboard') {
      document
        .querySelector('.footer-bg')
        .classList.add('footer-bg2');

    }

  });

  window.addEventListener('load', (e) => {
    if (window.location.pathname === '/login' || window.location.pathname === '/dashboard') {
      document
        .querySelector('.footer-bg')
        .classList.add('footer-bg2');

    }

  });
  return (
    <div className="footer-bg mt-5">
      <footer>
        <div className="d-flex justify-content-center">
          <Link to='/'><img src='/Logo_footer.png' alt='logo sGlobelab with tagline' className='logofooter' /></Link>
        </div>
        <div className='d-block footer-icon-list'>
          <ul className="nav justify-content-center list-unstyled d-flex">
            <li className="m-3"><a className="footerlink" href={`mailto:koenraad.vanmeerbeek@kuleuven.be`}><GoMail size={"2.5rem"} className="icons footer-icons me-1" /></a></li>
            <li className="m-3"><a className="footerlink" href="tel:+32%2016%20377444%20"><FaPhone size={"2.5rem"} className="footer-icons icons me-1" /></a></li>
            <li className="m-3"><a className="footerlink" href="https://twitter.com/K_VanMeerbeek" target="_blank" rel="noreferrer"><FaTwitter size={"2.5rem"} className="footer-icons icons me-1" /></a></li>
            <li className="m-3"><a className="footerlink" href="https://www.google.be/maps/place/GEO-Instituut,+Celestijnenlaan+200E,+3001+Leuven/@50.8636993,4.6757642,493m/data=!3m2!1e3!4b1!4m5!3m4!1s0x47c16111ce8c3671:0x4ee0baa6fc29cae3!8m2!3d50.8636993!4d4.6757642" target="_blank" rel="noreferrer"><FaMapMarkerAlt size={"2.5rem"} className="footer-icons icons me-1" /></a></li>
          </ul>
        </div>
        <div className='d-block text-center'>
          <p className="roboto footer-copyright">&copy; 2022 <a href='https://www.linkedin.com/in/matinabampa/' target="_blank" rel="noreferrer" className='footerlink'>Stamatia Bampa</a> and <a href='https://www.linkedin.com/in/winandvanmeerbeek/' target="_blank" rel="noreferrer" className='footerlink'>Winand Van Meerbeek</a></p>
        </div>
      </footer>
    </div>

  )
}

export default Footer
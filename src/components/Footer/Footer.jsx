import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="row">
          <div className="col-md-2">
            <h6>JioGlass</h6>
            <p><a href="#!" tabIndex={0} role="button">Product</a></p>
            <p><div className="margin-5-helper"></div></p>
            <h6>for Consumers</h6>
            <p><a href="#!" tabIndex={0} role="button">Consumer experiences</a></p>
            <div className="margin-5-helper"></div>
            <h6>for Enterprises</h6>
            <p><a href="#!" tabIndex={0} role="button">Enterprise experiences</a></p>
          </div>
          <div className="col-md-2">
            <h6>for Developers</h6>
              <p><a href="#!" tabIndex={0} role="button">Why to Develop?</a></p>
              <p><a href="#!" tabIndex={0} role="button">How to Develop?</a></p>
              <p><a href="#!" tabIndex={0} role="button">Downloads</a></p>
              <p><a href="#!" tabIndex={0} role="button">Community</a></p>
              <p><a href="#!" tabIndex={0} role="button">Sign up</a></p>
              <div className="margin-4-helper"></div>
            <h6>Careers</h6>
              <p><a href="#!" tabIndex={0} role="button">Opportunities</a></p>
          </div>
          <div className="col-md-2">
            <h6>Contact</h6>
            <p>Corporate Office Tesseract Imaging Ltd, T22, Reliance Corporate Park, Navi Mumbai, India - 400701</p>
            <p>Mail us @ info@tesseract.in</p>
            <div className="margin-4-helper"></div>
            <h6>Follow us</h6>
            <div className="social-platforms">
              <a href="#!" tabIndex={0} role="button" className="linkedin">&nbsp;</a>
              <a href="#!" tabIndex={0} role="button" className="instagram">&nbsp;</a>
              <a href="#!" tabIndex={0} role="button" className="facebook">&nbsp;</a>
            </div>
          </div>
          <p className="copyright-text">Design & Copyright | Jio Tesseract</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
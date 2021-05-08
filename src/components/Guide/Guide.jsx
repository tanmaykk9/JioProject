import React from 'react';

const Guide = () => {
  return (
    <section className="guide">
      <div className="guide-container container">
        <div className="guide-instructions">
          <h3>How to Develop?</h3>
          <p className="guide-text">Guides & references for developing for JioGlass & Mixed Reality applications are provided and listed for your easy execution and developing, publishing, analysing and monetising your apps.</p>
          <span><a href="#!" className="redirect-link" tabIndex={0} role="button">Know more</a></span>
        </div>
        <div className="signup">
          <a href="#!" tabIndex={0} role="button" className="signup-link">Sign up</a>
        </div>
      </div>
    </section>
  )
}

export default Guide;
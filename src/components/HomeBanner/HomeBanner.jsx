import React from 'react';

const HomeBanner = ({
  header, 
  paragraph,
  developLink,
  downloadLink
}) => {
  return (
    <div className="home-banner no-gutters">
      <h3>{header}</h3>
      <p>{paragraph}</p>
      <div className="banner-link-container">
        <span className="banner-link"><a href="#!">{developLink}</a></span>
        <span className="banner-link"><a href="#!">{downloadLink}</a></span>
      </div>
    </div>
  )
}

export default HomeBanner;
import React from 'react';
import VRGlass from '../../assets/images/vr/VRGlass.png';

const LaunchProgram = ({header, paragraph}) => {
  return (
    <section className="launch-program">
      <img src={VRGlass} alt="VR Glass" className="vr-glass-img" />
      <div className="jio-launch-program">
        <h3 className="launch-title"><span className="launch-alert"></span>{header}</h3>
        <p>{paragraph}</p>
      </div>
      <div className="program-links">
        <a href="#!" role="button" tabIndex={0} className="redirect-link">Keep me updated</a>
        <a href="#!" role="button" tabIndex={0} className="redirect-link">Submit concept</a>
      </div>
    </section>
  )
}

export default LaunchProgram;
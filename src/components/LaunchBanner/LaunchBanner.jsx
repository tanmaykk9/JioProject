import React from 'react';
import VR from '../../assets/images/vr/vr.png';
import Person from '../../assets/images/vr/person.png';

const LaunchBanner = () => {
  return (
    <section className="jio-vr">
      <div className="container text-center">
        <h3>JioGlass is everything you imagined in a Mixed Reality Innovation</h3>
        <p>We have got 25,000 sign ups who are eagerly waiting for the updates on JioGlass and its launch.</p>
        <div className="virtual-reality-img">
          <img src={VR} alt="Virtual Reality" />
        </div>
        <div className="person-container">
          <img src={Person} alt="person" className="person-vr" />
        </div>
      </div>
    </section>
  )
}

export default LaunchBanner;
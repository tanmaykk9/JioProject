import React from 'react';

const StepContainer = () => {
  return (
    <section className="get-started">
      <div className="container">
        <h3>How to get started?</h3>
        <p>Simple 4 step process</p>
        <div className="get-started-steps">
          <div className="get-started-grid">
            <div className="step-1">
              <div className="step-1-img"><span className="arrow"></span></div>
              <p>Explore & know ‘<a href="#!" className="get-started-link" tabIndex={0} role="button">How to develop?</a>’</p>
            </div>
            <div className="step-2">
              <div className="step-2-img"><span className="arrow"></span></div>
              <p><a href="#!" className="get-started-link" tabIndex={0} role="button">Submit</a> Concept Application</p>
            </div>
            <div className="step-3">
              <div className="step-3-img"><span className="arrow"></span></div>
              <p><a href="#!" className="get-started-link" tabIndex={0} role="button">Sign up</a> to access the tools & SDKs</p>
            </div>
            <div className="step-4">
              <div className="step-4-img"></div>
              <p>Publish and Monetise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepContainer;
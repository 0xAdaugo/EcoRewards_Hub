function HowWeWork() {
  return (
    <div className="ourProcesses py-5">
      <div className="container p-0">
        <h2 className="text-center mb-3">How We Work</h2>
        <div className="stepper">
          <div className="stepper__row">
            <div className="stepper--horizontal">
              <div className="stepper--horizontal__circle">
                <span className="stepper--horizontal__circle__text">
                  <i className="fa-solid fa-trash-arrow-up"></i>
                </span>
              </div>
              <div className="stepper--horizontal__details">
                <h6 className="heading__three">Register Trash</h6>
                <p className="paragraph">Using our website</p>
              </div>
            </div>
            <div className="stepper--horizontal">
              <div className="stepper--horizontal__circle">
                <span className="stepper--horizontal__circle__text">
                  <i className="fa-solid fa-building"></i>
                </span>
              </div>
              <div className="stepper--horizontal__details">
                <h6 className="heading__three">
                  Get Contacted
                  <br />
                  by Company
                </h6>
                <p className="paragraph">Await trash company contact</p>
              </div>
            </div>
            <div className="stepper--horizontal">
              <div className="stepper--horizontal__circle">
                <span className="stepper--horizontal__circle__text">
                  <i className="fa-solid fa-truck-arrow-right"></i>
                </span>
              </div>
              <div className="stepper--horizontal__details">
                <h6 className="heading__three">Trash Pickup</h6>
                <p className="paragraph">Company picks up trash</p>
              </div>
            </div>
            <div className="stepper--horizontal">
              <div className="stepper--horizontal__circle">
                <span className="stepper--horizontal__circle__text">
                  <i className="fa-solid fa-coins"></i>
                </span>
              </div>
              <div className="stepper--horizontal__details">
                <h6 className="heading__three">Get Rewarded</h6>
                <p className="paragraph">Get payment for your efforts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;

import OurProcesses from "../HowWeWork";

function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="hero container col-xxl-8 px-4 py-5">
        <div className=" row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://www.chanjadatti.com/assets/img/hero-img.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Welcome to <br />
              <span>EcoRewards Hub</span>
            </h1>
            <p className="lead">
              <strong>
                Join us in our mission to save the planet while earning rewards!
              </strong>
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn cta-btn btn-lg px-4 me-md-2">
                &nbsp;Get Started&nbsp;
                <i className="fa-solid fa-flag-checkered"></i>
              </button>
              <button
                type="button"
                className="btn sec-btn btn-lg px-4"
                aria-current="page"
                data-bs-toggle="modal"
                data-bs-target="#supportForm"
              >
                &nbsp;Contact Support&nbsp;
                <i className="fa-solid fa-circle-question"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <OurProcesses />
    </div>
  );
}

export default Home;

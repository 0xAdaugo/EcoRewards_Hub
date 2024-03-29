import { Link } from "react-router-dom";
import siteLogo from "../../assets/img/ecoRewardsHub-logo.png";

export default function Header() {
  return (
    <header
      className="nav-wrapper container-fluid fixed-top p-0"
      // className="nav-wrapper container-fluid p-0"
      style={{ backgroundColor: "#f6f6f6" }}
    >
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link
            className="navbar-brand m-0 d-flex align-items-center justify-space-between"
            to="/"
          >
            <img
              src={siteLogo}
              alt="EcoRewards Hub"
              height={40}
              className="d-inline-block align-text-middle mx-auto"
            />
            <span className="site-title d-none d-md-inline">
              &nbsp;EcoRewards Hub
            </span>
          </Link>
          <div className="d-md-none nav-btn">
            <Link
              to="/get-started"
              className="eco-btn mx-1 py-1 px-3"
              type="submit"
            >
              Get started
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link"
                  aria-current="page"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#supportForm"
                >
                  Support
                </button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about-us">
                  About us
                </a>
              </li>
            </ul>
            <div className="nav-btn d-none d-md-inline">
              <Link
                to="./get-started"
                className="eco-btn mx-1 py-1 px-3"
                type="submit"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

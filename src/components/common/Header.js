import logo from "../../assets/img/ecoRewardsHub-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand m-0 d-flex align-items-center justify-space-between"
            href="./"
          >
            <img
              src={logo}
              alt="EcoRewards Hub"
              height={40}
              className="d-inline-block align-text-middle mx-auto"
            />
            <span className="site-title">&nbsp;EcoRewards Hub</span>
          </a>
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
                <a className="nav-link" href="./">
                  About us
                </a>
              </li>
            </ul>
            <div className="nav-btn">
              <a href="./" className="eco-btn mx-1 py-1 px-3" type="submit">
                Get started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

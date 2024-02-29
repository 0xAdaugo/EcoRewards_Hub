import "./Dashboard.css";
import siteLogo from "../../../assets/img/ecoRewardsHub-logo.png";
import { Link } from "react-router-dom";
import Summary from "./Summary";

const Dashboard = () => {
  return (
    <div className="dashboard d-flex flex-column pt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light pt-4">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="./">
            <img
              src={siteLogo}
              alt="Logo"
              width="30"
              className="d-inline-block align-text-top"
            />
            &nbsp;<strong>Dashboard</strong>
          </a>
          <form className="d-flex">
            <Link className="btn btn-danger" to="/">
              Log out
            </Link>
          </form>
        </div>
      </nav>

      <div className="container-fluid flex-grow-1">
        <div className="row h-100 dashboard-area">
          <div className="d-flex align-items-start">
            <div
              className="nav flex-column nav-pills sidebar"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <i className="fa-solid fa-gauge"></i>
                <span className="d-none d-md-inline">&nbsp;Summary</span>
              </button>
              <button
                className="nav-link"
                id="v-pills-trash-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-trash"
                type="button"
                role="tab"
                aria-controls="v-pills-trash"
                aria-selected="false"
              >
                <i className="fa-solid fa-trash"></i>
                <span className="d-none d-md-inline">&nbsp;Trash Entry</span>
              </button>
              <button
                className="nav-link"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <i className="fa-solid fa-money-bill-1-wave"></i>
                <span className="d-none d-md-inline">&nbsp;Payment</span>
              </button>
              <button
                className="nav-link"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <i className="fa-solid fa-envelope"></i>
                <span className="d-none d-md-inline">&nbsp;Messages</span>
              </button>
              <button
                className="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <i className="fa-solid fa-gear"></i>
                <span className="d-none d-md-inline">&nbsp;Settings</span>
              </button>
            </div>
            <div className="tab-content" id="v-pills-tabContent main">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabIndex="0"
              >
                <Summary />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-trash"
                role="tabpanel"
                aria-labelledby="v-pills-trash-tab"
                tabIndex="0"
              >
                Trash Entry
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
                tabIndex="0"
              >
                Payment
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
                tabIndex="0"
              >
                Messages
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
                tabIndex="0"
              >
                Settings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

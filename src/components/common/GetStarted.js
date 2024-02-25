import { useEffect } from "react";
import { Link } from "react-router-dom";
// import Dashboard from "../pages/dashboard/Dashboard";
import "./GetStarted.css";

export default function GetStarted() {
  const noRef = null;

  useEffect(() => {
    const signInTab = document.getElementById("signIn-tab");
    const signUpTab = document.getElementById("signUp-tab");

    const signInLink = document.getElementById("signInLink");
    signInLink.addEventListener("click", () => {
      signInTab.click();
    });

    const signUpLink = document.getElementById("signUpLink");
    signUpLink.addEventListener("click", () => {
      signUpTab.click();
    });

    return () => {
      signInLink.removeEventListener("click", () => {
        signInTab.click();
      });
      signUpLink.removeEventListener("click", () => {
        signUpTab.click();
      });
    };
  }, []);

  // const [formData, setFormData] = useState({ email: "", password: "" });
  // const [authenticated, setAuthenticated] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (
  //     formData.email === "sundaysandra@alx.africa" &&
  //     formData.password === "12345"
  //   ) {
  //     setAuthenticated(true);
  //   } else {
  //     alert("Invalid email or password. Please try again.");
  //   }
  // };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  return (
    <>
      {/* {!authenticated && ( */}
      <div className="container-fluid p-0 d-flex justify-content-center pt-5">
        <div className="get-started pt-5">
          <ul className="nav nav-pills nav-fill pt-5" id="myTab" role="tablist">
            <li className="nav-item col" role="presentation">
              <button
                className="nav-link w-100 btn-tab active"
                id="signIn-tab"
                data-bs-toggle="tab"
                data-bs-target="#signIn-tab-pane"
                type="button"
                role="tab"
                aria-controls="signIn-tab-pane"
                aria-selected="true"
              >
                Sign in
              </button>
            </li>
            <li className="nav-item col" role="presentation">
              <button
                className="nav-link w-100 btn-tab"
                id="signUp-tab"
                data-bs-toggle="tab"
                data-bs-target="#signUp-tab-pane"
                type="button"
                role="tab"
                aria-controls="signUp-tab-pane"
                aria-selected="false"
              >
                Sign up
              </button>
            </li>
          </ul>

          <div className="tab-content" id="signIn">
            <div
              className="tab-pane fade show active"
              id="signIn-tab-pane"
              role="tabpanel"
              aria-labelledby="signIn-tab"
              tabIndex="0"
            >
              <div className="signIn-form w-100">
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="signInEmail"
                      placeholder="Email address"
                      name="email"
                      // value={formData.email}
                      // onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="signInPassword"
                      placeholder="Password"
                      name="password"
                      // value={formData.password}
                      // onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="signInRemember"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="signInRemember"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    type="submit"
                    to="/dashboard"
                    className="btn btn-primary w-100"
                  >
                    Sign in
                  </Link>
                  <div className="my-3 text-center">
                    <small className="get-started-info">
                      <i className="fa-solid fa-circle-info"></i>&nbsp;New here?{" "}
                      <a href={noRef} id="signUpLink">
                        Sign up
                      </a>
                    </small>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="signUp-tab-pane"
              role="tabpanel"
              aria-labelledby="signUp-tab"
              tabIndex="0"
            >
              <div className="signUp-form w-100">
                <form method="post">
                  <div className="mb-0 mb-md-3">
                    <div className="row">
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <input
                          type="text"
                          className="form-control"
                          id="signUpFirstName"
                          placeholder="First name"
                          name="firstName"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <input
                          type="text"
                          className="form-control"
                          id="signUpLastName"
                          placeholder="Last name"
                          name="lastName"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="signUpEmail"
                      placeholder="Email address"
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="signUpPassword"
                      placeholder="Password"
                      name="password"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="signUpPhone"
                      placeholder="Phone"
                      name="phoneNumber"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="signUpHouseAddress"
                      rows="3"
                      placeholder="House address in full (Kindly include landmarks and other helpers)."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Sign up
                  </button>
                  <div className="my-3 text-center">
                    <small className="get-started-info">
                      <i className="fa-solid fa-circle-info"></i>&nbsp;Already a
                      user?{" "}
                      <a href={noRef} id="signInLink">
                        Sign in
                      </a>
                      .
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mb-3 text-center">
            <small id="formSecure" className="form-text">
              <i className="fa-solid fa-lock"></i>&nbsp;We'll never share your
              information with anyone else.
            </small>
          </div>
        </div>
      </div>
      {/* )} */}
      {/* {authenticated && <Dashboard />} */}
    </>
  );
}

export default function SupportForm() {
  return (
    <section>
      <div
        className="modal fade"
        id="supportForm"
        tabIndex="-1"
        aria-labelledby="supportFormLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {/* <div className="modal-header mx-auto"> */}
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="supportFormLabel">
                Support
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-md-3">
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <label htmlFor="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                      <label htmlFor="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="mb-3">
                  <label htmlFor="tel" className="form-label">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="tel"
                    aria-describedby="telHelp"
                  />
                  <small id="telHelp" className="form-text">
                    We'll never share your phone number with anyone else.
                  </small>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input type="text" className="form-control" id="subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                  ></textarea>
                </div>
                <div className="d-block">
                  <button
                    type="submit"
                    className="btn btn-primary eco-submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

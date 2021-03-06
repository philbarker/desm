import React, { Component } from "react";
import TopNav from "../shared/TopNav";
import signIn from "../../services/signIn";
import ErrorMessage from "../shared/ErrorMessage";
import ErrorNotice from "../shared/ErrorNotice";

class SignIn extends Component {
  /**
   * Represents the state of this component. It contains all the fields that are
   * going to be sent to the API service in order to create a session
   */
  state = {
    email: "",
    password: "",
    errors: "",
  };

  /**
   * On a successfull response from the service, we go and update the store,
   * then redirect the user to home
   */
  handleSuccessfullAuth(user) {
    this.props.handleLogin(user);
    this.props.history.push("/");
  }

  /**
   * Send the data prepared in the form to the API service, and expect
   * the result to be shown to the user
   */
  handleSubmit = (event) => {
    const { email, password } = this.state;

    signIn(email, password)
      .then((user) => {
        user != {}
          ? this.handleSuccessfullAuth(user)
          : this.setState({
              errors: ErrorMessage("Error: We were not able to sign you in."),
            });
      })
      .catch((error) => {
        this.setState({
          errors: ErrorMessage(error),
        });
      });

    event.preventDefault();
  }

  /**
   * Update the component state on every change in the input control in the form
   */
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <TopNav />
          <div className="container-fluid container-wrapper">
            <div className="row mt-5">
              <div className="col-lg-6 mx-auto">
                { this.state.errors && <ErrorNotice message={this.state.errors} /> }

                <div className="card">
                  <div className="card-header">
                    <i className="fa fa-users"></i>
                    <span className="pl-2 subtitle">Sign In</span>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label>
                          Email
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Enter your email"
                          value={this.state.email}
                          onChange={this.handleOnChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          Password
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Enter your password"
                          value={this.state.password}
                          onChange={this.handleOnChange}
                          required
                        />
                      </div>

                      <button type="submit" className="btn btn-dark">
                        Sign In
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;

import React, { Component } from "react";
import TopNav from "../shared/TopNav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signIn from "../api/signIn";
import ErrorMessage from "../helpers/errorMessage";
import ErrorNotice from "../shared/ErrorNotice";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSuccessfullAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/");
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    signIn(email, password)
      .then((response) => {
        if (response.logged_in) {
          this.handleSuccessfullAuth(response)
        }
      })
      .catch((error) => {
        this.setState({
          errors: ErrorMessage(error)
        });
      });

    event.preventDefault();
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <TopNav/>
          <div className="container-fluid container-wrapper">
            <div className="row mt-5">
              <div className="col-lg-6 mx-auto">
                {this.state.errors && <ErrorNotice message={this.state.errors} /> }

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
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;

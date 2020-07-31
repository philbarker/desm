import React, { Component } from 'react';
import DashboardContainer from './DashboardContainer';

export default class MainDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DashboardContainer
        loggedIn={this.props.loggedIn}
        handleLogout={this.props.handleLogout}
      >
        <div className="mt-5">
          <h1>I'm a genius!</h1>
        </div>
      </DashboardContainer>
    );
  }
}
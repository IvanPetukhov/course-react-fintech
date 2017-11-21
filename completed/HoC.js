import React, { Component } from 'react';
import LoginForm from 'form';

const loginChecker = Wrapper => {
  class LoginChecker extends Component {
    render() {
      return this.props.isAuth ?
        <Wrapper {...this.props}/> :
        <LoginForm />;
    }
  }

  return LoginChecker;
};

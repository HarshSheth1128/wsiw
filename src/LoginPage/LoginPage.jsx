import React, { Component } from 'react';
import './LoginPage.scss';
import Button from '../common/Button';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      fullName: '',
      email: '',
      password: '',
    };
  }

  handleChange = (property, value) => {
    this.setState({ [property]: value });
  };

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginSplash">
          <div className="LoginContentWrapper">
            <h1 className="LoginText">
              {this.state.isLogin ? 'Log In' : 'Sign Up'}
            </h1>
            <form>
              {!this.state.isLogin && (
                <>
                  <label className="FormLabel">Full Name</label>
                  <input
                    value={this.state.fullName}
                    onChange={e =>
                      this.handleChange('fullName', e.target.value)
                    }
                    className="InputForm"
                    type="text"
                  />
                </>
              )}
              <label className="FormLabel">Email Address</label>
              <input
                value={this.state.email}
                onChange={e => this.handleChange('email', e.target.value)}
                className="InputForm"
                type="text"
              />
              <label className="FormLabel">Password</label>
              <input
                value={this.state.password}
                onChange={e => this.handleChange('password', e.target.value)}
                className="InputForm"
                type="password"
              />
            </form>
            <Button
              variant="Login"
              onClick={() => {
                console.log('hi');
                this.props.history.push('/');
              }}
            >
              <span className="LoginButtonText">
                {this.state.isLogin ? 'Log In' : 'Sign Up'}
              </span>
            </Button>
            <div className="SignupWrapper">
              <h3 className="AccountText">
                {this.state.isLogin
                  ? "Don't have an account?"
                  : 'Have an account?'}
              </h3>
              <h3
                onClick={() =>
                  this.setState(prevState => ({
                    isLogin: !prevState.isLogin,
                  }))
                }
                className="SignupText"
              >
                {this.state.isLogin ? 'Sign Up' : 'Login'}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

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
      falseLogin: false,
    };
  }

  handleChange = (property, value) => {
    this.setState({ [property]: value });
  };

  authenticate = () => {
    // I know this is not how auth works, we would encrypt this data
    // and send it off to an api which would use the secret on the server and
    // send back and authenticated JWT
    if (
      this.state.email === 'test@test.com' &&
      this.state.password === 'password'
    ) {
      this.props.history.push('/');
    } else {
      this.setState({ falseLogin: true });
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginSplash">
          <div className="LoginContentWrapper">
            <h1 className="LoginText">
              {this.state.isLogin ? 'Log In' : 'Sign Up'}
            </h1>
            <form onSubmit={this.authenticate}>
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
              <Button variant="Login" onClick={this.authenticate}>
                <span className="LoginButtonText">
                  {this.state.isLogin ? 'Log In' : 'Sign Up'}
                </span>
              </Button>
            </form>
            {this.state.falseLogin && (
              <h1 className="InvalidEmailText"> Invalid email and password </h1>
            )}

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
        <h1 className="InvalidEmailText">
          <span style={{ color: 'white' }}>Hint:</span> use test@test.com and
          password to login
        </h1>
      </div>
    );
  }
}

export default LoginPage;

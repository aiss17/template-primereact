import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import marine from './assets/images/marine.png'
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginVisible: true,
      resetPasswordVisible: false
    }
  }

  checkVisible = () => {
    if(this.state.loginVisible) {
      this.setState({
        loginVisible: false,
        resetPasswordVisible: true
      })
    } else {
      this.setState({
        loginVisible: true,
        resetPasswordVisible: false
      })
    }
  }    
 
  render() {
    return (
      <div className="maincontainer">
        <div className="container-fluid">
          <div className="row no-gutter">
            
            <div className="col-md-6 bg-light">
              <div className="login d-flex align-items-center py-5">
                  
                <div className="container">
                  <div className="row">
                    <div style={{padding: 0, textAlign: 'center', marginBottom: 20}}>
                      <img src={marine} width={150} height={150} />
                    </div>
                    {this.state.loginVisible && (
                      <div className="col-lg-10 col-xl-7 mx-auto">
                        <h2 className="text-center display-4">Welcome!</h2>
                        <p className="text-center text-muted mb-4">For those who are already registered, please login</p>
                        <form>
                            <div className="mb-3">
                              <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control border-0 shadow-sm px-4" />
                            </div>
                            <div className="mb-3">
                              <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control border-0 shadow-sm px-4" />
                            </div>
                            <div className="text-left form-check" style={{marginBottom: 20, marginTop: 20}}>
                              <input id="customCheck1" type="checkbox" className="form-check-input" />
                              <label htmlFor="customCheck1" className="form-check-label">Remember password</label>
                            </div>
                            <div className="d-grid gap-2 mt-2">
                              <Link to='/dashboard' className="btn btn-success btn-block text-uppercase mb-2 shadow-sm">Sign in</Link>
                            </div>
                            
                            <div className="text-center d-flex justify-content-center mt-4">
                              <button onClick={this.checkVisible} id="button">
                                <u>Forgot <span style={{color: 'blue'}}>password</span>?</u>
                              </button>
                            </div>
                        </form>
                      </div>
                    )}

                    {this.state.resetPasswordVisible && (
                      <div className="text-center col-lg-10 col-xl-7 mx-auto">
                        <h2 className="display-4">Reset Password</h2>
                        <p className="text-muted mb-4">Enter the email address associated with your account and we'll send you a link to reset your password</p>
                        <form>
                            <div className="mb-3">
                              <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control border-0 shadow-sm px-4" />
                            </div>
                            <div className="d-grid gap-2 mt-2">
                              <button className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm">Reset Password</button>
                            </div>
                            
                            <div className="text-center d-flex justify-content-center mt-4">
                              <button onClick={this.checkVisible} id="button">
                                <u>Try to <span style={{color: 'blue'}}>Login</span></u>
                              </button>
                            </div>
                        </form>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
               
            <div className="col-md-6 d-none d-md-flex bg-image"></div>
          </div>
        </div>
      </div>
      
    )
  };
}
export default Login;
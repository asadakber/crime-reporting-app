import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Signin, getUser } from '../store/actions/auth.action';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.props.getUser()
    this.login = this.login.bind(this)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
  }

  handleOnChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleOnChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  login = () => {
    if(this.state.email == "" && this.state.password == "") {
      alert("Please FillOut AllField")
    }

    else {
      let obj = {
        email: this.state.email,
        password: this.state.password
      }
      
      this.props.Signin(obj)
      
      alert("SuccessFull Login");
      
    }

    this.setState({
      email: '',
      password: ''
    })
  }
    render() {
        return(
            <div>
                <nav style={{backgroundColor: '#563d7c', color: 'white'}} class="navbar">
  <a class="navbar-brand">Crime Reporting System</a>
  <form class="form-inline">
    <button style={{color: '#faca7f', border: '1px solid #faca7f'}} class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link style={{color: '#faca7f', textDecoration: 'none'}} to='/register'>signup</Link></button>
  </form>
</nav><br /><br />
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-4">
        <div class="card">
  <div class="card-header">
   <h4 style={{color: '#563d7c'}}>Signin</h4>
  </div>
  <div class="card-body">
  <form>
  <div class="form-group">
    <label style={{color: '#563d7c'}} for="exampleInputEmail1">Email address</label>
    <input value={this.state.email} onChange={this.handleOnChangeEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div class="form-group">
    <label style={{color: '#563d7c'}} for="exampleInputPassword1">Password</label>
    <input value={this.state.password} onChange={this.handleOnChangePassword} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
 
</form>
<p>create an account? <strong><Link style={{color: '#563d7c', textDecoration: 'none'}} to='/register'>Register for Free</Link></strong></p>
<button onClick={this.login} style={{backgroundColor: '#563d7c', color: 'white'}} type="submit" class="btn">Submit</button>
  </div>
</div>
        </div>
    </div>
</div>
          </div>
        )
    }
}

const mapToStateProp = (state) => {
  return({
    root: state.root
  })
}

const mapDispatchToProp = (dispatch) => {
  return({
    Signin: (obj) => {
      dispatch(Signin(obj))
    },
    getUser: () => {
      dispatch(getUser())
    }
  })
}

export default connect(mapToStateProp, mapDispatchToProp) (Login)
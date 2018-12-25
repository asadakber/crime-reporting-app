import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Signup } from '../store/actions/auth.action';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          email: '',
          password: '',
          type: '',
        }
    
        this.Register = this.Register.bind(this)
        this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
        this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
        this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this)
        this.handleOnChangeType = this.handleOnChangeType.bind(this)
      }

      handleOnChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }

      handleOnChangeType(e) {
        this.setState({
          type: e.target.value
        })
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
    
      Register = () => {
        if(this.state.username == "" && this.state.email == "" && this.state.password == "" && this.state.type == "") {
          alert("Please FillOut AllField")
        }

        else {
          let user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
          }
          
          this.props.Signup(user)
          alert("SuccessFull Register")
        }
      
    
        this.setState({
          username: '',  
          email: '',
          password: '',
          type: ''
        })
      }
    
    render() {
        return(
            <div>
            <nav style={{backgroundColor: '#563d7c', color: 'white'}} class="navbar">
<a class="navbar-brand">Crime Reporting System</a>
<form class="form-inline">
<button style={{color: '#faca7f', border: '1px solid #faca7f'}} class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link style={{color: '#faca7f', textDecoration: 'none'}} to='/'>signin</Link></button>
</form>
</nav><br /><br />
<div className="container">
<div className="row justify-content-center">
    <div className="col-md-4">
    <div class="card">
<div class="card-header">
<h4  style={{color: '#563d7c'}}>Signup</h4>
</div>
<div class="card-body">
<form>
<div class="form-group">
<label  style={{color: '#563d7c'}} for="exampleInputEmail1">Username</label>
<input value={this.state.username} onChange={this.handleOnChangeUsername} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
</div>

<div class="form-group">
<label  style={{color: '#563d7c'}} for="exampleInputEmail1">Email address</label>
<input value={this.state.email} onChange={this.handleOnChangeEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
</div>
<div class="form-group">
<label  style={{color: '#563d7c'}} for="exampleInputPassword1">Password</label>
<input value={this.state.password} onChange={this.handleOnChangePassword} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
</div>
<div class="form-check">
  <input value={this.state.type} onChange={this.handleOnChangeType} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="user"  />
  <label class="form-check-label" for="exampleRadios1">
      User
  </label>
</div>
</form>
<p>back to sigin? <strong><Link style={{color: '#563d7c', textDecoration: 'none'}} to='/'>Already Login</Link></strong></p>
<button onClick={this.Register}  style={{backgroundColor: '#563d7c', color: 'white'}} type="submit" class="btn">Submit</button>
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
    Signup: (user) => {
      dispatch(Signup(user))
    }
  })
}

export default connect(mapToStateProp, mapDispatchToProp) (Register)
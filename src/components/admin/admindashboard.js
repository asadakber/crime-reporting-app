import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Signout } from '../../store/actions/auth.action';
import { Link } from 'react-router-dom';

class AdminDashboard extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout = () => {
        this.props.Signout()
    }
    render() {
        return(
            <div>
            <nav style={{backgroundColor: '#563d7c', color: 'white'}} class="navbar">
<a class="navbar-brand">Admin Dashboard</a>
<div class="form-inline">
<button style={{color: '#faca7f', border: '0px solid #faca7f'}} class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to='/viewreport'>View My Report</Link></button>
<button  onClick={this.logout} style={{color: '#faca7f', border: '0px solid #faca7f'}} class="btn btn-outline-success my-2 my-sm-0" type="submit">signout</button>
</div>
</nav>
</div>

        )
    }
}

const mapStateToProp = (state) => {
    return({
        root: state.root
    })
}

const mapDispatchToProp = (dispatch) => {
    return({
        Signout: () => {
            dispatch(Signout())
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp) (AdminDashboard)
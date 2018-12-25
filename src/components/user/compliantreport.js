import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddCompliant } from '../../store/actions/add.action';

class ComplaintReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      city: ''
    }
    this.Compliant = this.Compliant.bind(this)
    this.handleChangeOnTitle = this.handleChangeOnTitle.bind(this)
    this.handleChangeOnDescription = this.handleChangeOnDescription.bind(this)
    this.handleChangeOnCity = this.handleChangeOnCity.bind(this)
  }

  Compliant = () => {
    if(this.state.title == "" && this.state.description == "" && this.state.city) {
      alert('Please FillOut All Field')
    }

    else {
      let compliant = {
        title: this.state.title,
        description: this.state.description,
        city: this.state.city
      }
  
      this.props.AddCompliant(compliant)
    }

    this.setState({
      title: '',
      description: '',
      city: ''
    })
   
  }

  handleChangeOnTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleChangeOnDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  handleChangeOnCity(e) {
    this.setState({
      city: e.target.value
    })
  }
    render() {
        return(
            <div>
                    <nav style={{backgroundColor: '#563d7c', color: 'white'}} class="navbar">
<a class="navbar-brand">Complaint Report</a>
<div class="form-inline">
<button onClick={this.logout} style={{color: '#faca7f', border: '0px solid #faca7f'}} class="btn btn-outline-success my-2 my-sm-0" type="submit">signout</button>
</div>
</nav><br /><br />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                    <div class="card">
  <div class="card-header">
    Complaint report
  </div>
  <div class="card-body">
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input value={this.state.title} onChange={this.handleChangeOnTitle} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="title" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input value={this.state.description} onChange={this.handleChangeOnDescription}  type="text" class="form-control" id="exampleInputPassword1" placeholder="description" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">City</label>
    <select  value={this.state.city} onChange={this.handleChangeOnCity} class="form-control" id="exampleFormControlSelect1">
      <option>Anchorage</option>
      <option>Boston</option>
      <option>chicago</option>
      <option>huntsville</option>
      <option>livingston</option>
      <option>Miami</option>
      <option>oxford</option>
      <option>pensacola</option>
      <option>phoenix</option>
      <option>portland</option>
    </select>
  </div>

</form>
<button onClick={this.Compliant} type="submit" class="btn btn-primary">Submit</button>
  </div>
</div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
  return({
    add: state.add
  })
}

const mapDispatchToProp = (dispatch) => {
  return({
    AddCompliant: (compliant) => {
      dispatch(AddCompliant(compliant))
    }
  })
}

export default connect(mapStateToProp, mapDispatchToProp) (ComplaintReport)
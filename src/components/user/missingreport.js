import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddMissingPerson } from '../../store/actions/add.action';

class MissingReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: '',
      address: '',
      age: '',
      identification: '',
      date: '',
      city: ''
    }
    this.MissingPerson = this.MissingPerson.bind(this)
    this.handleChangeOnFullname = this.handleChangeOnFullname.bind(this)
    this.handleChangeOnAddress = this.handleChangeOnAddress.bind(this)
    this.handleChangeOnAge = this.handleChangeOnAge.bind(this)
    this.handleChangeOnIdentification = this.handleChangeOnIdentification.bind(this)
    this.handleChangeOnDate = this.handleChangeOnDate.bind(this)
    this.handleChangeCity = this.handleChangeCity.bind(this)
  }

  MissingPerson = () => {
    if(this.state.fullname == "" && this.state.address == "" && this.state.age == "" && this.state.identification == ""
    && this.state.date == "" && this.state.city == ""
  ) {
      alert('Please FillOut All Field')
    }

    else {
      let missing = {
        fullname: this.state.fullname,
        address: this.state.address,
        age: this.state.age,
        identification: this.state.identification,
        date: this.state.date,
        city: this.state.city
      }
  
      this.props.AddMissingPerson(missing)
    }

    this.setState({
      fullname: '',
      address: '',
      age: '',
      identification: '',
      date: '',
      city: ''
    })
   
  }

  handleChangeOnFullname(e) {
    this.setState({
      fullname: e.target.value
    })
  }

  handleChangeOnAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  handleChangeOnAge(e) {
    this.setState({
      age: e.target.value
    })
  }

  handleChangeOnIdentification(e) {
    this.setState({
      identification: e.target.value
    })
  }

  handleChangeOnDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  handleChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }
    render() {
        return(
            <div>
                    <nav style={{backgroundColor: '#563d7c', color: 'white'}} class="navbar">
<a class="navbar-brand">Missing Report</a>
<div class="form-inline">
<button onClick={this.logout} style={{color: '#faca7f', border: '0px solid #faca7f'}} class="btn btn-outline-success my-2 my-sm-0" type="submit">signout</button>
</div>
</nav><br /><br />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                    <div class="card">
  <div class="card-header">
    Missing report
  </div>
  <div class="card-body">
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">FullName</label>
    <input value={this.state.fullname} onChange={this.handleChangeOnFullname} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="FullName" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input value={this.state.address} onChange={this.handleChangeOnAddress} type="text" class="form-control" id="exampleInputPassword1" placeholder="FullName" />
  </div>

   <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input value={this.state.age} onChange={this.handleChangeOnAge} type="number" class="form-control" id="exampleInputPassword1" placeholder="Age" />
  </div>

   <div class="form-group">
    <label for="exampleInputPassword1">Identification</label>
    <input value={this.state.identification} onChange={this.handleChangeOnIdentification} type="text" class="form-control" id="exampleInputPassword1" placeholder="Identification" />
  </div>

  
  <div class="form-group">
    <label for="exampleInputPassword1">Date</label>
    <input value={this.state.date} onChange={this.handleChangeOnDate} type="date" class="form-control" id="exampleInputPassword1" placeholder="Date" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">City</label>
    <select value={this.state.city} onChange={this.handleChangeCity} class="form-control" id="exampleFormControlSelect1">
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
<button onClick={this.MissingPerson} type="submit" class="btn btn-primary">Submit</button>
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
    AddMissingPerson: (missing) => {
      dispatch(AddMissingPerson(missing))
    }
  })
}

export default connect(mapStateToProp, mapDispatchToProp) (MissingReport)
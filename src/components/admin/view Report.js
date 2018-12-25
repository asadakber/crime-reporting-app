import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetCrime, GetComplaint, GetMissingPerson, deleteCrime, deleteComplaint, deletemissing } from '../../store/actions/add.action';

class ViewReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            address: '',
            age: '',
            date: '',
            identification: '',
            title: '',
            description: '',
            city: '',
            crime: [],
            compliant: [],
            missingperson: []
        }

        this.props.GetCrime()
        this.props.GetComplaint()
        this.props.GetMissingPerson()
    }

    deletecrime(index) {
        this.props.deleteCrime(this.props.crime[index].id, index)
    }

    deletecompliant(index) {
        this.props.deleteComplaint(this.props.compliant[index].id, index)
    }

    deletemissing(index) {
        this.props.deletemissing(this.props.missingperson[index].id, index)
    }


    render() {
        return(
            <div>
            <nav style={{backgroundColor: '#563d7c', color: 'white'}} class="navbar">
<a class="navbar-brand">View My Report</a>
<div class="form-inline">
<button style={{color: '#faca7f', border: '1px solid #faca7f'}} class="btn btn-outline-success my-2 my-sm-0" type="submit">Back</button>
</div>
</nav>
<div className="container-fluid">
    <div className="row">
        <div className="col-md-12"><br /><br />
        <h3>CRIME</h3>
        <ul class="">
        {
            this.props.crime.map((value, index) => {
                return(
                <div key={index}>
                    <li class="list-group-item"><strong>Sno: </strong>{index + 1}</li>
                    <li class="list-group-item"><strong>Title: </strong>{value.title}</li>
                    <li class="list-group-item"><strong>Description: </strong>{value.description}</li>
                    <li class="list-group-item"><strong>City: </strong>{value.city}</li>
                    <li onClick={this.deletecrime.bind(this, index)} class="list-group-item"><button class="btn btn-primary my-2 my-sm-0" type="submit">Delete</button></li>
                    <li><button style={{float: 'right'}} class="btn btn-primary my-2 my-sm-0" type="submit"><Link to='/crimestatus'>Update Status</Link></button></li>
                </div>
                )
            })
        }
  
  
</ul>

<hr />
     <h3>COMPLIANT</h3>
        <ul class="">
        {
            this.props.compliant.map((value, index) =>{
                return(
                    <div key={index}>
                    <li class="list-group-item"><strong>Sno: </strong>{index + 1}</li>
                    <li class="list-group-item"><strong>Title: </strong>{value.title}</li>
                    <li class="list-group-item"><strong>Description: </strong>{value.description}</li>
                    <li class="list-group-item"><strong>City: </strong>{value.city}</li>
                    <li onClick={this.deletecompliant.bind(this, index)} class="list-group-item"><button class="btn btn-primary my-2 my-sm-0" type="submit">Delete</button></li>
                    <li><button style={{float: 'right'}} class="btn btn-primary my-2 my-sm-0" type="submit"><Link to='/complaintStatus'>Update Status</Link></button></li>
                </div>
                )
            })
        }
  
</ul> 
<hr />
     <h3>MISSING PERSON</h3>
        <ul class="">
        {
            this.props.missingperson.map((value, index) => {
                return(
                    <div key={index}>
                    <li class="list-group-item"><strong>Sno: </strong>{index + 1}</li>
                    <li class="list-group-item"><strong>Fullname: </strong>{value.fullname}</li>
                    <li class="list-group-item"><strong>Address: </strong>{value.address}</li>
                    <li class="list-group-item"><strong>Age: </strong>{value.age}</li>
                    <li class="list-group-item"><strong>Date: </strong>{value.date}</li>
                    <li class="list-group-item"><strong>Identification: </strong>{value.identification}</li>
                    <li class="list-group-item"><strong>City: </strong>{value.city}</li>
                    <li onClick={this.deletemissing.bind(this, index)} class="list-group-item"><button class="btn btn-primary my-2 my-sm-0" type="submit">Delete</button></li>
                    <li><button style={{float: 'right'}} class="btn btn-primary my-2 my-sm-0" type="submit"><Link to='/missingstatus'>Update Status</Link></button></li>
                </div>
                )
            })
        }
 
 
</ul> 
        </div>

        
    </div>
    </div>   
 </div>
        )
    }   
}

const mapStateToProp = (state) => {
    return({
        crime: state.add.crime,
        compliant: state.add.compliant,
        missingperson: state.add.missingperson
    })
}

const mapDispatchToProp = (dispatch) => {
    return({
        GetCrime: () => {
            dispatch(GetCrime())
        },
        GetComplaint: () => {
            dispatch(GetComplaint())
        },

        GetMissingPerson: () => {
            dispatch(GetMissingPerson())
        },

        deleteCrime: (crimekey, index) => {
            dispatch(deleteCrime(crimekey, index))
        },

        deleteComplaint: (compliantkey, index) => {
            dispatch(deleteComplaint(compliantkey, index))
        },

        deletemissing: (missingkey, index) => {
            dispatch(deletemissing(missingkey, index))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp) (ViewReport)

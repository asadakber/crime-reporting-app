import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetCrime, GetComplaint, GetMissingPerson } from '../../store/actions/add.action';
import { GetSendCrime, GetSendComplaint, GetSendMissing } from '../../store/actions/feedback.action';

class ViewMyReport extends Component {
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
            missingperson: [],
            message: '',
            crimefeedback: [],
            compliantfeedback: [],
            missingfeedback: []
        }

        this.props.GetCrime()
        this.props.GetComplaint()
        this.props.GetMissingPerson()
        this.props.GetSendCrime();
        this.props.GetSendComplaint();
        this.props.GetSendMissing();
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
                        <h1>Status</h1>
  <ul>
      {
          this.props.crimefeedback.map((value, index) => {
              return(
                <div key={index}>
                <li class="list-group-item">{value.message}</li>
                </div>
              )
          })
      }
  </ul>
                    </div>
                )
            })
        }
  
       </ul>
  
  


<hr />
     <h3>COMPLIANT</h3>
     
        <ul class="">
        {
            this.props.compliant.map((value, index) => {
                return(
                    <div key={index}>
                        <li class="list-group-item"><strong>Sno: </strong>{index + 1}</li>
                        <li class="list-group-item"><strong>Title: </strong>{value.title}</li>
                        <li class="list-group-item"><strong>Description: </strong>{value.description}</li>
                        <li class="list-group-item"><strong>City: </strong>{value.city}{value.city}</li>
                        <h1>Status</h1>
  <ul>
  {
          this.props.compliantfeedback.map((value, index) => {
              return(
                <div key={index}>
                <li class="list-group-item">{value.message}</li>
                </div>
              )
          })
      }
  </ul>
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
                        <h1>Status</h1>
                        <ul>
  {
          this.props.missingfeedback.map((value, index) => {
              return(
                <div key={index}>
                <li class="list-group-item">{value.message}</li>
                </div>
              )
          })
      }
  </ul>
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
        missingperson: state.add.missingperson,
        crimefeedback: state.feed.crimefeedback,
        compliantfeedback: state.feed.compliantfeedback,
        missingfeedback: state.feed.missingfeedback
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

        GetSendCrime: () => {
            dispatch(GetSendCrime())
        },

        GetSendComplaint: () => {
            dispatch(GetSendComplaint())
        },

        GetSendMissing: () => {
            dispatch(GetSendMissing())
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp) (ViewMyReport)

import React, { Component } from 'react';
import { SendComplaint, GetSendComplaint } from '../../store/actions/feedback.action';
import { connect } from 'react-redux';

class ComplaintStatus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            compliantfeedback: []
        }
        this.sendcompliant = this.sendcompliant.bind(this)
        this.handleOnChangeSend = this.handleOnChangeSend.bind(this)
        this.props.GetSendComplaint();
    }

    handleOnChangeSend(e) {
        this.setState({
            message: e.target.value
        })
    }

    sendcompliant = () => {
        let sendcomplaint = {
            message: this.state.message
        }
        this.props.SendComplaint(sendcomplaint)

        this.setState({
            message: '',
        })
    }
    render() {
        return(
            <div>
            <nav style={{backgroundColor: '#563d7c', color: 'white'}} class="navbar">
            <a class="navbar-brand">Feed Back</a>
            <div class="form-inline">
            <button onClick={this.logout} style={{color: '#faca7f', border: '0px solid #faca7f'}} class="btn btn-outline-success my-2 my-sm-0" type="submit">back</button>
            </div>
            </nav><br /><br />
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                            <div class="card">
  <div class="card-header">
     Feed Back
  </div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
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
  <div style={{marginTop: 320}}>
  <form>
  <div class="form-group">
    <input value={this.state.message} onChange={this.handleOnChangeSend} style={{border: 'none',borderBottom: '1px solid lightgrey'}} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="message" />
  </div>
  
  </form>
  <button  onClick={this.sendcompliant} style={{float: 'right'}} type="submit" class="btn btn-primary">Send</button>
  </div>
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
        feed: state.feed,
        compliantfeedback: state.feed.compliantfeedback
    })
}

const mapDispatchToProp = (dispatch) => {
    return({
        SendComplaint: (sendcomplaint) => {
            dispatch(SendComplaint(sendcomplaint))
        },

        GetSendComplaint: () => {
            dispatch(GetSendComplaint())
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp) (ComplaintStatus);
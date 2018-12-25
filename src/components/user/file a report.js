import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FileAReport extends Component {
 
    render() {
        return(
            <div>
            <nav style={{backgroundColor: '#563d7c', color: 'white'}} class="navbar">
<a class="navbar-brand">File A Report</a>
<div class="form-inline">
<button style={{color: '#faca7f', border: '1px solid #faca7f'}} class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link style={{color: '#faca7f', textDecoration: 'none'}} to='/dashboard'>Back</Link></button>
</div>
</nav><br /><br />
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-5">
            <button type="button" class="btn btn-primary btn-lg btn-block"><Link to='/crime'>CRIME</Link></button>
<button type="button" class="btn btn-secondary btn-lg btn-block"><Link to='/complaint'>COMPLIANT</Link></button>
<button type="button" class="btn btn-secondary btn-lg btn-block"><Link to='/missing'>MISSING PERSON</Link></button>
            </div>
        </div>
    </div>
</div>
        )
    }  
}

export default FileAReport
import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Login from '../components/signinform';
import Register from '../components/siginupform';
import history from '../routers/history';
import Dashboard from '../components/dashboard';
import AdminDashboard from '../components/admin/admindashboard';
import FileAReport from '../components/user/file a report';
import ViewMyReport from '../components/user/view my report';
import ViewReport from '../components/admin/view Report';
import CrimeReport from '../components/user/crimereport';
import CompliantReport from '../components/user/compliantreport';
import MissingReport from '../components/user/missingreport';
import CrimeStatus from '../components/admin/crime status';
import MissingStatus from '../components/admin/missing status';
import  ComplaintStatus  from "../components/admin/complaint status";

class Routers extends Component {
    render() {
        return(
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/admindashboard" component={AdminDashboard} />
                    <Route path="/fileAreport" component={FileAReport} />
                    <Route path="/viewMyreport" component={ViewMyReport} />
                    <Route path="/viewreport" component={ViewReport} />
                    <Route path="/crime" component={CrimeReport} />
                    <Route path="/complaint" component={CompliantReport} />
                    <Route path="/missing" component={MissingReport} />
                    <Route path="/crimestatus" component={CrimeStatus} />
                    <Route path="/missingstatus" component={MissingStatus} />
                    <Route path="/complaintStatus" component={ComplaintStatus} />
                </div>
            </Router>
        )
    }
}

export default Routers
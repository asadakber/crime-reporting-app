import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/signinform';
import Register from './components/siginupform';
import Routers from './routers/route';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/dashboard';
import AdminDashboard from './components/admin/admindashboard';
import ViewMyReport from './components/user/view my report';
import FileAReport from './components/user/file a report';
import CrimeReport from './components/user/crimereport';
import ViewReport from './components/admin/view Report';
import CrimeStatus from './components/admin/crime status';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Routers />
      </Provider> 
      </div>
    );
  }
}

export default App;

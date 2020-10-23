import React from 'react';
import { BrowserRouter, Route,browserHistory, Router } from 'react-router';
import './App.css';
import Emailverifiaction from './Emailverifiaction';
import logo from './logo-social.png'
import PersonalDetails from './PersonalDetails';



class App extends React.Component {
  state = {
    Register: false
  }

  render() {
    console.log(this.state.Register)
    return (
      <div className="App">

        {
          this.state.Register ? <PersonalDetails></PersonalDetails> : <div className="login">
            <img src={logo} alt="LOGO" />
            <button onClick={() => this.setState({ Register: true })} >Register</button>
          </div>

        }
   <Router history = {browserHistory}>
         <Route path = "PersonalDetails" component = {PersonalDetails} />
         <Route path = "Companydetails" component = {Emailverifiaction} />
   </Router>
      </div>
      

    );

  }
}


export default App;

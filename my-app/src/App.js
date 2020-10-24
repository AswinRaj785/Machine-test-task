import React from 'react';
import './App.css';
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

      </div>


    );

  }
}


export default App;

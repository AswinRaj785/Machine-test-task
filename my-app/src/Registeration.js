import React from 'react'

class Registeration extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (
            <div className="login">
                <img src={logo} alt="LOGO" />
                <button onClick={this.continue} >Register</button>
            </div>
        )
    }
}


export default Registeration

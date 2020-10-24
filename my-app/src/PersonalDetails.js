import { colors } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import React from 'react'
import { Redirect } from 'react-router-dom'
import Companydetails from './Companydetails'
import './PersonalDetails.css'



class PersonalDetails extends React.Component {
    state = {
        Fullname: "",
        Gender: "",
        Country: "",
        State: "",
        Phone: "",
        CompanyDetails: false
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    VerifyPersonaldetail = () => {
        console.log(this.state)
        const letters = /^[A-Za-z]+$/;
        const phoneno = /^\d{10}$/;
        if (this.state.Fullname.match(letters)) {
            console.log("name validate successfull");
        } else {
            alert("please correct name");
            return false;
        }
        if (this.state.Gender == "") {
            alert("please select the gender");
            return false;
        }
        if (this.state.Country.match(letters)) {
            console.log("successfully validate the Country")
        } else {
            alert("please enter the country name");
            return false;

        }
        if (this.state.State.match(letters)) {
            console.log("successfully validate the State")
        } else {
            alert("please enter the State name");
            return false;

        }
        // if (this.state.Phone.match(phoneno)) {
        //     console.log("Phone no validation successfull")
        // } else {
        //     alert("please enter proper mobile")
        //     return false;
        // }

        localStorage.setItem("Fullname",this.state.Fullname)
        localStorage.setItem("Gender",this.state.Gender)
        localStorage.setItem("Country",this.state.Country)
        localStorage.setItem("State",this.state.State)
        localStorage.setItem("Phone",this.state.Phone)

        this.setState({ CompanyDetails: true })
    }

    render() {
        return (
            <React-fragement>

                {
                    this.state.CompanyDetails ? <Companydetails></Companydetails> :

                        <div className="PersonalDetails">
                            <div className="header">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-4" id="personal">Personal Details</div>
                                        <div className="col-sm-4">Company Details</div>
                                        <div className="col-sm-4">Email Verification</div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            </br><br></br><br></br>
                            <div className="body">
                                <div className="container">
                                    <h1>Add your Personal Details</h1>
                                    <form>
                                        <div className="form-group">
                                            <label >Full Name:</label>
                                            <input type="text" className="form-control" placeholder="Enter username" name="Fullname" value={this.state.Fullname} onChange={this.handleChange} required></input>
                                        </div><br></br><br></br>
                                        <div className="form-check-inline">
                                            <label>Gender :</label>&emsp;&emsp;
                                <div className="btn-group">
                                                <button type="button" className="radio-btn" onClick={() => this.setState({ Gender: "MALE" })}>MALE</button>
                                                <button type="button" className="radio-btn" onClick={() => this.setState({ Gender: "FEMALE" })}>FEMALE</button>
                                                <button type="button" className="radio-btn" onClick={() => this.setState({ Gender: "OTHER" })}>OTHERS</button>
                                            </div>
                                            <small>select the gender by clicking on the button</small>
                                        </div><br></br><br></br><br></br>
                                        <div className="form-group">
                                            <label >Country:</label>
                                            <input type="text" placeholder="Enter the Country" className="form-control" name="Country" value={this.state.Country} onChange={this.handleChange} required></input>
                                        </div><br></br><br></br><br></br>
                                        <div className="form-group">
                                            <label>State:</label>
                                            <input type="text" placeholder="Enter the State" className="form-control" name="State" value={this.state.State} onChange={this.handleChange} required></input>
                                        </div><br></br><br></br><br></br>
                                        <div className="form-group">
                                            <label>Phone Number:</label>
                                            <input type="tel" placeholder="Enter the Mobile no" className="form-control" name="Phone" value={this.state.Phone} onChange={this.handleChange} required></input>
                                        </div><br></br><br></br><br></br>

                                        <button id="next" onClick={this.VerifyPersonaldetail}>Next</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                }
            </React-fragement>
        )
    }
}

export default PersonalDetails

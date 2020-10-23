import React from 'react'
import './Companydetails.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import ImageUploader from 'react-images-upload';
import Emailverifiaction from './Emailverifiaction';
import PersonalDetails from './PersonalDetails';
import { Redirect } from 'react-router-dom'


class Companydetails extends React.Component {
    state = {
        pictures: [],
        uploadSuccessfull: false,
        Companyname:"",
        Emailid:"",
        Designation:"",
        YOE:0,
        terms:false,
        verifyemail:false,
        backtopersonaldetails:false
    }

    onDrop = (picture) => {
        console.log(picture)
        this.setState({
            pictures: URL.createObjectURL(picture[0]),
            uploadSuccessfull: true

        });
        console.log(this.state.pictures)
    }

    handleChange =(event) =>{
        
        this.setState({ [event.target.name]: event.target.value });
    }
    toggleCheckbox = () => {
        this.setState({terms:!this.state.terms})
      }
      
      validateCompanyinfo = () =>{
        console.log(this.state)
        const letters = /^[A-Za-z]+$/;
        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const jobtitle = /^[-a-z0-9,\/()&:. ]*[a-z][-a-z0-9,\/()&:. ]*$/i;
        if (this.state.Companyname == "") {
            alert("please enter your company name");
            return false;
        }
        if(this.state.Emailid.match(mailformat)){
            console.log("Valid email address");
        }else{
            alert("You have entered an invalid email address");
        }
        if (this.state.Designation.match(jobtitle)) {
            console.log("name validate successfull");
        } else {
            alert("please enter proper job title");
        }
        if(this.state.terms == false)
        {
            alert('You must agree to the terms first.');
            return false;
        }

        
      }

      Back = () =>{

         this.props.history.push('/PersonalDetails');

      }

    render() {

        return (
            <div className="Companydetails">
                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-4">{<CheckCircleIcon style={{ color: green[500] }} ></CheckCircleIcon>} Personal Details</div>
                            <div className="col-sm-4" id="Company">Company Details</div>
                            <div className="col-sm-4">Email Verification</div>
                        </div>
                    </div>

                </div>
                <div className="body">
                    <div className="container">

                        {
                            this.state.uploadSuccessfull ? <img src={this.state.pictures}></img> : <ImageUploader withIcon={true}
                                buttonText='Choose images'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880} />
                        }
                    

                    <form>
                        <div className="form-group">
                            <label >Company Name:</label>
                            <input type="text" className="form-control" placeholder="Enter the username" name="Companyname" value={this.state.Companyname} onChange={this.handleChange} ></input>
                        </div><br></br><br></br>
                        <div className="form-group">
                            <label >Email id :</label>
                            <input type="text" className="form-control" placeholder="Enter the Email-id" name="Emailid" value={this.state.Emailid} onChange={this.handleChange} ></input>
                        </div><br></br><br></br>
                        <div className="form-group">
                            <label >Job Title :</label>
                            <input type="text" className="form-control" placeholder="Enter the Job-title" name="Designation" value={this.state.Designation} onChange={this.handleChange} ></input>
                        </div><br></br><br></br>
                        <div className="form-group">
                            <label >Year of experience :</label>
                            <input type="number" className="form-control" placeholder="Enter your year of experience"  name="YOE" value={this.state.YOE} onChange={this.handleChange} min="0" max="10" ></input>
                        </div><br></br><br></br>
                        <input type="checkbox" onChange={this.toggleCheckbox} /> <p>I accept the terms and conditions </p>

                        <button onClick={this.Back}>Back</button> <button onClick={this.validateCompanyinfo}>Send otp</button>
                    </form>
                    </div>
                </div>
            </div>


        )
    }
}

export default Companydetails

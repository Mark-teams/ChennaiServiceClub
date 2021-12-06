/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { Popup } from 'semantic-ui-react';
// import Popup from '../../components/Popup';
import './Popup.css'

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: "95a5046b",
  apiSecret: "bXJrp7KeuiGwuJI1"
})


// Init Nexmo

class FormPage extends Component{
constructor(props){
  super(props)
  this.state={
    username:'',
    phonenumber:'',
    address:'',
    TimeFrom:'',
    TimeTo:''
  }
}
handleUsernameChange=(event)=>{
  this.setState({
    username:event.target.value
  })
}
handlePhonenumberChange=(event)=>{
  this.setState({
    phonenumber:event.target.value
  })
}
handleAddressChange=(event)=>{
  this.setState({
    address:event.target.value
  })
}
handleTimeFromChange=(event)=>{
  this.setState({
    TimeFrom:event.target.value
  })
}
handletimeToChange=(event)=>{
  this.setState({
    TimeTo:event.target.value
  })
}

fetchServer = ({ number, text }) => {
  console.log('send');
  fetch('/', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ number, text })
  })
    .then(function (res) {
      console.log(" Response ",res);
    })
    .catch(function (err) {
      console.log("Error ",err);
    });
};



handleSubmit= event=>{
event.preventDefault();
var message=`Category:${this.props.location.query.title},Service:${this.props.location.query.service} Name: ${this.state.username}, phoneNumber : ${this.state.phonenumber}, Address :${this.state.address}, Shedule timing From : ${this.state.TimeFrom},Shedule timing To :  ${this.state.TimeTo}`
var servernumber=`917397278070`
this.fetchServer({ servernumber, message });
var from = "Vonage APIs"
var to = "917397278070"
alert(message)
nexmo.message.sendSms(from, to, message, { type: 'unicode' }, (err, responseData) => {
  if (err) {
      console.log(err);
      alert(err,from,to,message)
  } else {
      if(responseData.messages[0]['status'] === "0") {
          console.log("Message sent successfully.");
          alert("successfully");
      } else {
          console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
          alert("Failed")
        }
  }
});

document.getElementById("PopupWindow").innerHTML=`<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
</svg><h2 align="center">Thanks for your response.<br/> Our team members we call you shortly</h2>`

}




  render(){
    var total=0;
  console.log("form", this.props)
  for(var i=0;i<this.props.location.query.Servicelist.length;i++){
    console.log(document.getElementById(i).innerText,document.getElementById(String(i)).innertext);
    if(Number(document.getElementById(String(i)).innerHTML)>0){
   total += Number(document.getElementById("total " + i).innerText);
    }
  }
  console.log("Total",total);
  
  return (

<div id="PopupWindow">
    <h2 align="center">Schedule Booking</h2>
      {/* <p className="header">{this.props.location.query.title}{' >> '}{this.props.location.query.service}{">>"}{this.props.location.query.noOfItems}</p> */}
      <form onSubmit={this.handleSubmit}>
        <div>
          <b >Name</b>
          <p><input placeholder="Name" id="username" value={this.state.username} onChange={this.handleUsernameChange} className="input"></input></p>
          <b>Phone</b>
          <p><input className="input" name="phone" value={this.state.phonenumber} onChange={this.handlePhonenumberChange}
            defaultCountry="IN"
            placeholder="Enter phone number" visiblility="hidden"></input>
          </p>
          <b>Address</b>
          <p><input placeholder="Address" name="Address" className="input" value={this.state.address} onChange={this.handleAddressChange} ></input></p>
          <div>
            <b>Availability</b>
            <p className="schedule">
              <p><DateTimePickerComponent width="90%" placeholder="From" value={this.state.TimeFrom} onChange={this.handleTimeFromChange}></DateTimePickerComponent></p>

              <p><DateTimePickerComponent width="90%" placeholder="To" value={this.state.TimeTo} onChange={this.handleTimeToChange}></DateTimePickerComponent></p>
            </p>
          </div>
          <p>Minimun Consultancy fee Rs.{total}/- only</p>

        </div>
        <button className="Submitbtn" type="submit">submit Order </button>
      </form>
      </div>
    )
}
}

export default withRouter(FormPage);
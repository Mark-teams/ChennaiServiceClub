/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
// import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { Popup } from 'semantic-ui-react';
// import Popup from '../../components/Popup';
import './Popup.css'
import DatePickerBlock from "./DateBlock";
import TimePicker from "react-bootstrap-time-picker";
import "react-datepicker/dist/react-datepicker.css";

// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import'bootstrap-css-only/css/bootstrap.min.css'; 
// import'mdbreact/dist/css/mdb.css';

async function postData(url = '', d = {}) {
  // Default options are marked with *
   const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
   body: JSON.stringify(d), // body data type must match "Content-Type" header
  });
  return response; 

}

class FormPage extends Component{
constructor(props){
  super(props)
  this.handleTimeChange = this.handleTimeChange.bind(this);

  this.state = { time: 0 };

  this.state={
    username:'',
    phonenumber:'',
    address:'',
    Date:'',
    time: 0
  }
}

getPickerValue = value => {
  console.log(value);
};

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

// fetchServer = ({ number, text }) => {
//   console.log('send');
//   fetch('/', {
//     method: 'post',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify({ number, text })
//   })
//     .then(function (res) {
//       console.log(" Response ",res);
//     })
//     .catch(function (err) {
//       console.log("Error ",err);
//     });
// };



handleSubmit= event=>{
event.preventDefault();
var optedService='\n';

for (var index=0; index<this.props.location.query.Servicelist.length;index++){
  // console.log(this.props.location.query.Servicelist[index])
  if (eval(document.getElementById(index).innerHTML)>0){
  optedService+=  this.props.location.query.Servicelist[index]+' => '+document.getElementById(index).innerHTML+' => '+document.getElementById("total " + index).innerHTML+"\n"
  }
}
var timestr=''
var schtime=0
if(this.state.time===0){
  timestr="10 AM "
}
else{
if ((this.state.time/3600)>11){
  schtime=(Number(this.state.time)/3600)-12
  if (schtime===0){
    timestr="12 PM "
  }
  else{
  timestr=String(schtime)+ " PM "
  }
}
else{
  schtime=Number(this.state.time)/3600
  timestr=String(schtime)+ " AM "
}
}

console.log("Pros",this.props.location.query)
optedService=optedService+"*Total Amount* :"+document.getElementById("CartAmount").innerHTML
var message=`\t*ChennaiServiceClub*\n*Category*:${this.props.location.query.title}\n${optedService} \n\n*Name*: ${this.state.username}, \n*PhoneNumber* : ${this.state.phonenumber}, \n*Address* :${this.state.address}, \n*Time* : ${timestr},\n*Date* : ${document.getElementById('DatePicker').value}`
const msg = {message:message};
console.log(msg)

postData('https://messagesenderdev.herokuapp.com/sendmessage', msg)
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });


document.getElementById("PopupWindow").innerHTML=`<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
</svg><h2 align="center">Thanks for your response.<br/> Our team members we call you shortly</h2>`

}



handleTimeChange(time) {
  console.log(time);     // <- prints "3600" if "01:00" is picked
  this.setState({ time });
}
handleDateChange(Date) {
  console.log("Date",Date);     // <- prints "3600" if "01:00" is picked
  this.setState({ Date });
}

  render(){
    // const { startDate } = this.state;
    
   
    var total=0;
  

  for(var i=0;i<this.props.location.query.Servicelist.length;i++){
    console.log(document.getElementById(i).innerText,document.getElementById(String(i)).innerText);
    if(Number(document.getElementById(String(i)).innerHTML)>0){
   total += Number(document.getElementById("total " + i).innerText);
    }
  }
 

  return (

<div id="PopupWindow">
    <h2 align="center">Schedule Booking</h2>
      {/* <p className="header">{this.props.location.query.title}{' >> '}{this.props.location.query.service}{">>"}{this.props.location.query.noOfItems}</p> */}
      <form onSubmit={this.handleSubmit}>
        <div>
          <b >Name</b>
          <p><input placeholder="Name" id="username" value={this.state.username} onChange={this.handleUsernameChange} className="input" required></input></p>
          <b>Phone</b>
          <p><input className="input" name="phone"  type="number"  value={this.state.phonenumber} onChange={this.handlePhonenumberChange}
            defaultCountry="IN"
            placeholder="Enter phone number" visiblility="hidden" required></input>
          </p>
          <b>Address</b>
          <p><input placeholder="Address" name="Address" className="input" value={this.state.address} onChange={this.handleAddressChange} ></input></p>
          <div>
            <b>Date</b>
            <p className="schedule">
               <DatePickerBlock required/>
               </p>
          </div>
          <div>
            <b>Time</b>
            <p className="schedule">
            <TimePicker start="10:00" onChange={this.handleTimeChange} value={this.state.time} end="21:00" step={60} style={{"width": "90%","height": "35px"}} />
            </p>
          </div>
        
          <p>Minimun Consultancy fee Rs.{document.getElementById("CartAmount").innerHTML}/- only</p>

        
        <button className="Submitbtn" type="submit">submit Order </button>
        </div>
      </form>
      </div>
    )
}


}

export default withRouter(FormPage);
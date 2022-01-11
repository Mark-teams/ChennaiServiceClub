import { BrowserRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom'
import styled from "styled-components";
import Popup from '../../components/Popup';
import { useState } from 'react';
import Fab from '@material-ui/core/Fab'

import 'react-phone-number-input/style.css'
import './Popup.css';
import FormPage from './FormPage'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { deviceSize } from "../../components/responsive";
import VideoScript from '../video/VideoScript';

import disableScroll from 'disable-scroll';
import {FaRupeeSign} from 'react-icons/fa';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 35vw;
  height: 113px;
  border:2px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;
  border-radius: 10px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 12px;
    width: 96vw;
  height: 113px;
  border-radius: 8px;

    
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 24px 2px 2px 23px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 12px;
    padding: 14px 2px 2px 5px;

  }
  
`;

const Addbutton=styled.span`
color: green;
font-size: large;
position: relative;
@media screen and (min-width: ${deviceSize.mobile}px) {
left:50px;
}
@media screen and (max-width: ${deviceSize.mobile}px) {
left:40px;
}
`
const ServiceIcon=styled.img`
height: 50px;
width: 50px;
position: absolute;
margin: 24px;
`



// function handleSubmit(event) {
//   alert('A name was submitted: ' + this.state.value);
//   event.preventDefault();
// }

// function handleButtonClicked(props){
//   console.log(props)
//   var name = document.getElementById("username").value;

//   console.log(name)
//   window.alert("window",name)

//  }


// const Formpopup = withRouter(({ location }) => (



//  <TransitionGroup>
//     <CSSTransition key={location.key} >
//       <Switch location={location}>
//       {console.log("servList",{location})}

//       <Route path="/user/:id/:service"><Form /></Route>
//       </Switch>
//     </CSSTransition>
//   </TransitionGroup> 


//       // <Switch location={location}>
//       // <Form />  
//       // </Switch>



// ));

const SendToForm = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} >
      <Switch location={location}>
        {console.log("servList", { location })}
        <Route><FormPage /></Route>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function ServiceList(props) {


  const [buttonPopup, setButtonPopup] = useState(false);
  function popuptrigger() {
    window.scrollTo(0, 1200);
          document.getElementById("placeOrderbtn").style.visibility="hidden";

    setButtonPopup(true);


  }

  buttonPopup ? disableScroll.on() : disableScroll.off()


  const handleQuantityIncrease = (index, lenIndex) => {

    props.location.query.quantity[index] = Number(props.location.query.quantity[index]) + 1;
    document.getElementById(index).innerHTML = props.location.query.quantity[index];
    document.getElementById("total " + index).innerHTML = Number(props.location.query.quantity[index]) * Number(props.location.query.amount[index]);
    document.getElementById("placeOrderbtn").style.visibility = "visible";

    var count = 0;
    var Tot_amount = 0;
    for (var i = 0; i < lenIndex; i++) {
      count += Number(props.location.query.quantity[i]);
      Tot_amount += Number(props.location.query.quantity[i] * props.location.query.amount[i]);
    }
    document.getElementById("CartAmount").innerText = Tot_amount;
    document.getElementById("CartCount").innerText = count;
  }


  const handleQuantityDecrease = (index, lenIndex) => {
    if (props.location.query.quantity[index]===0){
      document.getElementById("addbutton " + index).style.visibility = "visible";
      document.getElementById("count " + index).style.visibility = "hidden";
      // document.getElementById("placeOrderbtn").style.visibility="hidden";

    }
   
    if (props.location.query.quantity[index] > 0) {
      

      props.location.query.quantity[index] = Number(props.location.query.quantity[index]) - 1;
      document.getElementById(index).innerHTML = props.location.query.quantity[index];
      document.getElementById("total " + index).innerHTML = props.location.query.quantity[index] * props.location.query.amount[index];
      document.getElementById("addbutton " + index).style.visibility = "hidden";

      document.getElementById("placeOrderbtn").style.visibility="visible";

      if (props.location.query.quantity[index]===0){
        document.getElementById("addbutton " + index).style.visibility = "visible";
        document.getElementById("count " + index).style.visibility = "hidden";
        document.getElementById("placeOrderbtn").style.visibility="hidden";


      }
      

   
    }
    var count = 0;
    var Tot_amount = 0;
    for (var i = 0; i < lenIndex; i++) {
      count += Number(props.location.query.quantity[i]);
      Tot_amount += Number(props.location.query.quantity[i] * props.location.query.amount[i]);

    }
    document.getElementById("CartAmount").innerText =Tot_amount;
    document.getElementById("CartCount").innerText = count;
  }

  function viewCount(index) {
    document.getElementById("addbutton " + index).style.visibility = "hidden";
    document.getElementById("count " + index).style.visibility = "visible";

  }

  const buttons=document.querySelectorAll('button');
  buttons.forEach(btn =>{btn.addEventListener("click",function(e){
    let x=e.clientX-e.target.offsetLeft;
    let y=e.clientY-e.target.offsetTop;
    let ripples=document.createElement("span1");
    ripples.style.left=x+'px';
    ripples.style.top=y+'px';
    this.appendChild(ripples);
  })
  })

  window.onbeforeunload = function() { 
    window.setTimeout(function () { 
      window.location.pathname = '/ChennaiServiceClub'
    }, 0); 
    window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
  }

  // Create handleIncrement event handlers 
  return (
    <div className="ServiceList">
      <div><VideoScript /></div>
      <ContentContainer className="list">
        <Router >
          <div >
            <h2 className="Title">{props.location.query.title}</h2>
            {
              props.location.query.services.map((item, index) => <CardContainer><ContentContainer>
                <span className="services">{item}</span>

                <ServiceIcon src={"https://mark-teams.github.io/ChennaiServiceClub/"+props.location.query.serviceIcon[index]} alt={props.location.query.serviceIcon[index]}/>
                <div className="container_cart">
                  <span className="span">Minimun Cost: ₹. {props.location.query.amount[index]}</span>
                  <span style={{"visibility":"hidden","position": "absolute"}} id={"total " + index} key={index} className="total_cart">{props.location.query.amount[index]}</span>
                  <Addbutton id={"addbutton " + index}  onClick={() => viewCount(index)}>+Add</Addbutton>
                  <div id={"count " + index} style={{ "visibility": "hidden", "align": "right","margin-right":"2vw" }}>
                    <button className="btn_cart" onClick={() => handleQuantityDecrease(index, props.location.query.services.length)} >-</button>
                    <span className="input_cart" id={index}>{props.location.query.quantity[index]}</span>
                    <button className="btn_cart" onClick={() => handleQuantityIncrease(index, props.location.query.services.length)}>+</button>
                  </div>

                </div>

              </ContentContainer>

              </CardContainer>
              )
            }


            <Link  id="placeOrderbtn" style={{"visibility":"hidden"}} onClick={popuptrigger} to={{ pathname: `/categories`, query: { title: props.location.query.title, Servicelist: props.location.query.services } }} >
        <Fab className="FloatBtn" style={{position:"fixed", "z-index":"2","width":"98%","border-radius":"0","color":"white","font-size":"15px","background": "darkslategray","right": "1vw"}}><span  style={{"width": "100%",
    "text-align-last": "left",
    "margin-left": "2vw"}}><p style={{"max-width":"30px","min-width":"20px","border-style": "solid","border-width": "thin","text-align-last":"center"}} id="CartCount"/></span><p style={{"position": "absolute"}}>Place order</p>
    <span  style={{"width": "100%", "text-align-last": "right","margin-right": "50vw"}}>
    <p style={{"position":"fixed","bottom":"3.5vh","right":"15vw"}} id="CartAmount"></p>
    <FaRupeeSign style={{"position":"fixed","bottom":"6vh","right":"10vw"}} />
    </span>
    </Fab>
    </Link>       
        </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <SendToForm />
          </Popup>
        </Router>

      </ContentContainer>
    </div>

  )

}
export default withRouter(ServiceList);
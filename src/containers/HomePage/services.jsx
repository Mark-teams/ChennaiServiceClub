import React,{useRef} from "react";
import styled from "styled-components";
import { BrowserRouter as Router,Link, Route, Switch,withRouter } from 'react-router-dom';
// import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";
import ServiceList from "./ServiceList";
import { AiOutlineArrowRight } from 'react-icons/ai';



import {TransitionGroup, CSSTransition } from "react-transition-group";
// import data from './db.json'
// console.log(data.map())

import './Popup.css';

const ServicesContainer = styled.div`
  width: 90vw;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
   @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  color: #000;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 20vw;
 
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 45vw;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
  align-items: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 12px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;





// const ViewMoreButton = styled(Button)`
//   background-color: #f2f2f2;
//   box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
//   color: #959595;
//   font-size: 14px;

//   &:hover {
//     background-color: #f2f2f2;
//     filter: contrast(0.8);
//   }
// `;s

// const wait = (num) => new Promise((rs) => setTimeout(rs, num));

export function Services(props) {
  let user = [{
    "id": 1,
    "title": "Services",
    "thumbnailUrl": "AC_installation.jpg",
    "rate": 4985,
    "rating": 4,
    "services": ["General Service", "Deep Cleaning Service", "Foam Wash Service"],
    "price": ["499", "1399", "950"],
    "quantity":["0","0","0"],
    "specialist": {
      "id": 1,
      "fullName": "Quick and best AC Installation team in Chennai"
    }
  }, {
    "id": 2,
    "title": "Repair",
    "thumbnailUrl":"AC_Service.jpg",
    "rate": 2500,
    "rating": 3,
    "services": ["Not Working", "Water Leakage", "Not Cooling", "Noise Problem"],
    "price": ["450", "450", "450", "450"],
    "quantity":["0","0","0","0"],
    "specialist": {
      "id": 1,
      "fullName": "Chennai top Most AC Service Team"
    }
  }, {
    "id": 3,
    "title": "Less/No Cooling",
    "thumbnailUrl": "AC_Repair.jpg",
    "rate": 3295,
    "rating": 5,
    "services": ["Inspection Charges"],
    "quantity":["0"],
    "price": ["249"],
    "specialist": {
      "id": 1,
      "fullName": "Reliable AC Repair specialist in Chennai"
    }
  }, {
    "id": 4,
    "title": "Install/Uninstall",
    "thumbnailUrl": "AC_Gas_Filling.jpg",
    "rate": 4875,
    "rating": 5,
    "services": ["Split AC Installation", "Window AC Installation", "UnInstallation","Relocate"],
    "price": ["1350", "849", "649","1999"],
    "quantity":["0","0","0","0"],
    "specialist": {
      "id": 1,
      "fullName": "Fastest Gas Filling Team in Chennai at Low Cost and high quality gas filling"
    }
  }
  ]

const myRef = useRef(null)
function executeScroll(){
  //  myRef.current.scrollIntoView();

  window.scrollTo(0,1000);
}
const AnimatedSwitch = withRouter(({ location }) => (

  
  <TransitionGroup>
    <CSSTransition ref={myRef}  key={location.key} >
      <Switch location={location}>
      <Route exact path="/services" onLoad={executeScroll()}><ServiceList />
</Route>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

window.onbeforeunload = function() { 
  window.setTimeout(function () { 
    window.location.pathname = '/'
  }, 0); 
  window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
}
  return (
    
    <ServicesContainer>
      
      <div className="Title">Our Services</div>
      <p className="text"><span className="tab">   </span>The No.1 AC Servicing Company in Chennai. We have 90+ Service Centers in Chennai. We have more than Ten Thousand clients in Chennai. Our Services will be low cost in city, however quality will be similar to that of international quality.</p>
      <Router>

      
        <ServicesWrapper>
          {

            user.map((item) => <Link style={{ textDecoration: 'none' }} to={{ pathname: `/services`, query: { specialist: item.specialist,title:item.title, services: item.services, amount: item.price,quantity:item.quantity } }} ><CardContainer >
            <TopContainer>
            <ServiceThumbnail>
              <img src={item.thumbnailUrl} alt={item.title} />
            </ServiceThumbnail>
          </TopContainer>


              <ContentContainer>

          
      <span className="services">{item.title} </span><AiOutlineArrowRight style={{"color":"grey","font-size":"18px","font-weight":"bolder","vertical-align": "top", "position": "absolute","align-self": "self-end"}}/></ContentContainer></CardContainer></Link>)
          }
        </ServicesWrapper>
        {/* <TransitionGroup>
        <CSSTransition className="list" timeout={1000}>
        <Switch> */}
        <AnimatedSwitch ref={myRef}  />
        {/* </Switch>
        </CSSTransition>
        </TransitionGroup> */}
        
      </Router>
    </ServicesContainer>
  );
}

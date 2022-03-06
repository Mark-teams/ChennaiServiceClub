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
  width: 86vw;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
   @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100vw;
  }
`;

// 

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 3px;
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
  border-radius:20px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 45vw;
    border-radius:10px;
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
    "serviceIcon":["service.png","deepclean.png","foam-wash.png"],
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
    "serviceIcon":["repair.png","leaking.png","cooling.png","noise.png"],
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
    "serviceIcon":["inspection.png"],
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
    "serviceIcon":["split.png","window-ac.png","install.png","relocation.png"],
    "price": ["1350", "849", "649","1999"],
    "quantity":["0","0","0","0"],
    "specialist": {
      "id": 1,
      "fullName": "Fastest Gas Filling Team in Chennai at Low Cost and high quality gas filling"
    }
  }
  ]

const myRef = useRef(null)




window.onbeforeunload = function() { 
  window.setTimeout(function () { 
    window.location.pathname = '/'
  }, 0); 
  window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
}

function executeScroll() {
  
  try{
    document.getElementById('serv').scrollIntoView({
      behavior: 'smooth', // gives an ease-in-out effect to our scroll
    });
  }

catch{

  window.scrollTo(0,1400)
}
}

const AnimatedSwitch = withRouter(({ location }) => (

  
  <TransitionGroup>
    <CSSTransition ref={myRef}  key={location.key} >
      <Switch location={location}>
      <Route exact path="/services" onLoad={executeScroll()}><ServiceList  />
</Route>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));
  return (
    
    
    <ServicesContainer>
      

      <div className="Title" id="list-of-services" >Our Services</div>
      <p className="text positiveCardsubtitle">
      <span className="tab"> 
      </span>
      The No.1 AC Service Company in Chennai. We have 90+ Service Centers in Chennai.
      We have more than Ten Thousand clients in Chennai. Our Services will be low cost in Chennai, 
      however quality will be similar to that of international quality.<h4>We offer a wide range of AC service in Chennai. Book AC repair, AC service, AC installation, Ac water leak issue & more with just a few clicks. Book now!
</h4>
</p>
<Router>
     <ServicesWrapper>
          {

            user.map((item) => <Link style={{ textDecoration: 'none' }} to={{ pathname: `/services`, query: { specialist: item.specialist,title:item.title, services: item.services, amount: item.price,quantity:item.quantity,serviceIcon:item.serviceIcon } }} ><CardContainer >
            <TopContainer>
            <ServiceThumbnail>
              <img src={item.thumbnailUrl} alt={"AC "+item.title}/>
            </ServiceThumbnail>
          </TopContainer>
              <ContentContainer>
      <span className="services-card">{item.title} </span>
      <AiOutlineArrowRight style={{"color":"grey","font-size":"18px","font-weight":"bolder","vertical-align": "top", "position": "absolute","align-self": "self-end"}}/>
      </ContentContainer>
      </CardContainer>
      </Link>)
          }
        </ServicesWrapper>
        {/* <TransitionGroup>
        <CSSTransition className="list" timeout={1000}>
        <Switch> */}
              <h1 className="Title">Ac Service in Chennai</h1>
        <p className="text positiveCardsubtitle">Among the many ac service providers in Chennai, ChennaiServiceClub is one of the most prominent.
The company deals with all types of Ac service in Chennai including different Ac types like a cassette, window, split, ducting, and central and offers installation and after-sales services. Our service is available throughout Chennai. Therefore, you can reach us at any location regardless of your township. <br/>ChennaiServiceClub believes living a comfortable life is essential for all people, but during the summer season, it may seem impossible to maintain a comfortable home or office unless you have a functioning air conditioner. ChennaiServiceClub is now there to help you with this issue by providing you with all kinds of air conditioners installation as per your requirements. Various types of AC units are on the market, including cassette ACs, ducting ACs, split ACs, window ACs, central AC. we provide all types of Ac service in Chennai regardless of brand. </p>
<div id='serv'>
        <AnimatedSwitch ref={myRef}  />
        {/* </Switch>
        </CSSTransition>
        </TransitionGroup> */}
        </div>
      </Router>
          </ServicesContainer>
  );
}

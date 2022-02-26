import React from "react";
// import { Feed } from "semantic-ui-react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import { SwipeSlider } from "./SwipeSlider";
import { Services } from "./services";
import { TopSection } from "./topSection";
import './tagStyles.css';
import Positives from './Positives';

// import Fab from '@material-ui/core/Fab'

import "./../../components/specialistAd/Feedback.css"



// import ServiceList from "../../components/serviceCard/serviceList";

const ContentContainer = styled.div`
  width: 100%;
  max-width:100vw ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;
const ListServices=styled.div`
width: 100%;
max-width: ${deviceSize.laptop}px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1em;

@media screen and (max-width: ${deviceSize.mobile}px) {
  padding: 5px;
`;



function NavLink (scrollToId) 
{  
 // window.scrollTo(0,1000);

		document.getElementById(scrollToId).scrollIntoView({
			behavior: 'smooth', // gives an ease-in-out effect to our scroll
		});
};

export function HomePage(props) {

  
  window.onbeforeunload = function() { 
    window.setTimeout(function () { 
      window.location.pathname = '/'
    }, 0); 
    window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
  }
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent />
      </TopSection>
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer id="list-of-services">     
           <Services />
        </ContentContainer>
        <ListServices id="service_Details"></ListServices>
        <Marginer direction="vertical" margin="3em" />
        <div><h3 className="Title">Customer reviews</h3></div>
        <ContentContainer>      
        <SwipeSlider id= "serviceList" />
        </ContentContainer>
        {/* <ServiceCount /> */}
         <Positives />
        {/* <Marginer direction="vertical" margin="3em" /> */}
        <div><h3 className="Title">About us</h3></div>
        <ContentContainer>      
        <p className="text positiveCardsubtitle"><span className="tab">   </span>We at ChennaiServiceClub offer the full range of AC installation services through 
        professionals so that you can enjoy the benefits of choosing the right AC service provider.
        ChennaiServiceClub's service engineers are well-trained and always available to provide you with the most satisfactory service.
              The services are available for an affordable price.
          </p>
          <div><h3 className="Title">How to book AC Service in Chennai through Chennai Service Club?</h3></div>
                <ul className="text positiveCardsubtitle" style={{"text-align": "left"}}>
         <li>Choose an AC repair service from our <b onClick={() => NavLink("list-of-services")}><u style={{"color":"blue","cursor":"pointer"}}>list of services.</u></b></li>
         <li>Choose a time slot - Our AC service center is available all days of the week.</li>
         <li>Easy service - our expert AC technician completes service within one hour after ordering.</li>
         <li>Ensure the AC repair work is handled by a trained and expert service technician</li>
         <li>Quick and Efficient</li>
         <li>Quality product</li>
         <li>Reasonable rates and discounts</li>
         <li>Customer-friendly staffs</li>
         </ul>
         <h2 className="Title">We offer Ac Service and Repair for below brands in Chennai</h2>

<div class="container">
  <h4 class="tag item ">Blue Star Ac service in Chennai</h4>
 <h4 class="tag item ">Panasonic ac service center in chennai</h4>
 <h4 class="tag item ">Daikin ac service in chennai</h4>
 <h4 class="tag item ">Lg ac service in chennai</h4>
 <h4 class="tag item ">Voltas ac service in chennai</h4>
  <h4 class="tag item ">Whirlpool ac service center in chennai</h4>
  <h4 class="tag item ">Haier service centre chennai</h4>
  <h4 class="tag item ">Hitachi ac service chennai</h4>
  <h4 class="tag item ">Onida ac service chennai</h4>
</div>
</ContentContainer>
    </InnerPageContainer>
      
      <Footer />
      
    </PageContainer>
  );
}

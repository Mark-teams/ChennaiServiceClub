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
import ServiceCount from './ServiceCount';
import Positives from './Positives'
import Fab from '@material-ui/core/Fab'

import "./../../components/specialistAd/Feedback.css"



// import ServiceList from "../../components/serviceCard/serviceList";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
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
export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent />
      </TopSection>
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>      <Services />
        </ContentContainer>
        <ListServices id="service_Details"></ListServices>
        <Marginer direction="vertical" margin="3em" />
        <div><h3 className="Title">Customer reviews</h3></div>
        <ContentContainer>      
        <SwipeSlider />
        </ContentContainer>
        <ServiceCount />
         <Positives />
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      
      <Footer />
      
    </PageContainer>
  );
}

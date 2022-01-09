import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";

import { IoMdCall } from "react-icons/io";
import ParticleAnimation from 'react-particle-animation'

// import Particle from "react-particles-js";
// import particlesConfig from "./particlesConfig.json";


import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import TheBestSpecialistsImg from "../../images/farming.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 700;
  background-position: 0px -150px;
  background-size: cover;
  // background: url(${TopSectionBackgroundImg}) no-repeat;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 300px;
    background-color:#264653;
    background-position: 0px 0px;
  }
  @media screen and (min-width: ${deviceSize.desktop}px) {
    height: 800px;
    background-color:#264653;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color:#264653;
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
 
  align-items: center;
  position: absolute; 
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 44em;
  height: 34em;

  img {
    width: 80%;
    height: 70%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 3vw;
 
  
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    // position: fixed;
    top: 12vh;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 28px;
  width:56vw;
 @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
    width:80vw;
   
  }
`;
const ButtonText=styled.a`
text-decoration: none !important;
color:white;


`

export function TopSection(props) {
  const { children } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <TopSectionContainer>
      
      <BackgroundFilter>
        {children}
        {/* <Particle  style={{"height": "200px"}}params={particlesConfig}  /> */}

        {/* <Particles params={{"particles":{"number":{"value": window.innerWidth >600 ? 60 : 30},"size":{"value":window.innerWidth >600 ? 5 : 5}}}} /> */}
         <ParticleAnimation className ="particles" style={{"height":  window.innerWidth >600 ? 700 : 200+"px"}}  
         background={{ r: 38, g: 70, b: 83, a:82}}
         color={{r:255,g:255,b:255,a:255}}
         particleRadius={1.0}
         lineWidth={0.5}
         particleSpeed={1.0}
         numParticles={window.innerWidth >600 ? 50 : 30}
         /> 
       
        <TopSectionInnerContainer >

          <LogoContainer>
            <Marginer direction="vertical" margin={8} />
            <SloganText>No.1 AirConditioner Service Team</SloganText>
            <SloganText>in Chennai</SloganText>
            
            <Marginer direction="vertical" margin={20} />
            <Button ><ButtonText href="tel:+91-8925222761"><IoMdCall style={{"vertical-align": "text-bottom"}} size='1.3em'/> {8925222761}</ButtonText></Button>
            
          </LogoContainer>
          {!isMobile && (
            <StandoutImage>
              <img src={TheBestSpecialistsImg} alt="Best Ac service in Chennai" />
            </StandoutImage>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
     </TopSectionContainer>
  );
}
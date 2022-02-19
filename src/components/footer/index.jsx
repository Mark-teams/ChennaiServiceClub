import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";

import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  background:#264653;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #fed;
  font-weight: 600;
  font-size: 20px;
`;

const FLink = styled.b`
  text-decoration: none;
  color: #9f9f9f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const FLinkk = styled.a`
  text-decoration: none;
  color: #9f9f9f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }
`;

const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #777777;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  }
`;

export function Footer(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Services</Title>
          <FLink>General Service</FLink>
          <FLink>Deep Cleanig Service</FLink>
          <FLink>Foam Wash Service</FLink>
          <FLink>AC Repair</FLink>
          <FLink>Water Leakage</FLink>
          <FLink>Cooling Issue</FLink>
          <FLink>Noise Issue</FLink>
          <FLink>Relocation</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title >Locations</Title>
          <FLink>Chennai</FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo hideLogo color="#8f8f8f" textSize={isMobile ? 20 : 25} />
          <PrivacyText> &#169; All Rights Reserved. 2022</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
          <FLinkk rel="noreferrer" href="https://facebook.com/Chennnai-Service-Club-111049714810936/?ref=bookmarks" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </FLinkk>
          </SocialIcon>
          <SocialIcon>
          <FLinkk rel="noreferrer" href=" https://www.instagram.com/p/CZtyAGVPi4B/?utm_medium=share_sheet" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
           </FLinkk> 
          </SocialIcon>
          {/* <SocialIcon>
          <PrivacyText>developed by Mark96Solutions.com</PrivacyText>
          </SocialIcon> */}
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}
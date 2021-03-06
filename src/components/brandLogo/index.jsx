import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/logos/logo.png";
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 20px;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 900;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props;
  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
}

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link onClick={refreshPage}>
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Chennai-Service-Club logo" />
          </LogoImage>
        </Link>
      )}
      <StyledLink onClick={refreshPage}>
        <LogoTitle size={textSize} color={color}>
          ChennaiServiceClub
        </LogoTitle>
      </StyledLink>
    </BrandLogoContainer>
  );
}

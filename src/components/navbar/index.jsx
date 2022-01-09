import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
// import { Button } from "../button";
// import { FaWhatsapp } from "react-icons/fa";
// import {HiMenuAlt3} from "react-icons/hi";
// import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
// import { useMediaQuery } from "react-responsive";
// import Navbarfunction from "./components/Navbar";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import "../../App.css"

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  padding: 0 1.5em;
  background:#264653;
`;
// background-color: ${({ useTransparent }) => useTransparent ? "transparent" : "#264653"};

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  z-index:1;
  align-items: left;
  right:10vw;
  top:20px;
  position:absolute;


  @media screen and (max-width: ${deviceSize.mobile}px) {
    visibility:hidden;
  }
  @media screen and (min-width: ${deviceSize.mobile}px) {
    visibility:visible;
  }
`;

// const AnchorLink = styled(Link)`
//   font-size: 18px;
//   color: #fff;
//   cursor: pointer;
//   text-decoration: none;
//   outline: none;
//   padding:10px;
//   transition: all 200ms ease-in-out;

//   &:hover {
//     filter: contrast(0.6);
//   }
// `;

// const Seperator = styled.div`
//   min-height: 35%;
//   width: 1px;
//   background-color: #fff;
// `;

// const Whatsapp=styled.a` 
// text-decoration: none !important;
// color:white;`

// const Menuicon=styled.i`
// font-size:24px;
// color:white;
// @media screen and (max-width: ${deviceSize.mobile}px) {
//   visibility:visible;
// }
// @media screen and (min-width: ${deviceSize.mobile}px) {
//   visibility:hidden;}
// `;

// function Homepagebutton(pos){
//   console.log("pros",pos);
//   // window.scrollTo(0,pos);

//   setTimeout(function () {
//     window.scrollTo(0, pos);
// },200);
// }


export function Navbar(props) {
  const { useTransparent } = props;

  // sconst isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <AccessibilityContainer >
       {/* <Link to="/customer/access/signup"> 
          <Button size={20}><Whatsapp href= "https://wa.link/p7aa5m"><FaWhatsapp size="1.3em"/>  Whatsapp</Whatsapp></Button>
        </Link> 
        {!isMobile && <AnchorLink>Specialists Portal</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={10} />}
        {!isMobile && <Seperator />} 
        <Marginer direction="horizontal" margin={10} />
        
        <Marginer direction="horizontal" margin={8} />
         <AnchorLink to="/customer/access/signin">Login</AnchorLink>  */}
         {/* <AnchorLink to='' onClick={()=>Homepagebutton(1000)}>Home</AnchorLink>
         <AnchorLink to='' onClick={()=>Homepagebutton(3000)}>About us</AnchorLink> */}
      </AccessibilityContainer>  


      {/* <Menuicon className="menuItems">

      <Router >
        <Navbarfunction  />
        <Switch>
          <Route path='/' onClick={()=>Homepagebutton(5000)} exact  />
          <Route path='/' onClick={()=>Homepagebutton(5000)}  />
          <Route path='/' onClick={()=>Homepagebutton(5000)}  />
        </Switch>
      </Router>
      </Menuicon> */}
    </NavbarContainer>
  );
}

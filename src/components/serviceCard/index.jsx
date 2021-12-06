import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router,Link} from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
 
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;
`;



const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
`;

// const BottomContainer = styled.div`
//   width: 100%;
//   height: 32px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border-top: 0px solid rgba(15, 15, 15, 0.19);
//   padding: 0 10px;
// `;

// const Title = styled.h2`
//   font-size: 18px;
//   margin: 0;
//   font-weight: 500;
//  olor: #000;
//   text-align: start;
// `;

// const SpecialistName = styled.h4`
//   margin: 0;
//   color: rgba(100, 100,100, 1);
//   font-size: 15px;
//   font-weight: 450;
// `;

// const RatingContainer = styled.div`
//   display: flex;
//   color: #ebe204;
// `;

// const PriceContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const PriceText = styled.div`
//   margin-left: 5px;
//   color: #2ba679;
//   font-weight: 700;
// `;

// const StartingAtText = styled.h6`
//   margin: 0;
//   color: rgb(161, 161, 161);
//   font-weight: 400;
// `;



export function ServiceCard(props) {
  const { name,id,lst } = props;

  // let user=[
  //   {name:'anil',id:1,lst:["service 1","service 2","service 3"]},
  //   {name:'peter',id:2,lst:["service 1","service 2","service 3"]},
  //   {name:'bruce',id:3,lst:["service 1","service 2","service 3"]},
  //   {name:'tony',id:4,lst:["service 1","service 2","service 3"]}]

return ( 
 
  <div>
    <Router>
    {
    <CardContainer> <ContentContainer><Link  to={{pathname:`/user/${id}`,query:{name:name,lst:lst}}} >{name}</Link></ContentContainer></CardContainer>
    }
    {/* to={"/user/"+title} onClick={() => Print(props)} */}
   {/* <Route path="/user/:id"><ServiceList /></Route> */}
    </Router>
      </div>
    
    
    
)

}




import styled from "styled-components";
import {
    Card, Row, Col
} from 'reactstrap';

import "../../App.css"

const Pos = styled.div`
background:white;
  height:15hv;
  width:150wv;
`;
const PositiveCardIcon= styled.div`
height: 120px;
    width: 120px;
    border: 4px solid darkslategray;
    display: table-cell;
    text-align: center;
    color: darkslategray;
    vertical-align: middle;
    border-radius: 50%;
    font-size: 27px;
    position: relative;
    text-align: -webkit-center;
    font-family:bold;
`
const PositiveCardHolder=styled.div`
text-align: -webkit-center;
`


const positive = [{
    "icon":"₹.199",
    "title": "Lowest Inspection Charges",
    "description": "If you availed the Services no need to pay the inspection charges, just need to pay the service charges. However in case if you are not availing the services need to pay the 199 inspection charges. Book us."
},
{   "icon":"30 Days",
    "title": "Service Warranty",
    "description": "We are giving 30 days warranty for all the services. If you get any problem in your AC in this warrant period. We will do the services for the free of cost. Just you need to pay for the replacement product if any."
}, {
    "icon":"90 Days",
    "title": "Gas filling Charges & Warranty",
    "description": "We are giving 90 days warranty for the Gas Charging services. In case if you gas leaked within this time period. We will do the Gas Charging for free of cost. Book us for Gas Charging and avail 90 days Warranty."
}]

export default function ServiceCount() {

    return (<Pos>
         
    <div className="positiveContainer">
                    <Row className="positiverow" xg={window.innerWidth> 540 ? 3 :2}>
                    {positive.map((e, item) => {
                        return (
                          <Col>
                              <Card>
                                  <div className="positiveCardbody">
                                      <PositiveCardHolder>
                                      <PositiveCardIcon>
                                          {e.icon}
                                          </PositiveCardIcon>
                                         </PositiveCardHolder> 
                                      <div className="positiveCardtitle" tag="h5">{e.title}</div>
                                      <div className="positiveCardsubtitle" tag="h6" >{e.description}</div>
                                  </div>
                              </Card>
                          </Col>
                        )
                    })}
                    </Row>
                </div>
               
    </Pos>

    );
}


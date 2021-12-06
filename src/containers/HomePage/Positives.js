import styled from "styled-components";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';

import "../../App.css"

const Pos = styled.div`
background:white;
  height:15hv;
  width:150wv;
`;


const positive = [{
    "title": "Lowest Inspection Charges",
    "description": "If you availed the Services no need to pay the inspection charges, just need to pay the service charges. However in case if you are not availing the services need to pay the 199 inspection charges. Book us."
},
{
    "title": "30 Days Service Warranty",
    "description": "We are giving 30 days warranty for all the services. If you get any problem in your AC in this warrant period. We will do the services for the free of cost. Just you need to pay for the replacement product if any."
}, {
    "title": "90 Days Gas Charging Warranty",
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


{/* <Table className="positives" striped hover size="sm">
          <tr className="TableRow">
                <th><p className="serviceCount">Lowest Inspection Charges</p></th>
                <th><p className="serviceCount">30 Days Service Warranty</p></th>
                <th><p className="serviceCount">90 Days Gas Charging Warranty</p></th>
              </tr>
              <tr className="TableRow">
                <td><span className="serviceName">If you availed the Services no need to pay the inspection charges, just need to pay the service charges. However in case if you are not availing the services need to pay the 199 inspection charges. Book us.</span></td>
                <td><span className="serviceName">We are giving 30 days warranty for all the services. If you get any problem in your AC in this warrant period. We will do the services for the free of cost. Just you need to pay for the replacement product if any.</span></td>
                <td><span className="serviceName">We are giving 90 days warranty for the Gas Charging services. In case if you gas leaked within this time period. We will do the Gas Charging for free of cost. Book us for Gas Charging and avail 90 days Warranty.</span></td>
                
              </tr>
          </Table> */}

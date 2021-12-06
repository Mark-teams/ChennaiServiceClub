import styled from "styled-components";
import {
    Card,  CardBody,
    CardTitle, CardSubtitle, Container, Row, Col
  } from 'reactstrap';

import "../../App.css"

const ServiceList=styled.div`
  height:15hv;
  width:100wv;
  background-color: darkslategray;
  width:100%;
`;

const data=[{
"count":"2500+",
"service":"AC Service"
},{
    "count":"3295+",
    "service":"AC Repair"
    },{
        "count":"4985+",
        "service":"AC Installation"
        },{
            "count":"5925+",
            "service":"AC Relocation"
            }]

export default function ServiceCount(){

    return( <ServiceList>
        <h5 className="ServiceHeader">Total Services</h5>
    <Container className='Container'>
                    <Row xg={window.innerWidth>600 ? 4 :1}>
                    {data.map((e, item) => {
                        return (
                          <Col>
                              <Card>
                                  <CardBody>
                                      <CardTitle >{e.count}</CardTitle>
                                      <CardSubtitle >{e.service}</CardSubtitle>
                                  </CardBody>
                              </Card>
                          </Col>
                        )
                    })}
                    </Row>
                </Container>
                </ServiceList>
                 
        );
    }

 
        


    // <ServiceList>
    //     <h2 className="ServiceHeader">Total Services</h2>
    //     {data.map((item)=><div ><p className="seviceCount">{item.count}</p><span className="serviceName">{item.service}</span></div> )}
    //     {/* <Table striped hover size="sm">
    //           <tr className="TableRow">
    //             <td><p className="serviceCount">2500+</p><span className="serviceName"></span></td>
    //             <td><p className="serviceCount">3295+</p><span className="serviceName"></span></td>
    //             <td><p className="serviceCount">4985+</p><span className="serviceName"></span></td>
    //             <td><p className="serviceCount">5925+</p><span className="serviceName"></span></td>
    //           </tr>
    //       </Table> */}
    //       </ServiceList>
  

import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function Cards(props) {
    let date = Date();
    let CovidData;
    if (props.indexer < 186) {
        CovidData = props.CountriesCases[props.indexer];
    } else {
        CovidData = props.GlobalCases;
    }
    return (
        <div>
            <Row>
                <Col xs={12} sm={12} md={4}>
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body style={{ boxShadow: "4px 4px 3px 0px pink" }}>
                            <Card.Title>Infected</Card.Title>
                            <Card.Text>
                                <span style={{ fontSize: "28px" }}>{CovidData.TotalConfirmed}</span> <br />
                                <code>{date}</code> <br />
                                Number of active cases of covid 19.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body style={{ boxShadow: "4px 4px 3px 0px lightgreen" }}>
                            <Card.Title>Recovered</Card.Title>
                            <Card.Text>
                                <span style={{ fontSize: "28px" }}>{CovidData.TotalRecovered}</span> <br />
                                <code>{date}</code> <br />
                                Number of recovered cases of covid 19.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body style={{ boxShadow: "4px 4px 3px 0px red" }}>
                            <Card.Title>Deaths</Card.Title>
                            <Card.Text>
                                <span style={{ fontSize: "28px" }}>{CovidData.TotalDeaths}</span> <br />
                                <code>{date}</code> <br />
                                Number of deaths from covid 19.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Cards;
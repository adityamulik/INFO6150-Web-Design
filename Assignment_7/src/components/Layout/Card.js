import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

const CardResponsive = ({data}) => {
  
  return (
    <Container>
      <Row>
        {data.map((dataMain, k) => (
          <Col key={k} xs={12} md={4} lg={3}>
            <Card >
              <Card.Img src={dataMain.img} />
              <Card.Body>
                <Card.Title>{dataMain.name}</Card.Title>
                <Card.Text>{dataMain.team_name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardResponsive;
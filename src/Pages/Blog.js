import React, {Component} from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
           
        <Container>
          <Row className="m-3" >
         <Col md="3">
            <h5 className="text-center mt-3">Категории</h5>
            <Card>
                <ListGroup>
                    <ListGroup.Item>Какой-то текст</ListGroup.Item>
                    <ListGroup.Item>Какой-то текст</ListGroup.Item>
                    <ListGroup.Item>Какой-то текст</ListGroup.Item>
                    <ListGroup.Item>Какой-то текст</ListGroup.Item>
                    <ListGroup.Item>Какой-то текст</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card className=" mt-3" bg="light">
            <Card.Body>
            <Card.Title>Какой-то заголовок</Card.Title>
            <Card.Body>
                Злесь тоже какой то текст
            </Card.Body>
            </Card.Body>
            
            </Card>
        </Col>
        
        
          <Col xs={6} md={2}>
         
          </Col>
          <Col xs={6} md={6}>
          <h3>Какой-то заголовок</h3>
            <p>
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            </p>

            <h3>Какой-то заголовок</h3>
            <p>
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            </p>

            <h3>Какой-то заголовок</h3>
            <p>
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            </p>
          </Col>
      </Row>

      </Container>
        );
    }
}
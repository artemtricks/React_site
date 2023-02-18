import React, {Component} from 'react';

import { Card, CardGroup, Container, Button } from 'react-bootstrap';
import Swiper from '../Components/Swiper/Swiper';
export default class Home extends Component {
    render() {
        return (
            <>
            <Swiper />
            <Container >
            <h2 className="text-center m-4"></h2>
            </Container>
            <CardGroup>
                <Card className="m-2">
                   
                   <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                        Какой то текст 
                    </Card.Text>
                    
                   </Card.Body>
                </Card>
                <Card className="m-2">
                   
                   <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                        Какой то текст 
                    </Card.Text>
                    
                   </Card.Body>
                </Card>
                <Card className="m-2">
                  
                   <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                        Какой то текст 
                    </Card.Text>
                    
                   </Card.Body>
                </Card>
            </CardGroup>
            </>
        )
    }
}
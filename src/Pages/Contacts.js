import React, {Component} from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import './index.css';

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: "44%"}}>
             <h1 className="text-center">Свяжитесь со мной</h1>
             <Form >
              <Form.Group className='Form__contact-form' controlId="formBasicEmail">
                <Form.Label><h5>Электронная почта</h5></Form.Label>
                <Form.Control type="email" placeholder="Введи свою электронную почту"></Form.Control>
              </Form.Group> 

                <Form.Group className='Form__textarea-form' controlId="formBasicPassword">
                    <Form.Label><h5>Напишите что-нибудь</h5></Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Group className='Form__checkbox-form' controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Ткни сюда обязательно" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">Отправить</Button>

             </Form>  
            </Container>
        )
    }
}
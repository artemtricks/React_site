import React, {Component} from 'react';
import { Container, Row, Col, Nav, Tab} from 'react-bootstrap';
import Counter from '../Components/Counter/Counter';
import Modal from '../Components/Modal/Modal';
import Quiz from '../Components/Quiz/Quiz';
import UserDesc from '../Components/UserDesc/UserDesc';
import './index.css'


export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container className='Tabs' id='ledt-tabs-example' defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item >
                                    <Nav.Link eventKey="first">Счетчик</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Модальное окно</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Опрос</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Панель пользователей</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">...</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey="first">
                                    <Counter />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Modal />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Quiz />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <UserDesc />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <p>Пока ничиго нет</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
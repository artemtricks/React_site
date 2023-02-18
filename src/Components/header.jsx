
import React, { Component } from "react"
import { Container, Nav, Navbar, NavLink } from "react-bootstrap"
import logo from '../assets/logo.svg';
import {BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


export default class Header extends Component {
    render() {
        return (
            <>
            <Router>
           <Navbar sticky="top" collapseOnSelect expand="md" bg="light" variant="light" >
            <Container>
                <Navbar.Brand href="/">
            <img
                src={logo}
                height="30"
                width="30"
                className="d-inlaine-block align-top"
                alt="Logo"
                /> Сайт на реакте
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                    <NavLink as={Link} to ="/">Главная страница</NavLink>
                    <NavLink as={Link} to="/about">Компоненты</NavLink>
                    <NavLink as={Link} to="/contacts">Обратная связь</NavLink>
                    <NavLink as={Link} to="/blog">Остальное</NavLink>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
           </Navbar>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contacts' element={<Contacts/>}/>
                <Route path='/Blog' element={<Blog/>}/>
            </Routes>
           </Router>
           </>
        )
    }
}

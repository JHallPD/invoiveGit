import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavDropdown, Image, Form, FormControl } from 'react-bootstrap';
import * as ROUTES from './routes';
import './index.css';
import userSm from './img/user.png';
import logo from './img/logo.png';
//navbar that renders based on user user authorization
const Navigation = () => (
    <div>

                <NavigationAuth/>


    </div>
);
//simple navbar ready to add user auth
const NavigationAuth = () => (
    <Navbar className="mainNav" variant="light">
        <Nav className="searchNav">
            <Image src={logo} className="logo" />

        </Nav>
        <Form className="search">
            <Button variant="outline-secondary" className="searchBtn"><i class="fas fa-search fa-xs" ></i></Button>

            <input
                className="searchField"
                placeholder="Search e.g. live instagram channel "         
            />
        </Form>
            <Nav className="userNav">
                <p className="navWlc">Welcome Selena</p>
                <Image src={userSm} className="navImg"/>
            </Nav>
    </Navbar>

);

export default Navigation;
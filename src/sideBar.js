import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Accordion, Card } from 'react-bootstrap';
import * as ROUTES from './routes';
import './index.css';
import userSm from './img/user.png';
import logo from './img/logo.png';
import Collapsible from 'react-collapsible';
//side bar for navigating submenus
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active1: true,
            active2: false,
            active3: false,
        };
    }

    render() {
        return (
            
            <div className="sideBarMain">
                {/**I decided to go with react bootstraps accordion component and custom style it to represent the side nav bar**/}
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle eventKey="0" as={Button.Success} className={this.state.active1 ? 'sideBtnA' : 'sideBtn'} onClick={() => this.setState({ active1: !this.state.active1, active3: false, active2: false })}>
                            <div className="titles">
                                <div className="mStart">
                                <div className="mIcon">
                                <i class="fas fa-th-large"></i>
                                </div><div className="mTitle">
                                Dashboard
                                </div>
                                </div>
                                    <div className="arrowIcon">
                                        <i class="fas fa-caret-down"></i>                                 
                                </div>
                            </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="sideSubMenu">
                                {/**Currently using a simple list to reperesent sub menus**/}
                            <ul>
                                    <li><i class="far fa-circle fa-xs"></i>  Sub menu 1</li>
                                    <li><i class="far fa-circle fa-xs"></i>  Sub menu 2</li>
                                    <li><i class="far fa-circle fa-xs"></i>  Sub menu 3</li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle eventKey="1" as={Button.Success} className={this.state.active2 ? 'sideBtnB' : 'sideBtn'} onClick={() => this.setState({ active2: !this.state.active2, active3: false, active1: false })}>
                            <div className="titles">
                                <div className="mStart">
                                    <div className="mIcon">
                                        <i class="fas fa-chart-line"></i>
                                    </div><div className="mTitle">
                                        Sales
                                </div>
                                </div>
                            </div>
                                
    
                        </Accordion.Toggle>
            </Card>
                    <Card>
                        <Card.Header className="sideToggle">
                            <Accordion.Toggle eventKey="2" as={Button.Success} className={this.state.active3 ? 'sideBtnC' : 'sideBtn'} onClick={() => this.setState({ active3: !this.state.active3, active1: false, active2: false })}>
                                <div className="titles">
                                    <div className="mStart">
                                        <div className="mIcon2">
                                            <i class="fas fa-inbox"></i>
                                        </div><div className="mTitle">
                                            Inbox
                                </div>
                                    </div>
                                    <div className="arrowIcon2">
                                        <i class="fas fa-caret-down"></i>
                                    </div>
                                </div>
                                
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="sideSubMenu">Under Construction</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}
//simple navbar for AuthUsers
//added background image to css

export default Sidebar;
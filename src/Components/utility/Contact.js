import React from 'react'
import { Container } from 'react-bootstrap'
import WhatsImage from '../../images/download.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logoma-mobile.png'
import NavDropdown from 'react-bootstrap/NavDropdown';

const Contact = () => {
    return (

        <div className='date'>
            <div className='contactNavbar py-2'>
                <Container>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='text-light d-flex justify-content-center align-items-center'>
                            <div>
                                <img src={WhatsImage} alt="whatsapp" className='rounded-circle whatsapp mx-2' />
                                <div className='dataContact'>
                                    <p>01125178289</p>
                                    <p>24/ 7 Help support</p>
                                </div>
                            </div>
                            <div>
                                <ul className='listContact'>
                                    <li>
                                        <FontAwesomeIcon icon={faCoffee} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='verticalLine mx-5'></div>
                        <div>
                            <div>
                                <ul className='listContact2'>
                                    <li> <FontAwesomeIcon icon={faUsers} style={{ marginRight: "10px" }} />Register</li>
                                    <li> <FontAwesomeIcon icon={faLock} style={{ marginRight: "10px" }} />Login</li>
                                    <li className='useImage' style={{ marginLeft: "10px" }}> <FontAwesomeIcon icon={faUsers} /></li>
                                    <li>
                                        <select className='menuLang'>
                                            <option className='lang' style={{ padding: "10px" }}>English</option>
                                            <option className='lang' style={{ padding: "10px" }}>Deutsch</option>
                                            <option className='lang' style={{ padding: "10px" }}>cesky</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='navBar'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} className='w-50' alt="LogoMarsa" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link className='links' href="">Home</Nav.Link>
                                <Nav.Link className='links' href="">Link</Nav.Link>
                                <Nav.Link className='links' href="">Home</Nav.Link>
                                <Nav.Link className='links' href="">Link</Nav.Link>
                                <Nav.Link className='links' href="">Home</Nav.Link>
                                <Nav.Link className='links' href="">Link</Nav.Link>
                                <Nav.Link className='links' href="">Home</Nav.Link>
                                <NavDropdown className='links' title="Adventure" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="">Something</NavDropdown.Item>
                                    <NavDropdown.Item href="">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className='links' href="">Link</Nav.Link>
                                <Nav.Link className='links' href="">Home</Nav.Link>
                                <Nav.Link className='links' href="">Link</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>

    )
}

export default Contact

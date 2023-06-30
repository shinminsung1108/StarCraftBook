import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RaceCard from './RaceCard';

function MainPage() {
    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">StarCraft 10CB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">메인화면</Nav.Link>
                            <NavDropdown title="메뉴" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">인원</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container style={{ 
                height: "400px",
                backgroundImage: "url(https://cdn.discordapp.com/attachments/1025783092901843046/1050848457348354149/image.png)", 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat'}}
                fluid
            />
            <RaceCard />
        </Fragment>
    );
}

export default MainPage;
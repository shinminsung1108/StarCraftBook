import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarMain () {
    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">StarCraft 10CB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">메인화면</Nav.Link>
                            <NavDropdown title="메뉴" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/members">인원</NavDropdown.Item>
                                <NavDropdown.Item href="/league">리그기록</NavDropdown.Item>
                                <NavDropdown.Item href="/kakaoTalk">카카오톡</NavDropdown.Item>
                                <NavDropdown.Item href="/discord">디스코드</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavbarMain
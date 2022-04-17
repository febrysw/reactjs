import { Navbar, Container, Nav} from 'react-bootstrap';

const NavigationBar = (props) => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">{props.menu[0]}</Nav.Link>
                    <Nav.Link href="#project">{props.menu[1]}</Nav.Link>
                    <Nav.Link href="#custom">{!props.customTitle ? "Custom" : props.customTitle}</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
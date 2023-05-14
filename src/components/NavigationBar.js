import { Container, Nav, Navbar } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/" style={{fontFamily: 'cursive', fontWeight: 'bold'}}>KALORIKU</Navbar.Brand>
                    <Nav className="gap-4">
                        <Nav.Link style={{color: 'blue', fontWeight: 'bold'}} href="/">Home</Nav.Link>
                        <Nav.Link className="text-dark" href="rekomendasi" style={{fontWeight: 'bold'}}>Rekomendasi</Nav.Link>
                        <Nav.Link className="text-dark" href="tips" style={{fontWeight: 'bold'}}>Tips</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
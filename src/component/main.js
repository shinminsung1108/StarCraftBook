import { Fragment } from 'react';
import RaceCard from './RaceCard';
import NavbarMain from './Navbar_main';
import { Container } from 'react-bootstrap';
import CarouselImg from './CarouselImg';

function MainPage() {
    return (
        <Fragment>
            <NavbarMain />
            <CarouselImg />
            <RaceCard />
            <Container style={{
                backgroundColor: "#F7D358",
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
                fluid
            >
                ,
            </Container>
        </Fragment>
    )
}

export default MainPage;
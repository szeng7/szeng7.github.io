import React from "react";
import {
    Container,
    Row,
    Col,
    Alert,
    Button,
    Navbar,
    Nav,
} from "react-bootstrap";
import ContactPage from "../assets/components/ContactPage.jsx";
import Gallery from "react-photo-gallery";

function AlertDismissible() {
    const [show, setShow] = React.useState(true);

    return (
        <>
            <Alert
                show={show}
                variant="info"
                style={{
                    marginTop: "10vh",
                    marginBottom: "0px",
                    width: "80%",
                    left: "10%",
                }}
            >
                <Alert.Heading>Just a heads up!</Alert.Heading>
                <p>
                    This page is currently incomplete, I'm still hooking it up
                    with a database to make it dynamic.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button
                        onClick={() => setShow(false)}
                        variant="outline-success"
                    >
                        Close
                    </Button>
                </div>
            </Alert>
        </>
    );
}

const CookingPage = () => {
    window.scrollTo(0, 0);
    return (
        <body className="cooking">
            <div className="cooking-wrapper">
                {AlertDismissible()}
                <Navbar>
                    <Nav.Link
                        className="custom-nav-link-cooking d-flex align-items-center"
                        href="./#interests"
                        style={{ textDecoration: "none" }}
                    >
                        <img
                            className="icon-back"
                            src={require("../assets/icons/back-black.png")}
                            alt="back"
                        ></img>
                        <h4 className="d-inline back-text">
                            Back to Portfolio
                        </h4>
                    </Nav.Link>
                </Navbar>
                <section>
                    <Container className="gallery-container">
                        <Gallery
                            photos={photos}
                            direction={"column"}
                            columns={4}
                        />
                    </Container>
                </section>
                <section id="about" className="about-cooking-wrapper">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="title-wrapper">
                                    <h1 className="title">About Me</h1>
                                    <img
                                        className="title-line"
                                        src={require("../assets/icons/horizontal-line-short-blue.png")}
                                        alt="horizontal line"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                md={{ span: 8, offset: 2 }}
                                lg={{ span: 4, offset: 0 }}
                                className="my-auto"
                            >
                                <img
                                    className="image"
                                    src={require("../assets/images/portfolio/chef.jpg")}
                                    alt="profile"
                                />
                            </Col>

                            <Col
                                md={{ span: 10, offset: 1 }}
                                lg={{ span: 7 }}
                                className="mx-auto my-auto text text-center"
                            >
                                <Container
                                    fluid
                                    className="my-auto bio-container"
                                >
                                    <p className="text-center">
                                        My love of food was kindled from a young
                                        age. Not only was I constantly gorged
                                        with food by my parents, but I fondly
                                        recall spending hours watching them cook
                                        and yearning for a early taste of what
                                        would be served for dinner that day.{" "}
                                    </p>
                                    <p className="text-center">
                                        However, my fascination with cooking
                                        wasn’t ignited until in high school,
                                        when I worked as a sushi chef part-timme
                                        in a local Japanese-American fusion
                                        restaurant. From stumbling into the
                                        restaurant at 7AM on Saturdays to
                                        prepare 50 lb of sushi rice to spending
                                        the next 7 hours actually preparing the
                                        sushi, the experience not only taught be
                                        perseverence and discipline, but also
                                        cultivated my passion. I would spend the
                                        next year and a half in the restaurant
                                        honing my skills and learning how to
                                        cook a variety of other Asian fusion
                                        dishes.{" "}
                                    </p>
                                    <p className="text-center">
                                        In college, I saw cooking and baking as
                                        a stress reliever (aka the start of my
                                        procrasti-baking), hobby and pastime to
                                        enjoy with friends, something that has
                                        continued to this day. Currently, I’m
                                        deeply embedded in my fermentation phase
                                        (thank Brad Leone) and love tinkering
                                        with recipes to fit my taste and style.
                                        I occassionally post on my food
                                        instagram, click here to take a look!
                                    </p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="contact" className="contact-cooking-wrapper">
                    <ContactPage isCooking={true}></ContactPage>
                </section>
            </div>
        </body>
    );
};

export default CookingPage;

const photos = [
    {
        src: require("../assets/images/cooking/fish1.jpg"),
        width: 4032,
        height: 3024,
    },

    {
        src: require("../assets/images/cooking/steak1.jpg"),
        width: 3024,
        height: 4032,
    },
    {
        src: require("../assets/images/cooking/bread1.jpg"),
        width: 4032,
        height: 3024,
    },
    {
        src: require("../assets/images/cooking/macaron1.jpg"),
        width: 2835,
        height: 2835,
    },
    {
        src: require("../assets/images/cooking/cake1.jpg"),
        width: 3024,
        height: 4032,
    },
    {
        src: require("../assets/images/cooking/fish1.jpg"),
        width: 4032,
        height: 3024,
    },

    {
        src: require("../assets/images/cooking/steak1.jpg"),
        width: 3024,
        height: 4032,
    },
    {
        src: require("../assets/images/cooking/bread1.jpg"),
        width: 4032,
        height: 3024,
    },
    {
        src: require("../assets/images/cooking/macaron1.jpg"),
        width: 2835,
        height: 2835,
    },
];

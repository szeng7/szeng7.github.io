import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Timeline from "../assets/components/Timeline.jsx";
import InterestsBar from "../assets/components/InterestsBar.jsx";
import CustomNavBar from "../assets/components/CustomNavBar.jsx";
import Sidebar from "../assets/components/Sidebar.jsx";
import ContactPage from "../assets/components/ContactPage.jsx";

const MainPage = () => {
    return (
        <div className="portfolio">
            <CustomNavBar></CustomNavBar>
            <Sidebar></Sidebar>
            <div className="portfolio-body">
                <section className="landing-wrapper">
                    <Container>
                        <Col>
                            <p className="text-name">Simon Zeng </p>
                            <p className="text-title">
                                Full Stack Developer <br></br>Interested In NLP
                                and Cloud
                            </p>
                        </Col>
                    </Container>
                </section>
                <section id="about" className="about-wrapper">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="title-wrapper">
                                    <h1 className="title">About Me</h1>
                                    <img
                                        className="title-line"
                                        src={require("../assets/icons/horizontal-line-short-gold.png")}
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
                                    src={require("../assets/images/portfolio/profpic.jpg")}
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
                                        Hi, my name is Simon! I’m currently a
                                        software engineer at Microsoft HQ in
                                        Redmond, Washington. My academic and
                                        career interests primarily revolve
                                        around Natural Language Processing,
                                        specifically in human language
                                        acquisition/computational language
                                        models and machine translation. Upon
                                        joining the industry, I’ve also
                                        developed a particular affinity for
                                        cloud computing resources and tools.{" "}
                                    </p>
                                    <p className="text-center bottom-p">
                                        Outside of my career, I enjoy cooking
                                        and baking, having worked as a sushi
                                        chef during high school. I am also fond
                                        of learning and studying new languages;
                                        in the past few years, I’ve picked up
                                        some elementary French and Spanish while
                                        furthering my proficiency in Mandarin
                                        Chinese. Take a look at my interests
                                        further below if you want to learn more!
                                    </p>
                                    <Button
                                        variant="resume"
                                        href={require("../assets/resources/SimonZengResumeSofDev.pdf")}
                                        download
                                    >
                                        Download Resume
                                    </Button>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="timeline" className="timeline-wrapper">
                    <Container>
                        <Row>
                            <Col>
                                <div className="title-wrapper">
                                    <h1 className="title">Timeline</h1>
                                    <img
                                        className="title-line"
                                        src={require("../assets/icons/horizontal-line-short-black.png")}
                                        alt="horizontal line"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Timeline timelineItems={timelineItems}></Timeline>
                </section>
                <section id="interests" className="interests-wrapper">
                    <Container>
                        <Row>
                            <Col>
                                <div className="title-wrapper">
                                    <h1 className="title">Interests</h1>
                                    <img
                                        className="title-line"
                                        src={require("../assets/icons/horizontal-line-short-black.png")}
                                        alt="horizontal line"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <InterestsBar></InterestsBar>
                </section>
                <section id="contact" className="contact-wrapper">
                    <ContactPage isCooking={false}></ContactPage>
                </section>
            </div>
        </div>
    );
};

export default MainPage;

/*
  Mappings of props to pass into components to display object dynamically more easily.
  Eventually put this into a database?
  */

const timelineItems = [
    {
        tab: "Microsoft",
        company: "Microsoft",
        title: "Software Engineer, August 2020 - Present",
        location: "Redmond, WA",
        description: "I am currently working on the Cloud Governance team where we create automated Azure solutions to enforce cloud configuration standards and reference architectures across enterprise software to improve the security posture of the applications and services that run Microsoft as a whole. My role is specifically in creating automations to enforce specific security standards, helping reduce vulnerabilities across the company and save manual engineering effort.",
        image: require("../assets/images/portfolio/microsoft.png"),
        firstLinkPath: null,
        firstLinkText: null,
        secondLinkPath: null,
        secondLinkText: null,
    },
    {
        tab: "Johns Hopkins",
        company: "Johns Hopkins University",
        title:
            "B.S. in Computer Science and Cognitive Science, graduated May 2020",
        location: "Baltimore, MD",
        description:
            "My academic focus was primarily in Natural Language Processing, resulting in a courseload rich with linguistics, artificial intelligence, probability & statistics and computer science. Although this resulted in the most academically rigorous years of my life, Johns Hopkins provided for me endless opportunities to expand the ceiling of my knowledge and passion while surrounding me with inspiring peers: something I’ll forever cherish and look fondly upon.",
        image: require("../assets/images/portfolio/jhu.png"),
        firstLinkPath: null,
        firstLinkText: null,
        secondLinkPath: null,
        secondLinkText: null,
    },
    {
        tab: "HLTCOE",
        company: "Human Language Technology Center of Excellence",
        title:
            "Visiting Researcher/Part-time Researcher, May 2019 - February 2020",
        location: "Baltimore, MD",
        description:
            "Over the summer, my team designed and constructed neural architectures to capture document-level ontologies to improve NER results through multi-task learning. We also improved multi-label topic identification F1 accuracies by 0.33 in Russian and 0.35 in Chinese using transfer learning and BERT embeddings. I continued this research independently, focusing on using deep metric learning to create document-level representations in low resource situations.",
        image: require("../assets/images/portfolio/hltcoe.png"),
        firstLinkPath: require("../assets/resources/hltcoe_poster.pdf"),
        firstLinkText: "See Poster",
        secondLinkPath: null,
        secondLinkText: null,
    },
    {
        tab: "Textron Systems",
        company: "Textron Systems",
        title: "Software Development Intern, August 2018 - May 2019",
        location: "Hunt Valley, MD",
        description:
            "My team investigated the usage of hyperspectral imaging in food allergen detection to create a commercially viable product. In doing so, we developed a pixel-by-pixel allergen detection algorithm that achieved 98% binary and 75% multinomial accuracy by using machine learning techniques. We then presented and created a web application displaying heatmaps of allergen probability distributions on images to provide estimated allergen location and amount.",
        image: require("../assets/images/portfolio/textron.png"),
        firstLinkPath: require("../assets/resources/textron_poster.pdf"),
        firstLinkText: "See Poster",
        secondLinkPath: require("../assets/resources/textron_heatmaps.pdf"),
        secondLinkText: "See Heatmaps",
    },
    {
        tab: "Bloomberg SPH",
        company: "Bloomberg School of Public Health",
        title: "Software Development Intern, May 2018 - August 2018",
        location: "Baltimore, MD",
        description:
            "Since this was my first software-related internship, this opportunity provided me my first dive into software development in the real world. I initially developed data analysis and maintenance tools utilized by the epidemiology department; however, near the end of my internship, I built and demonstrated prototypes of progressive web apps that addressed the issues the department was facing regarding data reliability and accuracy.",
        image: require("../assets/images/portfolio/bsph.png"),
        firstLinkPath: null,
        firstLinkText: null,
        secondLinkPath: null,
        secondLinkText: null,
    },
    {
        tab: "Mesquite HS",
        company: "Mesquite High School",
        title: "Class of 2016",
        location: "Gilbert, AZ",
        description:
            "At Mesquite, I was involved with the AP program as well as the Speech and Debate team and Tennis team. This culminated in graduating as Salutatorian with multiple honors and awards, most notably the 2016 Arizona Interscholastic Asssociation Student of the Year award, a distinction given to one graduating senior in the entire state annually.",
        image: require("../assets/images/portfolio/mhs.png"),
        firstLinkPath: null,
        firstLinkText: null,
        secondLinkPath: null,
        secondLinkText: null,
    },
];

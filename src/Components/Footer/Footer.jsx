import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import FooterItems from "./FooterItems";
import FooterLinks from "./FooterLinks";
import styles from "./Footer.module.scss";

const icons = [
    {
        id: 1,
        icon: "facebook"
    },
    {
        id: 2,
        icon: "twitter"
    },
    {
        id: 3,
        icon: "instagram"
    },
    {
        id: 4,
        icon: "youtube"
    }
]

const links = [
    {
        id: 1,
        name: "Home",
        url: "/"
    },
    {
        id: 2,
        name: "About Us",
        url: "/"
    },
    {
        id: 3,
        name: "Courses",
        url: "/"
    },
    {
        id: 4,
        name: "Pages",
        url: "/"
    },
    {
        id: 5,
        name: "Blog",
        url: "/"
    }
]

const infoLinks = [
    {
        id: 1,
        name: "Privacy Policy"
    },
    {
        id: 2,
        name: "Membership"
    },
    {
        id: 3,
        name: "Purchase Guide"
    },
    {
        id: 4,
        name: "Terms of Service"
    }
]

const contactLinks = [
    {
        id: 1,
        name: "Address",
        text: "123 Street, New York, USA"
    },
    {
        id: 2,
        name: "Phone",
        text: "+123 456 7890"
    },
    {
        id: 3,
        name: "Email",
        text: "JU9Kx@example.com"
    }
]

const Footer = () =>{
    return(
        <footer className={`${styles.footer} py-5`}>
            <Container>
                <Row>
                    <Col lg="3" md="6">
                        <h2 className={"d-flex align-items-center gap-2"}><i className={"ri-pantone-line"}></i> Learners.</h2>
                        <div className="follows">
                            <p className={"mb-0"}>
                                Follow Us On:
                            </p>
                            {icons.map((item, index) => (
                                <FooterItems key={item.id} {...item} />
                            ))}
                        </div>
                    </Col>
                    <Col lg="2" md="6">
                        <h6 className={"fw-bold"}>Explore</h6>
                        <ListGroup>
                            {
                                links.map((item, index) => (
                                    <FooterLinks key={item.id} {...item} />
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="6">
                        <h6 className={"fw-bold"}>Information</h6>
                        <ListGroup>
                            {
                                infoLinks.map((item, index) => (
                                    <FooterLinks key={item.id} {...item} />
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="4" md="6">
                        <h6 className={"fw-bold"}>Get in Touch</h6>
                        <ListGroup>
                            {
                                contactLinks.map((item, index) => (
                                    <FooterLinks key={item.id} {...item} />
                                ))
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
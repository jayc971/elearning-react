import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import aboutImg from '../../../Assests/Images/about-us.png';
import CountUp from "react-countup";
import styles from './AboutUs.module.scss';

const AboutUs = () =>{
    return(
        <section >
            <Container className={"mb-5"}>
                <Row >
                    <Col lg={"6"} md={"6"} >
                        <div className={styles.about__img}>
                            <img src={aboutImg} alt={""} className="w-100"/>
                        </div>
                    </Col>

                    <Col lg={"5"} md={"4"} className={"mt-3"}>
                        <div className={styles.about__content} >
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <Container className={"p-0"}>
                               <Row className={" align-items-center"}>
                                <Col className={styles.single__counter} >
                                    <span className={styles.counter}><CountUp start={0} end={49999} duration={10} delay={1} suffix={'+'}/></span>
                                    <p className="counter__title">Students Around The World</p>
                                </Col>
                                <Col className={styles.single__counter}>
                                    <span className={styles.counter}><CountUp start={0} end={99} duration={25} delay={1} suffix={'+'}/></span>
                                    <p className="counter__title">Projects Completed</p>
                                </Col> </Row>
                            </Container>

                            <Container className={"p-0"}>

                                <Row  className={" align-items-center"}>
                                    <Col className={styles.single__counter} >
                                        <span className={styles.counter}><CountUp start={0} end={999} duration={20} delay={1} suffix={'+'}/></span>
                                        <p className="counter__title">Graduations</p>
                                    </Col>
                                    <Col className={styles.single__counter}>
                                        <span className={styles.counter}><CountUp start={0} end={199} duration={9} delay={1} suffix={'+'}/></span>
                                        <p className="counter__title">Countries</p>
                                    </Col> </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutUs;
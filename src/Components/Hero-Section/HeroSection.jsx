import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../../Assests/Images/hero-img1.png';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
    return (
        <section className={styles.hero__section}>
            <Container>
                <Row>
                    <Col lg={'6'} md={'6'}>
                       <div>
                           <h2 className={"mb-4 mt-4"}>Learn and Earn<br/>with the Best<br/>Online Courses</h2>
                           <p className={"mb-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit, sed do eiusmod tempor incididunt ut<br/>labore et dolore magna aliqua.</p>
                            <div className={styles.search}>
                                <input className={styles.input} type="text" placeholder={'Search...'} />
                                <button className={styles.btn}><i className={"ri-search-line"}></i></button>
                            </div>
                       </div> </Col>
                    <Col lg={'6'} md={'6'}>
                        <img src={heroImg} alt="" className={`${styles.img} w-100`}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection;
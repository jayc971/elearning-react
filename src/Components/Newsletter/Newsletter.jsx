import React from 'react';
import styles from './Newsletter.module.scss';
import {Container, Col, Row} from 'reactstrap';

const Newsletter = () => {
    return(
        <section>
            <Container className={styles.newsletter}>
                <Row>
                <Col lg={"12"} className={"text-center "}>

                        <h2 >Subscribe to our Newsletter</h2>
                        <div className={`${styles.subscribe} d-flex justify-content-center`}>

                        <input className={`m-1 p-1 ${styles.input}`} type={"text"} placeholder={"Email"}/>
                        <button className={`m-1 btn ${styles.btn__subscribe}`}>Subscribe</button></div>

                </Col>  </Row>
            </Container>
        </section>
    )
}

export default Newsletter;
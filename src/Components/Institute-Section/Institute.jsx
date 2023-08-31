import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './Institute.module.scss';

const Institute = () => {
    return <section >
        <Container >


        <Row className={"mt-4 mb-5 py-4"}>
            <Col lg={'2'} md={'3'}>
                <h4 className={"d-flex align-items-center gap-1"}><i className={"ri-vimeo-line"}></i> Vimeo</h4>
            </Col>
            <Col lg={'2'} md={'3'}>
                <h4 className={"d-flex align-items-center gap-1"}><i className={"ri-pinterest-line"}></i> Pinterest</h4>
            </Col>
            <Col lg={'2'} md={'3'}>
                <h4 className={"d-flex align-items-center gap-1"}><i className={"ri-facebook-line"}></i> Facebook</h4>
            </Col>
            <Col lg={'2'} md={'3'}>
                <h4 className={"d-flex align-items-center gap-1"}><i className={"ri-twitter-line"}></i> Twitter</h4>
            </Col> <Col lg={'2'} md={'3'}>
            <h4 className={"d-flex align-items-center gap-1"}><i className={"ri-amazon-line"}></i> Amazon</h4>
        </Col> <Col lg={'2'} md={'3'}>
            <h4 className={"d-flex align-items-center gap-1"}><i className={"ri-youtube-line"}></i> YouTube</h4>
        </Col>
        </Row> </Container>
    </section>
};

export default Institute;
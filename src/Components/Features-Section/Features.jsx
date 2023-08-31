import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import FeatureCard from './FeatureCard';

const featureData = [
    {
        icon: 'draft',
        title: 'Quick Learning',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        icon: 'discuss',
        title: 'All Time Support',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        icon: 'contacts-book-2',
        title: 'Certification',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

const Features = () => {
    return (
        <section>
            <Container>
                <Row>

                        {featureData.map((feature, index) => (
                            <Col key={index} lg={'4'} md={'6'}>  <FeatureCard key={index} {...feature}/> </Col>
                        ))}


                </Row>
            </Container>
        </section>
    )
}

export default Features;
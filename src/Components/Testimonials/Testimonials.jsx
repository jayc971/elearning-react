import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import TestimonialCard from "./TestimonialCard";
import styles from "./TestimonialCard.module.scss";
import img from "../../Assests/Images/testimonial01.png";

import Slider from 'react-slick';

const testimonials = [
    {
        id: 1,
        title: 'I learned a lot',
        name: "John Doe",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "California, UK",

    },
    {
        id: 2,
        title: 'Good Course.. Recommended',
        name: "Michael Smith",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "New York, USA",
    },
    {
        id: 3,
        title: 'Excellent Course Materials',
        name: "Christopher Nolan",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "Melbourne, Australia",
    },
]

const Testimonials = () => {
    const settings =
        {
            infinite: true,
            speed: 100,
            dots: true,
            sliderToShow: 1,
            slidesToScroll: 1,
            autoPlay: true,
            autoPlaySpeed: 1000
        }
                        return (
                        <section>
                            <Container>
                                <Col lg={"10"} className={"m-auto mt-5"}>
                                    <Row>
                                        <div className={`${styles.testimonial__wrapper} d-flex justify-content-between align-items-center`}>

                                            <div className="testimonial__img w-50">
                                                <img className={"w-100"} src={img} alt=""/>
                                            </div>

                                            <div className="testimonial__content w-50 p-5">
                                                <h2 className={"mb-4 "}>Our Students Voice</h2>

                                                <Slider {...settings}>
                                                    {testimonials.map((item, index) => (
                                                        <TestimonialCard key={item.id} {...item} />
                                                    ))}
                                                </Slider>
                                            </div>

                                        </div>


                                    </Row>
                                </Col>
                            </Container>
                        </section>

    )
}

export default Testimonials;
import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import FreeCourseCard from "./FreeCourseCard";
import courseImg01 from '../../Assests/Images/web-development.png';
import courseImg02 from '../../Assests/Images/kids-learning.png';
import courseImg03 from '../../Assests/Images/seo.png';
import courseImg04 from '../../Assests/Images/ui-ux.png';

const courses = [
    {
        id: 1,
        title: 'Web Design BootCamp-2023 for Beginners',
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        students: 2.5,
        rating: 5.9,
        imgUrl: courseImg01
    },{
        id: 2,
        title: 'Web Design BootCamp-2023 for Beginners',
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        students: 2.5,
        rating: 5.9,
        imgUrl: courseImg02
    },{
        id: 3,
        title: 'Web Design BootCamp-2023 for Beginners',
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        students: 2.5,
        rating: 5.9,
        imgUrl: courseImg03
    },
    {
        id: 4,
        title: 'Web Design BootCamp-2023 for Beginners',
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        students: 2.5,
        rating: 5.9,
        imgUrl: courseImg04
    },
]

const FreeCourses = () =>{
    return(
        <section>
            <Container>
                <Row>
                    <Col lg={"12"} className={'text-center my-5'}>
                        <h2 className={"fw-bold"}>Our Free Courses</h2>
                    </Col>

                    {courses.map((item, index) => (
                        <Col key={index} lg={"3"} md={"6"} >
                            <FreeCourseCard key={index} {...item} />
                        </Col>
                    ))}


                </Row>
            </Container>
        </section>
    )

}

export default FreeCourses;
import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import courseImg1 from '../../Assests/Images/graphics-design.png';
import courseImg2 from '../../Assests/Images/web-design.png';
import courseImg3 from '../../Assests/Images/ui-ux.png';
import CourseCard from './CourseCard';
import styles from './Courses.module.scss';

const courseData = [
    {
        id: '1',
        title: 'Web Design BootCamp-2023 for Beginners',
        lessons: 12,
        students: 2.5,
        rating: 5.9,
        imgUrl: courseImg1
    },
    {
        id: '2',
        title: 'UI/UX BootCamp-2023 for Beginners',
        lessons: 20,
        students: 1.5,
        rating: 5.4,
        imgUrl: courseImg2
    },
    {
        id: '3',
        title: 'Graphic Designing BootCamp-2023 for Beginners',
        lessons: 5,
        students: 2.1,
        rating: 7.9,
        imgUrl: courseImg3
    },
]
const Courses = () => {
    return(
        <section>
            <Container>
                <Row>
                    <Col lg={"12"} className={"mb-4"}>
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-75">
                                <h2>Our Popular Courses</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid autem corporis culpa dolores inventore itaque iusto labore modi nam, necessitatibus, odio optio possimus quo recusandae reiciendis repudiandae sed tempore!
                                </p>
                            </div>
                            <div className={`w-50 text-end ${styles.see__all__parent}`}>
                                <button className={`btn ${styles.see__all}`}>See All</button>
                            </div>

                        </div>
                    </Col>
                        {courseData.map((item, index) => (
                            <Col key={index} lg={"4"} md={"4"}>
                            <CourseCard key={index} {...item}/> </Col>
                        ))}

                </Row>
            </Container>
        </section>
    )
}

export default Courses;
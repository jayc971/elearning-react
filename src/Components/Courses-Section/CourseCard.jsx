import React from 'react';
import styles from "./Courses.module.scss";

const CourseCard = ({imgUrl, title, lessons, students, rating}) => {
    return (
        <div className="single__course__item ">
            <div className="course__img">
                <img src={imgUrl} className={"w-100"} alt=""/>
            </div>
            <div className={`${styles.course__details} mt-3`}>
                <h5 className={`${styles.course__title} mb-4`}>
                    {title}
                </h5>
                <div className={"d-flex justify-content-between align-items-center mt-2"}>
                    <p className={`${styles.lessons} d-flex align-items-center gap-1`}>
                        <i className="ri-book-open-line"></i> {lessons}
                    </p>
                    <p className={`${styles.students} d-flex align-items-center gap-1`}>
                        <i className="ri-user-line"></i> {students}K
                    </p>
                </div>

                <div className={"d-flex justify-content-between align-items-center "}>
                    <p className={`${styles.rating} d-flex align-items-center gap-1`}>
                        <i className="ri-star-fill"></i> {rating}K
                    </p>
                    <p className={`${styles.enroll} d-flex align-items-center gap-1`}>
                        <a href={"#"}>Enroll Now</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;
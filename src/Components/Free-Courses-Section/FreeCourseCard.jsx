import React from 'react';
import styles from './FreeCourseCard.module.scss';

const  FreeCourseCard=({title,desc,students,rating,imgUrl})=>{
    return (
                        <div className={`${styles.single__free__course} w-100`}>
                            <div className={`${styles.free__course__img} mb-3`}>
                                <img src={imgUrl} alt="course" className={`w-100`} />
                                <button className={`${styles.free__btn}`}>
                                    Free
                                </button>
                            </div>
                            <div className={`${styles.free__course__details} `}>
                                <h6 >{title}</h6>

                                <div className={"d-flex justify-content-between w-100"}>
                                    <span className="d-flex align-items-center gap-2">
                                        <i className="ri-user-line"></i>{students}K
                                    </span>

                                    <span className="d-flex align-items-center gap-2">
                                        <i className="ri-star-fill"></i>{rating}K
                                    </span>
                                </div>

                                <p className={styles.course__desc}>{desc}</p></div>
                        </div>
    )
}

export default FreeCourseCard;
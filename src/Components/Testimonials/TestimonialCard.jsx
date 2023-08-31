import React from 'react';
import styles from './TestimonialCard.module.scss';


const TestimonialCard = ({name,desc, title, location}) => {

return(

                <div className={`${styles.single__testimonial} `}>
                    <h6  className={"fw-bold"}>{title}</h6>
                    <p>{desc}</p>
                    <div className="student__info">
                        <h6 className={" fw-bold"}>{name}</h6>
                        <p>{location}</p>
                    </div>
                </div>

)
}

export default TestimonialCard;
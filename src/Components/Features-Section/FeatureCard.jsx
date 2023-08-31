import React from 'react';
import styles from './FeatureCard.module.scss';


const Features = ({icon,title,desc}) => {
    return (

                            <div  className={`mt-5 ${styles.feature__card}`}>
                                <h2 className={'mb-3'}>
                                    <i className={`ri-${icon}-line`}></i>
                                </h2>
                                <h6 className={`my-3`}>{title}</h6>
                                <p>{desc}</p>
                            </div>
    )
}
export default Features;
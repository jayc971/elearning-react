import React, {useState, useRef} from 'react';
import {Container, Row, Col} from 'reactstrap';
import img from '../../Assests/Images/why-choose-us.png';
import styles from './ChooseUs.module.scss';
import ReactPlayer from 'react-player';

const ChooseUs = () => {

    const playBtn = useRef();

    const hidePlayBtn = () => {
        playBtn.current.classList.add(styles.hide);
    }

    const [vid, setVid] = useState(false);

    return(
        <section>
            <Container>
                <Row  className={"my-5"}>
                    <Col lg={"6"}>
                        <div className={styles.choose__content}>
                            <h2>Why Choose Us?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>

                    <Col lg={"6"}>
                        <div className={styles.choose__img} >

                            {
                                vid ? (<ReactPlayer width='100%' url='https://www.youtube.com/watch?v=LG3L6J07g0Q' controls/>) : (<img src={img} alt="" className="w-100"/>)
                            }

                            <span className={styles.play__icon} ref={playBtn} onClick={hidePlayBtn}>
                                <i className={"ri-play-circle-line"} onClick={() => setVid(!vid)}></i>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ChooseUs;
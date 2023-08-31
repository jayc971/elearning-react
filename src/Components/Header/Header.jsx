import React, {useRef} from 'react';
import {Container} from 'reactstrap';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';

const navLinks = [
    {
        display: "Home",
        url: '#'
    },{
        display: "About",
        url: '#'
    },{
        display: "Courses",
        url: '#'
    },{
        display: "Pages",
        url: '#'
    },{
        display: "Blog",
        url: '#'
    }
]


const navLinksStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none"}

const Header = () => {

    const navRef = useRef();
    const navRight = useRef();

    const toggleMenu = () =>{
        navRef.current.classList.toggle(styles.active__menu);
        navRight.current.classList.toggle(styles.nav__right);
    }


    return (

        <header className={styles.header}>
            <Container>
                <div className={"navigation d-flex align-items-center justify-content-between"}>
                    <div className={styles.logo}>
                        <h2 className={"d-flex align-items-center gap-2"}>
                            <i className={"ri-pantone-line"}></i>Learners.
                        </h2>
                    </div>
                    <div className="nav d-flex align-items-center gap-5">
                        <div className={styles.nav__menu} ref={navRef} onClick={toggleMenu}>
                            <ul className={styles.nav__list}>
                                    {
                                        navLinks.map((item, index) => (
                                            <li key={index} className={styles.nav__item}><a href={item.url}>{item.display}</a></li>
                                        ))
                                    }
                                <div className={`${styles.nav__right} d-flex align-items-center gap-2`} ref={navRight}>

                                    <Link to={"/login"} style={navLinksStyle}  className={styles.login__btn__link}><span  className={styles.login__btn__parent}><button className={`btn ${styles.btn__login}`}>Login</button></span></Link>
                                    <Link to={"/signup"} style={navLinksStyle} className={styles.signup__btn__link}><span className={styles.nav__item}><a>Sign Up</a></span></Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div  className={styles.mobile__menu} onClick={()=>{toggleMenu()}}>
                        <span><i className="ri-menu-line"></i></span>
                    </div>

                </div>
            </Container>
        </header>
   );
};

export default Header;

import styles from './Login.module.scss';
import React, { useState } from 'react';
import Modal from "../../Components/Modal/Modal";
import {Link, Form} from "react-router-dom";

function Login(){
    const [isModalOpen, setIsModalOpen] = useState(true);
    function closeModalHandler(){
        setIsModalOpen(false);
    }
    return<>
        {isModalOpen &&
            <Modal onClick={closeModalHandler}>

                <Form method={'post'} className={`${styles.form} w-100`} >
                    <div className={"d-flex align-items-center gap-2 w-100 justify-content-center pb-2"}> <h5>Login</h5></div>
                    <p  className={"d-flex gap-2"}>
                        <i className={"ri-user-line"}></i><input id={"body"} name={"body"} required/>
                    </p>
                    <p className={"d-flex gap-2"}>
                        <i className={"ri-lock-line"}></i><input id={"name"} type={"text"} name={"author"} required/>
                    </p>
                    <p className={styles.actions}>
                        <Link   className={`${styles.cancel}`} to={".."} type={"button"}>Cancel</Link>
                        <button className={styles.button}>Login</button>
                    </p>
                </Form></Modal>}
    </>
}
export default Login;
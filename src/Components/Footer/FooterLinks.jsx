import React from 'react';
import {ListGroupItem} from 'reactstrap';
import styles from "./Footer.module.scss";

const FooterLinks = ({url,id,name,text}) => {

    return (
        <ListGroupItem key={id} className={`d-flex align-items-center gap-2 border-0 ps-0 bg-transparent`}>
            <a className={`text-decoration-none ${styles.link}`} href={url}>{name}</a> <a >{text}</a>
        </ListGroupItem>

    );
}

export default FooterLinks;
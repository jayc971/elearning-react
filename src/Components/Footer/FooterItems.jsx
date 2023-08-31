import React from 'react';


const FooterItems = ({icon}) => {

    return (
        <span >
                                <a ><i className={`ri-${icon}-line`}></i></a>
                            </span>
    );
}

export default FooterItems;
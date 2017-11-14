import React from 'react';

export default ({type, children, onClick}) => {
    return (<button type={type} onClick={onClick}>{children}</button>);
}
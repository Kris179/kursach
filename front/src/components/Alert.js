import {createPortal} from "react-dom";
import React, {useEffect, useState} from 'react';
import '../styles/globalStyles.css'

const Alert = ({isOpen, title, description}) => {

    if (isOpen)
    return createPortal(<div className={'warning-alert'}>
        <div style={{fontWeight: 'bold'}}>
            {title}
        </div>
        <div>
            {description}
        </div>
    </div>, document.getElementById('portal'))
    else return null
}

export default Alert
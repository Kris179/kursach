import * as React from 'react';
import photo from "./img/home1.png";
const For_whom = () => {
    let photo = require('./img/whom.png');
    return (
        <div className={'block1'} style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            </div>
    );
    }

    export default For_whom;

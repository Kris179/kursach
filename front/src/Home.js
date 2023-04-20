import * as React from 'react';
import FormAuth from './components/FormRegister';


function BlockWithImageAndText() {
    let photo = require('./img/home.png');
    return (
        <div style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px', // высота блока
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div>
                <h2>Скидка -15% на первый заказ</h2>
            </div>
        </div>
    );
}

export default BlockWithImageAndText;
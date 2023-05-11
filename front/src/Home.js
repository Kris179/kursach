import * as React from 'react';
import './styles/globalStyles.css'
import Catalog from "./Catalog";
import FormAuth from "./components/FormAuth";
import Catalogue from "./Catalog";
import CatalogueCards from "./components/CatalogCards";
import CatalogCards from "./components/CatalogCards";
import photo from "./img/home1.png";
import FormPr from "./components/Product";


function Home() {
    let photo = require('./img/home1.png');
    let photo1 = require('./img/Мишка.png');
    return (
        <div>
        <div className={'block1'} style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div>
                <p className={'h'}> MY PARFUME </p>
                <p className={'home'}> Oткройте для себя новый лимитированный <br /> аромат, который наилучшим образом <br /> подчеркнет элегантность.</p>
            </div>
        </div>

            <div className={'block2'}>
                <div>
                    <h2> Популярное </h2>
                    <p> Изысканные композиции, парфюмированные продукты и туалетная вода </p>
                    <CatalogCards type={'min'}/>
            </div>

            </div>

            <div className={'block3'}>
                <div style={{width:'50%'}}>
                    <div><h1>Moschino TOY 2</h1> </div>
                    <div> <p>Культовый аромат от Moschino в виде плюшевого мишки возвращается! Второй эксклюзивный запуск, на этот раз – в стеклянном флаконе.</p></div>
                    <div><button className={'detailed'}>Узнать больше</button> </div>
                </div>
                <div style={{margin:'0 auto'}}>
                    <img src={photo1}/>

                </div>

            </div>
            <FormPr/>
        </div>
    );
}



export default Home;
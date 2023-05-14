import * as React from 'react';
import Man from './img/for_man.png';
import Woman from './img/for_woman.png';
const ForWhom = () => {
    return (
      <div className="forwhom_cont">
        <div className="forman">
          <img className="forman_img" src={Man} alt="Man"/>
          {/* <div className="forwhom_description">
            <h2 className="forwhom_description_title">Для мужчин</h2>
            <p className="forwhom_description_subtitle">Мы предлагаем широкий выбор ароматов, созданных специально для мужчин, которые хотят выразить свою мужественность и уверенность в себе.</p>
            <p className="forwhom_description_subtitle">Мы уверены, что наша коллекция духов поможет вам подчеркнуть вашу мужественность, придать уверенности в себе и создать неповторимый образ. Независимо от того, ищете ли вы свежий и легкий аромат на каждый день или же роскошный и изысканный аромат на особый случай, вы найдете его у нас.</p>
            <p className="forwhom_description_subtitle">Покупая духи в нашем магазине, вы можете быть уверены, что получите только оригинальную продукцию высокого качества. Мы гарантируем быструю доставку и профессиональный сервис.
                Не упустите возможность выразить свою мужественность и силу с нашими ароматами
                для успешных мужчин.</p>
            <button className="forwhom_description_button">Перейти к каталогу</button>
          </div> */}
          <p className="title forman_title">for man</p>
        </div>
        <div className="forwoman">
          <img className="forman_img" src={Woman} alt="Man" />
          <p className="title forwoman_title">woman</p>
        </div>
        <div className="forwhom_circle">
          <p className="forwhom_text">п</p>
          <p className="forwhom_text">о</p>
          <p className="forwhom_text">д</p>
          <p className="forwhom_text">б</p>
          <p className="forwhom_text">е</p>
          <p className="forwhom_text">р</p>
          <p className="forwhom_text">и</p>
        
          <p className="forwhom_text">д</p>
          <p className="forwhom_text">у</p>
          <p className="forwhom_text">х</p>
          <p className="forwhom_text">и</p>
        
          <p className="forwhom_text">п</p>
          <p className="forwhom_text">о</p>
          <p className="forwhom_text">д</p>

          <p className="forwhom_text">с</p>
          <p className="forwhom_text">е</p>
          <p className="forwhom_text">б</p>
          <p className="forwhom_text">я</p>
      </div>
      </div>
    );
    }

    export default ForWhom;

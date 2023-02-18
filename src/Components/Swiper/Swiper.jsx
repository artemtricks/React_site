import { Navigation, Scrollbar, A11y } from 'swiper';
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import html from '../../assets/html5.jpg';
import css from '../../assets/css.jpg';
import js from '../../assets/js.jpg';
import react from '../../assets/react.jpg';
import ts from '../../assets/typescript.jpg';
import figma from '../../assets/figma.png';
import bootstrap from '../../assets/bootstrap.png';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      className='Swiper'
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <h1 className='title'>Это сайт для обучения</h1>
        <p>Чтобы лучше понимать как все работает <br/>
        А также чтобы показать что я умею
        </p>
        
        </SwiperSlide>
      <SwiperSlide><img className='img' alt='html' src={html} />
      <p className='descr'>Cайты и лендинги по макетам и без</p></SwiperSlide>
      <SwiperSlide><img className='img' alt='css' src={css} />
      <p className='descr'>CSS</p></SwiperSlide>
      <SwiperSlide><img className='img' alt='js' src={js} />
      <p className='descr'>JavaScript</p></SwiperSlide>
      <SwiperSlide><img className='img' alt='html' src={ts} />
      <p className='descr'>TypeScript</p></SwiperSlide>
      <SwiperSlide><img className='img' alt='html' src={react} />
      <p className='descr'>React</p></SwiperSlide>
      <SwiperSlide><img className='img' alt='html' src={figma} />
      <p className='descr'>Figma</p></SwiperSlide>
      <SwiperSlide><img className='img' alt='html' src={bootstrap} />
      <p className='descr'>Bootstrap</p></SwiperSlide>

    </Swiper>
  );
};
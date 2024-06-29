import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './artistasRecomendados.css'
import { Autoplay, Navigation } from 'swiper/modules';

export const ArtistasRecomendados = () => {
  return (
    <div className="container-artistas-recomendados">
        <h2>Recommended Artist</h2>
        <Swiper
            className="artistas-recomendados-slider"
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Autoplay,Navigation]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            }}
        >
            <SwiperSlide className="artistas-recomendados-item">
                <div className="slide-content">
                    <img src="images/logo1.png" alt="artistas" className="artista-img" />
                    <p className="slide-text-artistas">SEVENTEEN</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="artistas-recomendados-item">
                <div className="slide-content">
                    <img src="images/logo2.png" alt="artistas" className="artista-img" />
                    <p className="slide-text-artistas">NOMBRE2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="artistas-recomendados-item">
                <div className="slide-content">
                    <img src="images/logo3.png" alt="artistas" className="artista-img" />
                    <p className="slide-text-artistas">NOMBRE3</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="artistas-recomendados-item">
                <div className="slide-content">
                    <img src="images/logo4.png" alt="artistas" className="artista-img" />
                    <p className="slide-text-artistas">NOMBRE4</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="artistas-recomendados-item">
                <div className="slide-content">
                    <img src="images/logo5.png" alt="artistas" className="artista-img" />
                    <p className="slide-text-artistas">NOMBRE5</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

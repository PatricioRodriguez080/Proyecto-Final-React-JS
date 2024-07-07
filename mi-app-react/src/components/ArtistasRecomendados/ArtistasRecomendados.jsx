import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './artistasRecomendados.css';
import { Autoplay, Navigation } from 'swiper/modules';

export const ArtistasRecomendados = ({ grupos }) => {
    return (
        <div className="container-artistas-recomendados">
            <h2>Recommended Artists</h2>
            <Swiper
                className="artistas-recomendados-slider"
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                modules={[Autoplay, Navigation]}
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
                {grupos.map((grupo) => (
                    <SwiperSlide key={grupo} className="artistas-recomendados-item">
                        <div className="slide-content">
                            <img src={`images/logo${grupo}.png`} alt={grupo} className="artista-img" />
                            <p className="slide-text-artistas">{grupo}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

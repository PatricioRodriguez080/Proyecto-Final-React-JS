import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carrousel.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Carrousel = () => {
    return (
        <div className="container-carrousel">
            <Swiper
                className="testimonials-slider"
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide className="testimonials-item">
                    <div className="slide-content">
                        <img src="images/imagen1.png" alt="cliente" />
                        <p className="slide-text">SEVENTEEN TOUR [FOLLOW] TO SEOUL DIGITAL CODE</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="testimonials-item">
                    <div className="slide-content">
                        <img src="images/imagen2.png" alt="cliente" />
                        <p className="slide-text">Bunnies Camp</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="testimonials-item">
                    <div className="slide-content">
                        <img src="images/imagen3.png" alt="cliente" />
                        <p className="slide-text">NCT WISH The 2nd Single [Songbird]</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import '../styles/Banner.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation,Autoplay,Pagination,Scrollbar,A11y } from 'swiper/modules';
export default function Banner() {
    const banners = [
        { id: 1, src: '/images/banner.png', alt: 'Banner 1' },
        { id: 2, src: '/images/banner2.jpg', alt: 'Banner 2' },
    ];
    return (
        <div className="banner-slider" style={{paddingTop:'100px'}}>
            <Swiper
                modules={[Navigation,Pagination,A11y,Autoplay]}
                spaceBetween={0} 
                slidesPerView={1} 
                autoplay={{ delay: 2000 }}
                navigation
                pagination={{clickable:true,}}
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <img className='img-fluid' src={banner.src} alt={banner.alt} style={{ width: '100%' }} />
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    )
}
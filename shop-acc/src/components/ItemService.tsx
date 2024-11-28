import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import '../styles/Banner.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/ItemService.css'
const ItemService = () => {
    const services = [
        { id: 1, src: '/images/dv1.gif', alt: 'service 1' },
        { id: 2, src: '/images/dv2.gif', alt: 'service 2' },
        { id: 3, src: '/images/dv3.gif', alt: 'service 3' },
        { id: 4, src: '/images/dv1.gif', alt: 'service 1' },
        { id: 5, src: '/images/dv2.gif', alt: 'service 2' },
        { id: 6, src: '/images/dv3.gif', alt: 'service 3' },

    ];
    return (
        <div className="banner-slider-service">
            <Swiper
                spaceBetween={30} // Khoảng cách giữa các slide
                slidesPerView={4} // Số lượng slide hiển thị cùng lúc
                autoplay={{ delay: 2000 }} // Tự động chuyển slide sau mỗi 3 giây
            >
                {services.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className='box-img'>
                            <img className='img-fluid' src={banner.src} alt={banner.alt} style={{ width: '100%' }} />
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}
export default ItemService;
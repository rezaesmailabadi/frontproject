import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

export default function NewestAds() {
    // return (
    //     <Carousel>
    //         <div className="featured">
    //             <div className="featured-image">
    //                 <a href="details.html"><img src="images/featured/1.jpg" alt="" className="img-fluid" /></a>
    //                 <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="تایید شده"><i className="fa fa-check-square-o"></i></a>
    //             </div>
    //             <div className="ad-info">
    //                 <h3 className="item-price">  8000 تومان  </h3>
    //                 <h4 className="item-title"><a href="#">اپل مک بوک پرو</a></h4>
    //                 <div className="item-cat">
    //                     <span><a href="./details.html">دستگاه‌های دیجیتال  و گجت‌ها</a></span>
    //                 </div>
    //             </div>
    //             <div className="ad-meta">
    //                 <div className="meta-content">
    //                     <span className="dated"><a href="#">7 مهر، 10:10 بعد از ظهر</a></span>
    //                 </div>
    //                 <div className="user-option pull-right">
    //                     <a href="#" data-toggle="tooltip" data-placement="top" title="ایران- تهران"><i className="fa fa-map-marker"></i> </a>
    //                     <a href="#" data-toggle="tooltip" data-placement="top" title="فروشنده"><i className="fa fa-suitcase"></i> </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </Carousel>
    // )
    return (
        <Swiper
            // spaceBetween={10}
            // slidesPerView={3}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                }
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="featured">
                    <div className="featured-image">
                        <Link to="/details/:id"><img src="/images/featured/1.jpg" alt="" className="img-fluid" /></Link>
                        <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="تایید شده"><i className="fa fa-check-square-o"></i></a>
                    </div>
                    <div className="ad-info">
                        <h3 className="item-price">  8000 تومان  </h3>
                        <h4 className="item-title"><a href="#">اپل مک بوک پرو</a></h4>
                        <div className="item-cat">
                            <span><a href="#">دستگاه‌های دیجیتال  و گجت‌ها</a></span>
                        </div>
                    </div>
                    <div className="ad-meta">
                        <div className="meta-content">
                            <span className="dated"><a href="#">7 مهر، 10:10 بعد از ظهر</a></span>
                        </div>
                        <div className="user-option pull-right">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="ایران- تهران"><i className="fa fa-map-marker"></i> </a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="فروشنده"><i className="fa fa-suitcase"></i> </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="featured">
                    <div className="featured-image">
                        <Link to="/details/:id"><img src="/images/featured/1.jpg" alt="" className="img-fluid" /></Link>
                        <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="تایید شده"><i className="fa fa-check-square-o"></i></a>
                    </div>
                    <div className="ad-info">
                        <h3 className="item-price">  8000 تومان  </h3>
                        <h4 className="item-title"><a href="#">اپل مک بوک پرو</a></h4>
                        <div className="item-cat">
                            <span><a href="#">دستگاه‌های دیجیتال  و گجت‌ها</a></span>
                        </div>
                    </div>
                    <div className="ad-meta">
                        <div className="meta-content">
                            <span className="dated"><a href="#">7 مهر، 10:10 بعد از ظهر</a></span>
                        </div>
                        <div className="user-option pull-right">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="ایران- تهران"><i className="fa fa-map-marker"></i> </a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="فروشنده"><i className="fa fa-suitcase"></i> </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="featured">
                    <div className="featured-image">
                        <Link to="/details/:id"><img src="/images/featured/1.jpg" alt="" className="img-fluid" /></Link>

                        <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="تایید شده"><i className="fa fa-check-square-o"></i></a>
                    </div>
                    <div className="ad-info">
                        <h3 className="item-price">  8000 تومان  </h3>
                        <h4 className="item-title"><a href="#">اپل مک بوک پرو</a></h4>
                        <div className="item-cat">
                            <span><a href="#">دستگاه‌های دیجیتال  و گجت‌ها</a></span>
                        </div>
                    </div>
                    <div className="ad-meta">
                        <div className="meta-content">
                            <span className="dated"><a href="#">7 مهر، 10:10 بعد از ظهر</a></span>
                        </div>
                        <div className="user-option pull-right">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="ایران- تهران"><i className="fa fa-map-marker"></i> </a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="فروشنده"><i className="fa fa-suitcase"></i> </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="featured">
                    <div className="featured-image">
                        <Link to="/details/:id"><img src="/images/featured/1.jpg" alt="" className="img-fluid" /></Link>

                        <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="تایید شده"><i className="fa fa-check-square-o"></i></a>
                    </div>
                    <div className="ad-info">
                        <h3 className="item-price">  8000 تومان  </h3>
                        <h4 className="item-title"><a href="#">اپل مک بوک پرو</a></h4>
                        <div className="item-cat">
                            <span><a href="#">دستگاه‌های دیجیتال  و گجت‌ها</a></span>
                        </div>
                    </div>
                    <div className="ad-meta">
                        <div className="meta-content">
                            <span className="dated"><a href="#">7 مهر، 10:10 بعد از ظهر</a></span>
                        </div>
                        <div className="user-option pull-right">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="ایران- تهران"><i className="fa fa-map-marker"></i> </a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="فروشنده"><i className="fa fa-suitcase"></i> </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="featured">
                    <div className="featured-image">
                        <Link to="/details/:id"><img src="/images/featured/1.jpg" alt="" className="img-fluid" /></Link>

                        <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="تایید شده"><i className="fa fa-check-square-o"></i></a>
                    </div>
                    <div className="ad-info">
                        <h3 className="item-price">  8000 تومان  </h3>
                        <h4 className="item-title"><a href="#">اپل مک بوک پرو</a></h4>
                        <div className="item-cat">
                            <span><a href="#">دستگاه‌های دیجیتال  و گجت‌ها</a></span>
                        </div>
                    </div>
                    <div className="ad-meta">
                        <div className="meta-content">
                            <span className="dated"><a href="#">7 مهر، 10:10 بعد از ظهر</a></span>
                        </div>
                        <div className="user-option pull-right">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="ایران- تهران"><i className="fa fa-map-marker"></i> </a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="فروشنده"><i className="fa fa-suitcase"></i> </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="featured">
                    <div className="featured-image">
                        <Link to="/details/:id"><img src="/images/featured/1.jpg" alt="" className="img-fluid" /></Link>

                        <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="تایید شده"><i className="fa fa-check-square-o"></i></a>
                    </div>
                    <div className="ad-info">
                        <h3 className="item-price">  8000 تومان  </h3>
                        <h4 className="item-title"><a href="#">اپل مک بوک پرو</a></h4>
                        <div className="item-cat">
                            <span><a href="#">دستگاه‌های دیجیتال  و گجت‌ها</a></span>
                        </div>
                    </div>
                    <div className="ad-meta">
                        <div className="meta-content">
                            <span className="dated"><a href="#">7 مهر، 10:10 بعد از ظهر</a></span>
                        </div>
                        <div className="user-option pull-right">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="ایران- تهران"><i className="fa fa-map-marker"></i> </a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="فروشنده"><i className="fa fa-suitcase"></i> </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

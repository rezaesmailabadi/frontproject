import React from 'react'
import Advertising from '../../components/Advertising'
import SomthingSell from '../../components/SomthingSell'

export default function Details() {
    return (
        <>

            <section id="main" class="clearfix details-page">
                <div class="container">
                    <div class="breadcrumb-section">

                        <ol class="breadcrumb">
                            <li><a href="index.html">خانه</a></li>
                            <li><a href="#">کالاهای دیجیتال و گجت</a></li>
                            <li>تلفن همراه</li>
                        </ol>
                        <h2 class="title">گوشی موبایل</h2>
                    </div>

                    <div class="section banner">

                        <div class="banner-form banner-form-full">
                            <form action="#">

                                <div class="dropdown category-dropdown">
                                    <a data-toggle="dropdown" href="#"><span class="change-text">انتخاب دسته‌بندی</span> <i class="fa fa-angle-down"></i></a>
                                    <ul class="dropdown-menu category-change">
                                        <li><a href="#">مد و زیبایی</a></li>
                                        <li><a href="#">ماشین و وسایل نقلیه</a></li>
                                        <li><a href="./details.html">دستگاه‌های دیجیتال  و گجت‌ها</a></li>
                                        <li><a href="#">املاک</a></li>
                                        <li><a href="#">ورزشی و بازی</a></li>
                                    </ul>
                                </div>


                                <div class="dropdown category-dropdown language-dropdown ">
                                    <a data-toggle="dropdown" href="#"><span class="change-text">ایران</span> <i class="fa fa-angle-down"></i></a>
                                    <ul class="dropdown-menu  language-change">
                                        <li><a href="#">ایران</a></li>
                                        <li><a href="#">عراق</a></li>
                                        <li><a href="#">چین</a></li>
                                        <li><a href="#">روسیه</a></li>
                                    </ul>
                                </div>

                                <input type="text" class="form-control" placeholder="عبارت مورد نظر خود را تایپ کنید" />
                                <button type="submit" class="form-control" value="Search">جستجو</button>
                            </form>
                        </div>
                    </div>


                    <div class="section slider">
                        <div class="row">

                            <div class="col-lg-7">
                                <div id="product-carousel" class="carousel slide" data-ride="carousel">

                                    <ol class="carousel-indicators">
                                        <li data-target="#product-carousel" data-slide-to="0" class="active">
                                            <img src="images/slider/list-1.jpg" alt="Carousel Thumb" class="img-fluid" />
                                        </li>
                                        <li data-target="#product-carousel" data-slide-to="1">
                                            <img src="images/slider/list-2.jpg" alt="Carousel Thumb" class="img-fluid" />
                                        </li>
                                        <li data-target="#product-carousel" data-slide-to="2">
                                            <img src="images/slider/list-3.jpg" alt="Carousel Thumb" class="img-fluid" />
                                        </li>
                                        <li data-target="#product-carousel" data-slide-to="3">
                                            <img src="images/slider/list-4.jpg" alt="Carousel Thumb" class="img-fluid" />
                                        </li>
                                        <li data-target="#product-carousel" data-slide-to="4">
                                            <img src="images/slider/list-5.jpg" alt="Carousel Thumb" class="img-fluid" />
                                        </li>
                                    </ol>


                                    <div class="carousel-inner" role="listbox">

                                        <div class="item carousel-item active">
                                            <div class="carousel-image">

                                                <img src="images/slider/1.jpg" alt="Featured Image" class="img-fluid" />
                                            </div>
                                        </div>


                                        <div class="item carousel-item">
                                            <div class="carousel-image">

                                                <img src="images/slider/2.jpg" alt="Featured Image" class="img-fluid" />
                                            </div>
                                        </div>


                                        <div class="item carousel-item">
                                            <div class="carousel-image">

                                                <img src="images/slider/3.jpg" alt="Featured Image" class="img-fluid" />
                                            </div>
                                        </div>


                                        <div class="item carousel-item">
                                            <div class="carousel-image">

                                                <img src="images/slider/4.jpg" alt="Featured Image" class="img-fluid" />
                                            </div>
                                        </div>


                                        <div class="item carousel-item">
                                            <div class="carousel-image">

                                                <img src="images/slider/5.jpg" alt="Featured Image" class="img-fluid" />
                                            </div>
                                        </div>
                                    </div>


                                    <a class="left carousel-control" href="#product-carousel" role="button" data-slide="prev">
                                        <i class="fa fa-chevron-left"></i>
                                    </a>
                                    <a class="right carousel-control" href="#product-carousel" role="button" data-slide="next">
                                        <i class="fa fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>


                            <div class="col-lg-5">
                                <div class="slider-text">
                                    <h2>88000تومان </h2>
                                    <h3 class="title">گوشی آیفون اپل  6، 16 گیگ</h3>
                                    <p><span>آگهی‌دهنده: <a href="#">مینا مانا</a></span>
                                        <span>شناسه آگهی:<a href="#" class="time"> 251716763</a></span></p>
                                    <span class="icon"><i class="fa fa-clock-o"></i><a href="#">7 مهر 1399 - 10:10 بعدازظهر</a></span>
                                    <span class="icon"><i class="fa fa-map-marker"></i><a href="#">ایران- تهران</a></span>
                                    <span class="icon"><i class="fa fa-suitcase online"></i><a href="#">فروشنده<strong>(آنلاین)</strong></a></span>


                                    <div class="short-info">
                                        <h4>اطلاعات کوتاه</h4>
                                        <p><strong>وضعیت: </strong><a href="#">جدید</a> </p>
                                        <p><strong>برند: </strong><a href="#">اپل</a> </p>
                                        <p><strong>ویژگی‌ها: </strong><a href="#">دوربین,</a> <a href="#">دو درگاه,</a> <a href="#">GSM,</a> <a href="#">لمسی</a> </p>
                                        <p><strong>مدل: </strong><a href="#">iPhone 6</a></p>
                                    </div>


                                    <div class="contact-with">
                                        <h4>اطلاعات تماس </h4>
                                        <span class="btn btn-red show-number">
                                            <i class="fa fa-phone-square"></i>
                                            <span class="hide-text">برای مشاهده شماره تماس کلیک کنید</span>
                                            <span class="hide-number">012-1234567890 </span>
                                        </span>
                                        <a href="#" class="btn"><i class="fa fa-envelope-square"></i>تماس با ایمیل</a>
                                    </div>


                                    <div class="social-links">
                                        <h4>اشتراک آگهی</h4>
                                        <ul class="list-inline">
                                            <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus-square"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                            <li><a href="#"><i class="fa fa-pinterest-square"></i></a></li>
                                            <li><a href="#"><i class="fa fa-tumblr-square"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="description-info">
                        <div class="row">

                            <div class="col-md-8">
                                <div class="description">
                                    <h4>توضیحات</h4>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد </p><br />
                                    <p>و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد</p>
                                </div>
                            </div>


                            <div class="col-md-4">
                                <div class="short-info">
                                    <h4>اطلاعات کوتاه</h4>

                                    <ul>
                                        <li><i class="fa fa-shopping-cart"></i><a href="#">تحویل:رودررو</a></li>
                                        <li><i class="fa fa-user-plus"></i><a href="#">آگهی های بیشتر از <span>مینا مانا</span></a></li>
                                        <li><i class="fa fa-print"></i><a href="#">پرینت آگهی</a></li>
                                        <li><i class="fa fa-reply"></i><a href="#">ارسال به دوستان</a></li>
                                        <li><i class="fa fa-heart-o"></i><a href="#">ذخیره به عنوان موردپسند</a></li>
                                        <li><i class="fa fa-exclamation-triangle"></i><a href="#">گزارش آگهی</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="recommended-info">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="section recommended-ads">
                                    <div class="featured-top">
                                        <h4>توصیه شده برای شما</h4>
                                    </div>

                                    <Advertising />
                                </div>
                            </div>

                            <div class="col-md-4 text-center">
                                <div class="recommended-cta">
                                    <div class="cta">

                                        <div class="single-cta">

                                            <div class="cta-icon icon-secure">
                                                <img src="images/icon/13.png" alt="Icon" class="img-fluid" />
                                            </div>

                                            <h4>خرید و فروش امن</h4>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                        </div>


                                        <div class="single-cta">

                                            <div class="cta-icon icon-support">
                                                <img src="images/icon/14.png" alt="Icon" class="img-fluid" />
                                            </div>

                                            <h4>پشتیبانی 24/7</h4>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                        </div>



                                        <div class="single-cta">

                                            <div class="cta-icon icon-trading" >
                                                <img src="images/icon/15.png" alt="Icon" class="img-fluid" />
                                            </div>

                                            <h4>خرید و فروش آسان</h4>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                        </div>


                                        <div class="single-cta">
                                            <h5>کمک نیاز دارید؟</h5>
                                            <p><span>با ما تماس بگیرید</span><a href="tellto:08048100000"> 08048100000</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SomthingSell />
        </>
    )
}

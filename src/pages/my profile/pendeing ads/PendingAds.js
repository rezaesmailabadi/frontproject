import React from 'react'
import Advertising from '../../../components/Advertising'

export default function PendingAds() {
    return (
        <section id="main" class="clearfix myads-page">
            <div class="container">

                <div class="breadcrumb-section">

                    <ol class="breadcrumb">
                        <li><a href="index.html">خانه</a></li>
                        <li>افزودن آگهی</li>
                    </ol>
                    <h2 class="title">آگهی‌های من</h2>
                </div>

                <div class="ad-profile section">
                    <div class="user-profile">
                        <div class="user-images">
                            <img src="images/user.jpg" alt="User Images" class="img-fluid"/>
                        </div>
                        <div class="user">
                            <h2>سلام, <a href="#">ایمان عزیز</a></h2>
                            <h5>آخرین ورود شما سه‌شنبه ، 21 اردیبهشت 1399</h5>
                        </div>

                        <div class="favorites-user">
                            <div class="my-ads">
                                <a href="my-ads.html">23<small>آگهی‌های من</small></a>
                            </div>
                            <div class="favorites">
                                <a href="#">18<small>علاقه‌مندیها</small></a>
                            </div>
                        </div>
                    </div>

                    <ul class="user-menu">
                        <li><a href="my-profile.html">پروفایل</a></li>
                        <li><a href="my-ads.html">آگهی‌های من</a></li>
                        <li><a href="favourite-ads.html">آگهی‌های محبوب</a></li>
                        <li><a href="archived-ads.html">آگهی‌های آرشیو شده</a></li>
                        <li class="active"><a href="pending-ads.html">در انتظار تایید</a></li>
                        <li><a href="delete-account.html">بستن اکانت</a></li>
                    </ul>

                </div>

                <div class="ads-info">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="my-ads section">
                                <h2>آگهی‌های در انتظار</h2>
                                <Advertising />
                                <Advertising />
                                <Advertising />
                                <Advertising />
                                <Advertising />
                            </div>
                        </div>


                        <div class="col-md-4 text-center">

                            <div class="recommended-cta">
                                <div class="cta">

                                    <div class="single-cta">

                                        <div class="cta-icon icon-secure">
                                            <img src="images/icon/13.png" alt="Icon" class="img-fluid"/>
                                        </div>

                                        <h4>خرید و فروش امن</h4>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                    </div>



                                    <div class="single-cta">

                                        <div class="cta-icon icon-support">
                                            <img src="images/icon/14.png" alt="Icon" class="img-fluid"/>
                                        </div>

                                        <h4>پشتیبانی 24/7</h4>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                    </div>



                                    <div class="single-cta">

                                        <div class="cta-icon icon-trading">
                                            <img src="images/icon/15.png" alt="Icon" class="img-fluid"/>
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
    )
}

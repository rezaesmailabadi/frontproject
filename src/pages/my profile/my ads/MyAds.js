import React from 'react'
import Advertising from '../../../components/Advertising'

export default function MyAds() {
    return (
        <div class="ads-info">
            <div class="row">
                <div class="col-md-8">
                    <div class="my-ads section">
                        <h2>آگهی‌های من</h2>

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

                                <div class="cta-icon icon-trading">
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
    )
}

import React from 'react'

export default function NewestAds() {
    return (
        <div className="featured">
            <div className="featured-image">
                <a href="details.html"><img src="images/featured/1.jpg" alt="" className="img-fluid" /></a>
                <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="تایید شده"><i className="fa fa-check-square-o"></i></a>
            </div>
            <div className="ad-info">
                <h3 className="item-price">  8000 تومان  </h3>
                <h4 className="item-title"><a href="#">اپل مک بوک پرو</a></h4>
                <div className="item-cat">
                    <span><a href="./details.html">دستگاه‌های دیجیتال  و گجت‌ها</a></span>
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
    )
}

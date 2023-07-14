import React from 'react'

export default function Advertising() {
    return (
        <div className="ad-item row">
            <div className="item-image-box col-lg-4">
                <div className="item-image">
                    <a href="details.html"><img src="images/trending/1.jpg" alt="Image" className="img-fluid" /></a>
                    <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="تایید شده"><i className="fa fa-check-square-o"></i></a>
                </div>
            </div>

            <div className="item-info col-lg-8">
                <div className="ad-info">
                    <h3 className="item-price">  5000 تومان  </h3>
                    <h4 className="item-title"><a href="#">اپل تی وی - بهترین تلویزیون دنیا</a></h4>
                    <div className="item-cat">
                        <span><a href="./details.html">دستگاه‌های دیجیتال  و گجت‌ها</a></span> /
                        <span><a href="#">تلویزیون و دستگاه ویدئو</a></span>
                    </div>
                </div>
                <div className="ad-meta">
                    <div className="meta-content">
                        <span className="dated"><a href="#">7 مهر 1399 - 10:10 بعدازظهر </a></span>
                        <a href="#" className="tag"><i className="fa fa-tags"></i>دسته دوم</a>
                    </div>
                    <div className="user-option pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="ایران- تهران"><i className="fa fa-map-marker"></i> </a>
                        <a className="online" href="#" data-toggle="tooltip" data-placement="top" title="فروشنده"><i className="fa fa-suitcase"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

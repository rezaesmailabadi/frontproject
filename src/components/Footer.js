import React from 'react'

export default function Footer() {
    return (
        <footer id="footer" class="clearfix">
            <section class="footer-top clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="footer-widget">
                                <h3>لینک‌های مرتبط </h3>
                                <ul>
                                    <li><a href="#">درباره ما</a></li>
                                    <li><a href="#">ارتباط با ما</a></li>
                                    <li><a href="#">مشاغل </a></li>
                                    <li><a href="#">همه‌ی شهرها</a></li>
                                    <li><a href="#">پشتیبانی</a></li>
                                    <li><a href="#">تبلیغات با ما</a></li>
                                    <li><a href="#">بلاگ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="footer-widget">
                                <h3>چگونه محصولاتمان رو خوب بفروشیم</h3>
                                <ul>
                                    <li><a href="#">چگونه محصولاتمان رو خوب بفروشیم</a></li>
                                    <li><a href="#">خرید عضویت ویژه</a></li>
                                    <li><a href="#">بنر تبلیغاتی</a></li>
                                    <li><a href="#">پروموت تبلیغات شما</a></li>
                                    <li><a href="#">تحویل رایگان</a></li>
                                    <li><a href="#">پرسش و پاسخ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="footer-widget social-widget">
                                <h3>ما را دنبال کنید</h3>
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook-official"></i>فیسبوک</a></li>
                                    <li><a href="#"><i class="fa fa-twitter-square"></i>توییتر</a></li>
                                    <li><a href="#"><i class="fa fa-telegram"></i>تلگرام</a></li>
                                    <li><a href="#"><i class="fa fa-whatsapp"></i>واتس‌اپ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="footer-widget news-letter">
                                <h3>اشتراک خبرنامه</h3>
                                <p>کالا | بزرگترین خرید و فروش بدون واسطه‌ی آنلاین</p>
                                <form action="#">
                                    <input type="email" class="form-control" placeholder="ایمیل شما" />
                                    <button type="submit" class="btn btn-primary">ثبت‌نام</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="footer-bottom clearfix text-center">
                <div class="container">
                    <p>&copy; 1399.  تمامی حقوق محفوظ است  ارایه از <a href="https://www.rtl-theme.com/user-profile/afaridteam/">AfaridTeam</a></p>
                </div>
            </div>
        </footer>
    )
}

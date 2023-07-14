import logo from '../assets/images/logo.png'

export default function Header() {
    return (
        <header id="header" className="clearfix">
            <nav className="navbar navbar-default navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tr-mainmenu" aria-controls="tr-mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
                    </button>
                    <a className="navbar-brand" href="index.html"><img className="img-fluid" src={logo} alt="Logo" /></a>

                    <div className="collapse navbar-collapse" id="tr-mainmenu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown"><a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown"> ‌خانه<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="index.html">خانه اصلی </a></li>
                                    <li><a href="index-one.html">خانه ورژن 1</a></li>
                                    <li><a href="index-two.html">خانه ورژن 2</a></li>
                                    <li><a href="index-three.html">خانه ورژن 3</a></li>
                                    <li><a href="index-car.html">خانه ماشین ورژن 1<span className="badge">جدید</span></a></li>
                                    <li><a href="index-car-two.html">خانه ماشین ورژن 2<span className="badge">جدید</span></a></li>
                                    <li><a href="directory.html">فهرست<span className="badge">آخرین</span></a></li>
                                </ul>
                            </li>
                            <li><a href="categories.html">دسته‌بندی</a></li>
                            <li><a href="details.html">جزییات آگهی</a></li>
                            <li><a href="faq.html">پشتیبانی</a></li>
                            <li className="active dropdown"><a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">صفحات<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="about-us.html">درباره ما</a></li>
                                    <li><a href="contact-us.html">ارتباط با ما</a></li>
                                    <li><a href="ad-post.html">افزودن آگهی</a></li>
                                    <li><a href="ad-post-details.html">افزودن جزییات آگهی</a></li>
                                    <li><a href="categories-main.html"> ‌آگهی‌ها</a></li>
                                    <li><a href="details.html">جزییات آگهی</a></li>
                                    <li><a href="my-ads.html">آگهی‌های من</a></li>
                                    <li><a href="my-profile.html">پروفایل من</a></li>
                                    <li><a href="favourite-ads.html">آگهی‌های محبوب</a></li>
                                    <li><a href="archived-ads.html">آگهی‌های آرشیو شده</a></li>
                                    <li><a href="pending-ads.html">آگهی‌های در انتظار</a></li>
                                    <li><a href="delete-account.html">بستن اکانت</a></li>
                                    <li><a href="published.html">آگهی‌های منتشر شده</a></li>
                                    <li><a href="signup.html">ثبت‌نام</a></li>
                                    <li><a href="signin.html">ورود</a></li>
                                    <li><a href="faq.html">پرسش و پاسخ</a></li>
                                    <li><a href="coming-soon.html">به زودی<span className="badge">جدید</span></a></li>
                                    <li><a href="pricing.html">خرید اشتراک<span className="badge">جدید</span></a></li>
                                    <li className="active"><a href="500-page.html">500<span className="badge">جدید</span></a></li>
                                    <li><a href="404-page.html">404<span className="badge">جدید</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-right">
                        <div className="dropdown language-dropdown">
                            <i className="fa fa-globe"></i>
                            <a data-toggle="dropdown" href="#"><span className="change-text">ایران</span> <i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu language-change">
                                <li><a href="#">ایران</a></li>
                                <li><a href="#">عراق</a></li>
                                <li><a href="#">چین</a></li>
                                <li><a href="#">روسیه</a></li>
                            </ul>
                        </div>
                        <ul className="sign-in">
                            <li><i className="fa fa-user"></i></li>
                            <li><a href="signin.html">ورود</a></li>
                            <li><a href="signup.html">ثبت‌نام</a></li>
                        </ul>

                        <a href="ad-post.html" className="btn">افزودن آگهی شما</a>
                    </div>

                </div>
            </nav>
        </header>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function AddAdvertising() {
    return (
        <section id="main" className="clearfix ad-post-page">
            <div className="container">

                <div className="breadcrumb-section">

                    <ol className="breadcrumb">
                        <li><Link to="/">خانه</Link></li>
                        <li>افزودن آگهی</li>
                    </ol>
                    <h2 className="title">ارسال آگهی رایگان</h2>
                </div>



                <div id="ad-post">
                    <div className="row category-tab">
                        <div className="col-lg-4 col-md-6">
                            <div className="section cat-option select-category post-option">
                                <h4>یک زیر شاخه را انتخاب کنید</h4>
                                <ul role="tablist" className="nav nav-tabs">
                                    <li><a href="#cat1" aria-controls="cat1" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/1.png" alt="Images" className="img-"/>
                                        </span>
                                        ماشین و وسایل نقلیه
                                    </a></li>

                                    <li className=""><a href="#cat2" aria-controls="cat2" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/2.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        دستگاه‌های دیجیتال  و گجت‌ها
                                    </a></li>

                                    <li><a href="#cat3" aria-controls="cat3" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/3.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        املاک
                                    </a></li>

                                    <li><a href="#cat4" aria-controls="cat4" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/4.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        وسایل ورزشی
                                    </a></li>

                                    <li><a href="#cat5" aria-controls="cat5" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/5.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        مد و زیبایی
                                    </a></li>

                                    <li><a href="#cat6" aria-controls="cat6" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/6.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        حیوانات خانگی
                                    </a></li>

                                    <li><a href="#cat7" aria-controls="cat7" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/7.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        فرصت های شغلی
                                    </a></li>

                                    <li><a href="#cat8" aria-controls="cat8" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/9.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        لوازم خانگی
                                    </a></li>

                                    <li><a href="#cat9" aria-controls="cat9" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/10.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        خدمات مراسم عروسی
                                    </a></li>

                                    <li><a href="#cat10" aria-controls="home10" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/11.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        موسیقی و هنر
                                    </a></li>

                                    <li><a href="#cat11" aria-controls="cat11" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/12.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        متفرقه
                                    </a></li>

                                    <li><a href="#cat12" aria-controls="cat12" role="tab" data-toggle="tab">
                                        <span className="select">
                                            <img src="images/icon/8.png" alt="Images" className="img-fluid"/>
                                        </span>
                                        کتاب و مجله
                                    </a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6">
                            <div className="section tab-content subcategory post-option">
                                <h4>یک زیر شاخه را انتخاب کنید</h4>
                                <div role="tabpanel" className="tab-pane" id="cat1">
                                    <ul>
                                        <li><a href="javascript:void(0)">اتومبیل و اتوبوس</a></li>
                                        <li><a href="javascript:void(0)">موتور سیکلت و اسکوتر</a></li>
                                        <li><a href="javascript:void(0)">دوچرخه و سه‌چرخه</a></li>
                                        <li><a href="javascript:void(0)"> سه‌چرخه</a></li>
                                        <li><a href="javascript:void(0)">کامیون ، وانت و اتوبوس</a></li>
                                        <li><a href="javascript:void(0)">تراکتور </a></li>
                                        <li><a href="javascript:void(0)">قطعات و لوازم جانبی خودرو</a></li>
                                    </ul>
                                </div>
                                <div role="tabpanel" className="tab-pane active show" id="cat2">
                                    <ul>
                                        <li><a href="javascript:void(0)">لپتاپ</a></li>
                                        <li><a href="javascript:void(0)">گوشی موبایل</a></li>
                                        <li><a href="javascript:void(0)">فبلت و تبلت</a></li>
                                        <li><a href="javascript:void(0)">صوتی </a></li>
                                        <li><a href="javascript:void(0)">تجهیزات جانبی</a></li>
                                        <li><a href="javascript:void(0)">دوربین</a></li>
                                        <li><a href="javascript:void(0)">موبایل تجهیزات جانبی</a></li>
                                        <li><a href="javascript:void(0)">تلویزیون و دستگاه ویدئو</a></li>
                                        <li><a href="javascript:void(0)">متفرقه</a></li>
                                        <li><a href="javascript:void(0)">تلویزیون و دستگاه ویدئو تجهیزات جانبی</a></li>
                                    </ul>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="cat3">
                                    <ul>
                                        <li><a href="javascript:void(0)">رهن خانه</a></li>
                                        <li><a href="javascript:void(0)">رهن آپارتمان</a></li>
                                        <li><a href="javascript:void(0)">ویلا</a></li>
                                        <li><a href="javascript:void(0)">اجاره خانه و آپارتمان</a></li>
                                    </ul>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="cat4">
                                    <ul>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                    </ul>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="cat5">
                                    <ul>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                    </ul>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="cat6">
                                    <ul>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                    </ul>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="cat7">
                                    <ul>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                    </ul>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="cat8">
                                    <ul>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                    </ul>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="cat9">
                                    <ul>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                    </ul>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="cat10">
                                    <ul>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                    </ul>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="cat11">
                                    <ul>
                                        <li><a href="javascript:void(0)">مورد زیر گروه</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="section next-stap post-option">
                                <h2>ارسال آگهی تنها در <span>30 ثانیه</span></h2>
                                <p>لطفاً برای چندین مورد یا خدمات ، چندین تبلیغات ارسال نکنید. همه تبلیغات تکراری ، اسپم و طبقه بندی اشتباه حذف می شوند.</p>
                                <div className="btn-section">
                                    <Link to="/add-advertising-details" className="btn">بعدی</Link>
                                    <a href="#" className="btn-info">لغو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 offset-sm-2 text-center">
                            <div className="ad-section">
                                <a href="#"><img src="images/ads/3.jpg" alt="Image" className="img-fluid" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

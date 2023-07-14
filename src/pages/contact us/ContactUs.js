import React from 'react'

export default function ContactUs() {
    return (
        <section id="main" class="clearfix contact-us">
            <div class="container">


                <ol class="breadcrumb">
                    <li><a href="index.html">خانه</a></li>
                    <li>ارتباط</li>
                </ol>
                <h2 class="title">ارتباط با ما</h2>


                {/* <div id="gmap"></div> */}

                <div class="corporate-info">
                    <div class="row">

                        <div class="col-md-4">
                            <div class="contact-info">

                                <h2>درباره شرکت ما</h2>
                                <address>
                                    <p><strong>آدرس: </strong>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                                    <p><strong>شماره تماس:</strong> <a href="#">(123) 456-7890</a></p>
                                    <p><strong>ایمیل: </strong><a href="#"><span class="__cf_email__" data-cfemail="10797e767f50737f7d60717e693e737f7d">[ایمیل&#160;محافظت شده]</span></a></p>
                                </address>

                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-md-8">
                            <div class="feedback">
                                <h2>نظرات خود را با ما درمیان بگذارید</h2>
                                <form id="contact-form" class="contact-form" name="contact-form" method="post" action="#">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" required="required" placeholder="نام"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control" required="required" placeholder="ایمیل"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" required="required" placeholder="موضوع"/>
                                            </div>
                                        </div>

                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <textarea name="message" id="message" required="required" class="form-control" rows="7" placeholder="پیام"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn">ارسال پیام</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

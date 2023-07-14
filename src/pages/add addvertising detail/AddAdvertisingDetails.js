import React from 'react'

export default function AddAdvertisingDetails() {
    return (
        <section id="main" class="clearfix ad-details-page">
            <div class="container">

                <div class="breadcrumb-section">

                    <ol class="breadcrumb">
                        <li><a href="index.html">خانه</a></li>
                        <li>افزودن آگهی</li>
                    </ol>
                    <h2 class="title">گوشی موبایل</h2>
                </div>

                <div class="adpost-details">
                    <div class="row">
                        <div class="col-lg-8">
                            <form action="#">
                                <fieldset>
                                    <div class="section postdetails">
                                        <h4>محصول و خدمت خود را بفروشید  <span class="pull-right">* فیلدهای اجباری</span></h4>
                                        <div class="form-group selected-product">
                                            <ul class="select-category list-inline">
                                                <li>
                                                    <a href="ad-post.html">
                                                        <span class="select">
                                                            <img src="images/icon/2.png" alt="Images" class="img-fluid" />
                                                        </span>
                                                        دستگاه‌های دیجیتال  و گجت‌ها
                                                    </a>
                                                </li>

                                                <li class="active">
                                                    <a href="#">فبلت و تبلت</a>
                                                </li>
                                            </ul>
                                            <a class="edit" href="#"><i class="fa fa-pencil"></i>ویرایش</a>
                                        </div>
                                        <div class="row form-group">
                                            <label class="col-sm-3">نوع آگهی<span class="required">*</span></label>
                                            <div class="col-sm-9 user-type">
                                                <input type="radio" name="sellType" value="newsell" id="newsell" /> <label for="newsell">می‌خواهم بخرم </label>
                                                <input type="radio" name="sellType" value="newbuy" id="newbuy" /> <label for="newbuy">می‌خواهم بفروشم</label>
                                            </div>
                                        </div>
                                        <div class="row form-group add-title">
                                            <label class="col-sm-3 label-title">عنوان آگهی شما<span class="required">*</span></label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="text" placeholder="دستگاه گوشی سامسونگ 10 آکبند " />
                                            </div>
                                        </div>
                                        <div class="row form-group add-image">
                                            <label class="col-sm-3 label-title">عکس‌های آگهی شما <span>(این تصویر به عنوان کاور قرار میگیرد )</span> </label>
                                            <div class="col-sm-9">
                                                <h5><i class="fa fa-upload" aria-hidden="true"></i>فایل‌ها را برای آپلود انتخاب کنید/ فایل‌ها را بکشید و بیندازید <span>می‌توانید چندین عکس بفرسید.</span></h5>
                                                <div class="upload-section">
                                                    <label class="upload-image" for="upload-image-one">
                                                        <input type="file" id="upload-image-one" />
                                                    </label>

                                                    <label class="upload-image" for="upload-image-two">
                                                        <input type="file" id="upload-image-two" />
                                                    </label>
                                                    <label class="upload-image" for="upload-image-three">
                                                        <input type="file" id="upload-image-three" />
                                                    </label>

                                                    <label class="upload-image" for="upload-imagefour">
                                                        <input type="file" id="upload-imagefour" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row form-group select-condition">
                                            <label class="col-sm-3">وضعیت<span class="required">*</span></label>
                                            <div class="col-sm-9">
                                                <input type="radio" name="itemCon" value="new" id="new" />
                                                <label for="new">جدید</label>
                                                <input type="radio" name="itemCon" value="used" id="used" />
                                                <label for="used">دسته دوم</label>
                                            </div>
                                        </div>
                                        <div class="row form-group select-price">
                                            <label class="col-sm-3 label-title">قیمت<span class="required">*</span></label>
                                            <div class="col-sm-9">
                                                <label>واحد</label>
                                                <input type="text" class="form-control" id="text1" />
                                                <input type="radio" name="price" value="قابل مذاکره" id="قابل مذاکره" />
                                                <label for="قابل مذاکره">قابل مذاکره</label>
                                            </div>
                                        </div>
                                        <div class="row form-group brand-name">
                                            <label class="col-sm-3 label-title">نام برند<span class="required">*</span></label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="سامسونگ" />
                                            </div>
                                        </div>
                                        <div class="row form-group additional">
                                            <label class="col-sm-3 label-title">اطلاعات بیشتر<span class="required">*</span></label>
                                            <div class="col-sm-9">
                                                <div class="checkbox">
                                                    <label for="camera"><input type="checkbox" name="camera" id="camera" /> دوربین</label>
                                                    <label for="dual-sim"><input type="checkbox" name="dual-sim" id="dual-sim" /> دو درگاه</label>
                                                    <label for="keyboard"><input type="checkbox" name="keyboard" id="keyboard" />  شارژر بی سیم</label>
                                                    <label for="3g"><input type="checkbox" name="3g" id="3g" /> 3G</label>

                                                    <label for="gsm"><input type="checkbox" name="gsm" id="gsm" /> GSM</label>

                                                    <label for="screen"><input type="checkbox" name="screen" id="screen" /> لمسی</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row form-group model-name">
                                            <label class="col-sm-3 label-title">مدل</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="model" placeholder="گوشی سامسونگ همراه شارژر بیسیم" />
                                            </div>
                                        </div>

                                        <div class="row form-group item-description">
                                            <label class="col-sm-3 label-title">توضیحات<span class="required">*</span></label>
                                            <div class="col-sm-9">
                                                <textarea class="form-control" id="textarea" placeholder="در مورد محصول خودتان توضیح دهید" rows="8"></textarea>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-9 offset-sm-3">
                                                <p>5000 واژه مانده است.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="section seller-info">
                                        <h4>اطلاعات فروشنده</h4>
                                        <div class="row form-group">
                                            <label class="col-sm-3 label-title">وضعیت<span class="required">*</span></label>
                                            <div class="col-sm-9">
                                                <input type="radio" name="sellerType" value="شخصی" id="شخصی" />
                                                <label for="شخصی">شخصی</label>
                                                <input type="radio" name="sellerType" value="dealer" id="dealer" />
                                                <label for="dealer">فروشنده</label>
                                            </div>
                                        </div>
                                        <div class="row form-group">
                                            <label class="col-sm-3 label-title">نام شما<span class="required">*</span></label>
                                            <div class="col-sm-9">
                                                <input type="text" name="name" class="form-control" placeholder="نام و نام خانوادگی" />
                                            </div>
                                        </div>
                                        <div class="row form-group">
                                            <label class="col-sm-3 label-title">ایمیل شما<span class="required">*</span></label>
                                            <div class="col-sm-9">
                                                <input type="email" name="email" class="form-control" placeholder="email@mail.com" />
                                            </div>
                                        </div>
                                        <div class="row form-group">
                                            <label class="col-sm-3 label-title">شماره موبایل<span class="required">*</span></label>
                                            <div class="col-sm-9">
                                                <input type="text" name="mobileNumber" class="form-control" placeholder="098 151562656" />
                                            </div>
                                        </div>
                                        <div class="row form-group">
                                            <label class="col-sm-3 label-title">آدرس</label>
                                            <div class="col-sm-9">
                                                <input type="text" name="address" class="form-control" placeholder="تهران، ونک" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="section">
                                        <h4>آگهی خود را ویژه کنید</h4>
                                        <p>پاسخ بیشتر به معنای خریداران علاقه مند بیشتر است. با توجه به خریداران علاقه مند زیادتر ، شانس بهتری برای فروش با قیمت مورد نظر خود دارید. <a href="#">بیشتر بدانید</a></p>
                                        <ul class="premium-options">
                                            <li class="premium">
                                                <input type="radio" name="premiumOption" value="day-one" id="day-one" />
                                                <label for="day-one">تبلیغات منظم در هر روز</label>
                                                <span> 1000تومان   </span>
                                            </li>
                                            <li class="premium">
                                                <input type="radio" name="premiumOption" value="day-two" id="day-two" />
                                                <label for="day-two">آگهی برتر به مدت 3 روز</label>
                                                <span> 3000تومان   </span>
                                            </li>
                                            <li class="premium">
                                                <input type="radio" name="premiumOption" value="day-three" id="day-three" />
                                                <label for="day-three">آگهی برتر به مدت 7 روز</label>
                                                <span> 5000تومان   </span>
                                            </li>
                                            <li class="premium">
                                                <input type="radio" name="premiumOption" value="day-four" id="day-four" />
                                                <label for="day-four">پاپ آپ تبلیغ به مدت 7 روز</label>
                                                <span> 10000تومان   </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="checkbox section agreement">
                                        <label for="send">
                                            <input type="checkbox" name="send" id="send" />
                                            با کلیک کردن روی دکمه زیر برای ارسال آگهی شما شرایط  <a href="#">مقررات استفاده</a> و <a href="#">حفظ حریم شخصی</a> را پذیرفته‌اید
                                        </label>
                                        <button type="submit" class="btn btn-primary">افزودن آگهی شما</button>
                                    </div>

                                </fieldset>
                            </form>
                        </div>



                        <div class="col-lg-4">
                            <div class="section quick-rules">
                                <h4>قوانین</h4>
                                <p class="lead">ارسال آگهی همیشه در  <a href="#">کالا</a> رایگان است هرچند تمامی آگهی‌ها باید از قوانین سایت پیروی کنند!</p>

                                <ul>
                                    <li>حتماً در دسته صحیح پست کنید.</li>
                                    <li>بیش از یک بار آگهی مشابه را ارسال نکنید و یا ظرف 48 ساعت یک آگهی را دوباره ارسال کنید.</li>
                                    <li>تصاویر را با علامت بارگذاری نکنید.</li>
                                    <li>تبلیغات حاوی چندین مورد را ارسال نکنید ، مگر اینکه این یک بسته بندی باشد.</li>
                                    <li>ایمیل یا شماره تلفن خود را در عنوان یا توضیحات قرار ندهید.</li>
                                    <li>حتماً در دسته صحیح پست کنید.</li>
                                    <li>بیش از یک بار آگهی مشابه را ارسال نکنید و یا ظرف 48 ساعت یک آگهی را دوباره ارسال کنید.</li>
                                    <li>تصاویر را با علامت بارگذاری نکنید.</li>
                                    <li>تبلیغات حاوی چندین مورد را ارسال نکنید ، مگر اینکه این یک بسته بندی باشد.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

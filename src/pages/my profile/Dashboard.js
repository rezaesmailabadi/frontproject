import { Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <section id="main" class="clearfix  ad-profile-page">
            <div class="container">

                <div class="breadcrumb-section">

                    <ol class="breadcrumb">
                        <li><a href="index.html">خانه</a></li>
                        <li>افزودن آگهی</li>
                    </ol>
                    <h2 class="title">پروفایل من</h2>
                </div>

                <div class="ad-profile section">
                    <div class="user-profile">
                        <div class="user-images">
                            <img src="images/user.jpg" alt="User Images" class="img-fluid" />
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
                        <li class="active"><a href="my-profile.html">پروفایل</a></li>
                        <li><a href="my-ads.html">آگهی‌های من</a></li>
                        <li><a href="favourite-ads.html">آگهی‌های محبوب</a></li>
                        <li><a href="archived-ads.html">آگهی‌های آرشیو شده</a></li>
                        <li><a href="pending-ads.html">در انتظار تایید</a></li>
                        <li><a href="delete-account.html">بستن اکانت</a></li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </section>
    )
}

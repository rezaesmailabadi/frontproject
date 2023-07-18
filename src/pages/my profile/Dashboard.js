import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Dashboard() {

    const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cookies.userID) {
            navigate("/login")
        }
    }, [])

    return (
        <section id="main" className="clearfix myads-page">
            <div className="container">

                <div className="breadcrumb-section">

                    <ol className="breadcrumb">
                        <li><Link to="/">خانه</Link></li>
                        <li>افزودن آگهی</li>
                    </ol>
                    <h2 className="title">پروفایل من</h2>
                </div>

                <div className="ad-profile section">
                    <div className="user-profile">
                        <div className="user-images">
                            <img src="/images/user.jpg" alt="User Images" className="img-fluid" />
                        </div>
                        <div className="user">
                            <h2>سلام, <a href="#">ایمان عزیز</a></h2>
                            <h5>آخرین ورود شما سه‌شنبه ، 21 اردیبهشت 1399</h5>
                        </div>

                        <div className="favorites-user">
                            <div className="my-ads">
                                <Link to="/dashboard/my-ads">23<small>آگهی‌های من</small></Link>
                            </div>
                            <div className="favorites">
                                <a href="#">18<small>علاقه‌مندیها</small></a>
                            </div>
                        </div>
                    </div>

                    <ul className="user-menu">

                        <li>
                            <NavLink
                                end
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                پروفایل
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/my-ads"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                آگهی‌های من
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/favorite-ads"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                آگهی‌های محبوب
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/archived-ads"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                آگهی‌های آرشیو شده
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/pending-ads"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                در انتظار تایید
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/delete-account"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                بستن اکانت
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="profile">
                    <div className="row">
                        <Outlet />

                        <div className="col-md-4 text-center">
                            <div className="recommended-cta">
                                <div className="cta">

                                    <div className="single-cta">

                                        <div className="cta-icon icon-secure">
                                            <img src="/images/icon/13.png" alt="Icon" className="img-fluid" />
                                        </div>

                                        <h4>خرید و فروش امن</h4>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                    </div>


                                    <div className="single-cta">

                                        <div className="cta-icon icon-support">
                                            <img src="/images/icon/14.png" alt="Icon" className="img-fluid" />
                                        </div>

                                        <h4>پشتیبانی 24/7</h4>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                    </div>



                                    <div className="single-cta">

                                        <div className="cta-icon icon-trading">
                                            <img src="/images/icon/15.png" alt="Icon" className="img-fluid" />
                                        </div>

                                        <h4>خرید و فروش آسان</h4>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                    </div>


                                    <div className="single-cta">
                                        <h5>کمک نیاز دارید؟</h5>
                                        <p><span>با ما تماس بگیرید</span><a href="#"> 08048100000</a></p>
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

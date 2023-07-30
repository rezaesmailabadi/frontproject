import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getOrders } from "../../redux/orders/ordersActions";

export default function AddAdvertising() {

  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state)

  const [options, setOptions] = useState({
    nardeban: false,
    urgent: false
  })

  const dispatch = useDispatch();

  const optionChangeHandler = e => {
    setOptions({ ...options, [e.target.name]: !options[e.target.name] })
  }

  const onSubmitChange = (e) => {
    e.preventDefault();

    const obj = {
      ...state,
      ...options
    }

    console.log(obj)
    if (options.nardeban && options.urgent) {
      console.log("USERID => ", cookies.userID, "PRICE => ", 60000)
    } else if (options.nardeban) {
      console.log("USERID => ", cookies.userID, "PRICE => ", 20000)
    } else if (options.urgent) {
      console.log("USERID => ", cookies.userID, "PRICE => ", 40000)
    } else {
      console.log("USERID => ", cookies.userID, "PRICE => ", 0)
    }

    axios.post("http://127.0.0.1:8000/api/addorder", obj)
      .then(res => dispatch(getOrders()))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (!state) {
      navigate("/add-advertising-details")
    }

  }, []);

  return (
    <section id="main" className="clearfix ad-details-page">
      <div className="container">
        <div className="breadcrumb-section">
          <ol className="breadcrumb">
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>افزودن آگهی</li>
          </ol>
          <h2 className="title">افزودن سفارش </h2>
        </div>

        <div className="adpost-details">
          <div className="row">
            <div className="col-lg-8">
              <form action="#">
                <fieldset>
                  <div className="section postdetails">
                    <h4>
                      محصول و خدمت خود را بفروشید{" "}
                      {/* <span className="pull-right">* فیلدهای اجباری</span> */}
                    </h4>

                    <div className="row form-group select-option">
                      <div className="col-12">
                        <div className="select-nardeban">
                          <label htmlFor="select-option-1" className="label-option">
                            نردبان
                          </label>
                          <input
                            type="checkbox"
                            className="form-control"
                            id="select-option-1"
                            name="nardeban"
                            onChange={(e) => optionChangeHandler(e)}
                          />
                        </div>
                        <h5>توضیحات :</h5>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                      </div>
                      <div className="col-12">
                        <div className="select-nardeban">
                          <label htmlFor="select-option-2" className="label-option">
                            فوری
                          </label>
                          <input
                            type="checkbox"
                            className="form-control"
                            id="select-option-2"
                            name="urgent"
                            onChange={(e) => optionChangeHandler(e)}
                          />
                        </div>
                        <h5>توضیحات :</h5>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                      </div>
                    </div>
                  </div>
                  <div className="checkbox section agreement">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(e) => onSubmitChange(e)}
                    >
                      افزودن آگهی شما
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="section quick-rules">
                <h4>قوانین</h4>
                <p className="lead">
                  ارسال آگهی همیشه در <a href="#">کالا</a> رایگان است هرچند
                  تمامی آگهی‌ها باید از قوانین سایت پیروی کنند!
                </p>

                <ul>
                  <li>حتماً در دسته صحیح پست کنید.</li>
                  <li>
                    بیش از یک بار آگهی مشابه را ارسال نکنید و یا ظرف 48 ساعت یک
                    آگهی را دوباره ارسال کنید.
                  </li>
                  <li>تصاویر را با علامت بارگذاری نکنید.</li>
                  <li>
                    تبلیغات حاوی چندین مورد را ارسال نکنید ، مگر اینکه این یک
                    بسته بندی باشد.
                  </li>
                  <li>
                    ایمیل یا شماره تلفن خود را در عنوان یا توضیحات قرار ندهید.
                  </li>
                  <li>حتماً در دسته صحیح پست کنید.</li>
                  <li>
                    بیش از یک بار آگهی مشابه را ارسال نکنید و یا ظرف 48 ساعت یک
                    آگهی را دوباره ارسال کنید.
                  </li>
                  <li>تصاویر را با علامت بارگذاری نکنید.</li>
                  <li>
                    تبلیغات حاوی چندین مورد را ارسال نکنید ، مگر اینکه این یک
                    بسته بندی باشد.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

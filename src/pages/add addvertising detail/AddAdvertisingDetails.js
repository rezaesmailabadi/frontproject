import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AddAdvertisingDetails() {
  const [categoryData, setCategoryData] = useState([]);
  const [userOrder, setUserOrder] = useState({
    title: "",
    introduction: "",
    image: "",
    min_price: "",
    max_price: "",
    order_category: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/Categories");
      console.log(result.data.results);
      setCategoryData(result.data.results);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  const changeUserFieldHandler = (e) => {
    setUserOrder({
      ...userOrder,
      [e.target.name]: e.target.value,
    });
    //console.log(userField);
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://127.0.0.1:8000/api/addorder",
        userOrder
      );
      console.log(responce);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

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
                      <span className="pull-right">* فیلدهای اجباری</span>
                    </h4>

                    <div className="row form-group add-title">
                      <label className="col-sm-3 label-title">
                        دسته بندی خود را انتخاب کنید :{" "}
                        <span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <select id="order_category" name="order_category">
                          {categoryData.map((category) => {
                            return (
                              <option value="category.id">
                                {" "}
                                {category.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="row form-group add-title">
                      <label className="col-sm-3 label-title">
                        عنوان آگهی شما<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          id="text"
                          placeholder="من در زبان php مشکل دارم "
                          onChange={(e) => changeUserFieldHandler(e)}
                        />
                      </div>
                    </div>

                    <div className="row form-group add-image">
                      <label className="col-sm-3 label-title">
                        عکس‌های آگهی شما{" "}
                        <span>(این تصویر به عنوان کاور قرار میگیرد )</span>{" "}
                      </label>
                      <div className="col-sm-9">
                        <h5>
                          <i className="fa fa-upload" aria-hidden="true"></i>
                          فایل‌ها را برای آپلود انتخاب کنید/ فایل‌ها را بکشید و
                          بیندازید <span>می‌توانید چندین عکس بفرسید.</span>
                        </h5>
                        <div className="upload-section">
                          <label
                            className="upload-image"
                            for="upload-image-one"
                          >
                            <input
                              type="file"
                              id="upload-image-one"
                              name="images"
                              multiple
                            />
                          </label>

                          {/* <label
                            className="upload-image"
                            for="upload-image-two"
                          >
                            <input type="file" id="upload-image-two" />
                          </label>
                          <label
                            className="upload-image"
                            for="upload-image-three"
                          >
                            <input type="file" id="upload-image-three" />
                          </label>

                          <label
                            className="upload-image"
                            for="upload-imagefour"
                          >
                            <input type="file" id="upload-imagefour" />
                          </label> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="row form-group select-condition">
                      <label className="col-sm-3">
                        وضعیت<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="radio"
                          name="itemCon"
                          value="new"
                          id="new"
                        />
                        <label for="new">جدید</label>
                        <input
                          type="radio"
                          name="itemCon"
                          value="used"
                          id="used"
                        />
                        <label for="used">دسته دوم</label>
                      </div>
                    </div> */}
                    <div className="row form-group select-price">
                      <label className="col-sm-3 label-title">
                        قیمت<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        کف قیمت :
                        <input
                          type="text"
                          className="form-control"
                          id="min_price"
                          name="min_price"
                          onChange={(e) => changeUserFieldHandler(e)}
                        />
                        <br />
                        سقف قیمت :
                        <input
                          type="text"
                          className="form-control"
                          id="max_price"
                          name="max_price"
                          onChange={(e) => changeUserFieldHandler(e)}
                        />
                      </div>
                    </div>
                    {/* <div className="row form-group brand-name">
                      <label className="col-sm-3 label-title">
                        نام برند<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="سامسونگ"
                        />
                      </div>
                    </div> */}
                    {/* <div className="row form-group additional">
                      <label className="col-sm-3 label-title">
                        اطلاعات بیشتر<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <div className="checkbox">
                          <label for="camera">
                            <input type="checkbox" name="camera" id="camera" />{" "}
                            دوربین
                          </label>
                          <label for="dual-sim">
                            <input
                              type="checkbox"
                              name="dual-sim"
                              id="dual-sim"
                            />{" "}
                            دو درگاه
                          </label>
                          <label for="keyboard">
                            <input
                              type="checkbox"
                              name="keyboard"
                              id="keyboard"
                            />{" "}
                            شارژر بی سیم
                          </label>
                          <label for="3g">
                            <input type="checkbox" name="3g" id="3g" /> 3G
                          </label>

                          <label for="gsm">
                            <input type="checkbox" name="gsm" id="gsm" /> GSM
                          </label>

                          <label for="screen">
                            <input type="checkbox" name="screen" id="screen" />{" "}
                            لمسی
                          </label>
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="row form-group model-name">
                      <label className="col-sm-3 label-title">مدل</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="model"
                          placeholder="گوشی سامسونگ همراه شارژر بیسیم"
                        />
                      </div>
                    </div> */}

                    <div className="row form-group item-description">
                      <label className="col-sm-3 label-title">
                        توضیحات<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <textarea
                          className="form-control"
                          id="introduction"
                          name="introduction"
                          placeholder="در مورد محصول خودتان توضیح دهید"
                          rows="8"
                          onChange={(e) => changeUserFieldHandler(e)}
                        ></textarea>
                      </div>
                    </div>

                    {/* <div className="row">
                      <div className="col-sm-9 offset-sm-3">
                        <p>5000 واژه مانده است.</p>
                      </div>
                    </div> */}
                  </div>

                  {/* <div className="section seller-info">
                    <h4>اطلاعات فروشنده</h4>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">
                        وضعیت<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="radio"
                          name="sellerType"
                          value="شخصی"
                          id="شخصی"
                        />
                        <label for="شخصی">شخصی</label>
                        <input
                          type="radio"
                          name="sellerType"
                          value="dealer"
                          id="dealer"
                        />
                        <label for="dealer">فروشنده</label>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">
                        نام شما<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="نام و نام خانوادگی"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">
                        ایمیل شما<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="email@mail.com"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">
                        شماره موبایل<span className="required">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="mobileNumber"
                          className="form-control"
                          placeholder="098 151562656"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-sm-3 label-title">آدرس</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="تهران، ونک"
                        />
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="section">
                    <h4>آگهی خود را ویژه کنید</h4>
                    <p>
                      پاسخ بیشتر به معنای خریداران علاقه مند بیشتر است. با توجه
                      به خریداران علاقه مند زیادتر ، شانس بهتری برای فروش با
                      قیمت مورد نظر خود دارید. <a href="#">بیشتر بدانید</a>
                    </p>
                    <ul className="premium-options">
                      <li className="premium">
                        <input
                          type="radio"
                          name="premiumOption"
                          value="day-one"
                          id="day-one"
                        />
                        <label for="day-one">تبلیغات منظم در هر روز</label>
                        <span> 1000تومان </span>
                      </li>
                      <li className="premium">
                        <input
                          type="radio"
                          name="premiumOption"
                          value="day-two"
                          id="day-two"
                        />
                        <label for="day-two">آگهی برتر به مدت 3 روز</label>
                        <span> 3000تومان </span>
                      </li>
                      <li className="premium">
                        <input
                          type="radio"
                          name="premiumOption"
                          value="day-three"
                          id="day-three"
                        />
                        <label for="day-three">آگهی برتر به مدت 7 روز</label>
                        <span> 5000تومان </span>
                      </li>
                      <li className="premium">
                        <input
                          type="radio"
                          name="premiumOption"
                          value="day-four"
                          id="day-four"
                        />
                        <label for="day-four">پاپ آپ تبلیغ به مدت 7 روز</label>
                        <span> 10000تومان </span>
                      </li>
                    </ul>
                  </div> */}

                  <div className="checkbox section agreement">
                    {/* <label for="send">
                      <input type="checkbox" name="send" id="send" />
                      با کلیک کردن روی دکمه زیر برای ارسال آگهی شما شرایط{" "}
                      <a href="#">مقررات استفاده</a> و{" "}
                      <a href="#">حفظ حریم شخصی</a> را پذیرفته‌اید
                    </label> */}

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

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCategory } from "../../redux/category/categoryActions";
import { getOrders } from '../../redux/orders/ordersActions';

export default function AddAdvertisingDetails() {
  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
  console.log("cookies => ", cookies);

  const { categories, loading } = useSelector((state) => state.categoryState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [invalidData, setInvalidData] = useState(false);
  const [userOrderUnrequired, setUserOrderUnrequired] = useState({
    image1: "",
    image2: "",
    image3: "",
    order_category: null,
    user_id: Number(cookies.userID),
  })
  const [userOrderRequired, setUserOrderRequired] = useState({
    title: "",
    introduction: "",
    min_price: "",
    max_price: "",
  });

  function readURL(event, ref, image) {
    let input = event.target;

    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        ref.current.src = e.target.result;
        setUserOrderUnrequired({ ...userOrderUnrequired, [image]: e.target.result });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  const changeUserFieldHandler = (e) => {
    setUserOrderRequired({
      ...userOrderRequired,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();

    if (!cookies.userID) {
      navigate("/login");
    }

    if (
      Object.values(userOrderRequired).find((value) => !value?.trim()?.length)
        ?.length === 0 ||
      Number(userOrderRequired.max_price) <
        Number(userOrderRequired.min_price) ||
      !selectedCategory
    ) {
      console.log(userOrderUnrequired.order_category);

      setInvalidData(true);
      return;
    }

    const obj = {
      ...userOrderRequired,
      ...userOrderUnrequired
    }

    axios.post("http://127.0.0.1:8000/api/addorder", obj)
      .then(res => dispatch(getOrders()))
      .catch(err => console.log(err))

  };

  useEffect(() => {
    const fetchData = () => {
      if (!categories) {
        dispatch(getCategory());
      }
    };

    fetchData();
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
                      <span className="pull-right">* فیلدهای اجباری</span>
                    </h4>

                    <div className="row form-group add-category">
                      <label className="col-sm-3 label-category">
                        دسته بندی آگهی شما<span className="required">*</span>
                      </label>
                      <div className="col-sm-5">
                        <div className="dropdown category-dropdown">
                          <a data-toggle="dropdown" href="#">
                            <span className="change-text">
                              {selectedCategory?.name || "انتخاب دسته بندی"}
                            </span>{" "}
                            <i className="fa fa-angle-down"></i>
                          </a>
                          <ul className="dropdown-menu category-change">
                            <li onClick={() => setSelectedCategory(null)}>
                              انتخاب دسته بندی
                            </li>
                            {categories?.map((category) => (
                              <li
                                onClick={e => {
                                  setUserOrderUnrequired({ ...userOrderUnrequired, order_category: category.id });
                                  setSelectedCategory(category)
                                }}
                              >
                                {category.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {invalidData && !selectedCategory && (
                          <span className="text-error">
                            لطفا یک دسته بندی مناسب انتخاب کنید.
                          </span>
                        )}
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
                        {invalidData &&
                          !userOrderRequired.title.trim().length && (
                            <span className="text-error">
                              لطفا یک عنوان مناسب انتخاب کنید.
                            </span>
                          )}
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
                          <div>
                            <label
                              className="upload-image"
                              for="upload-image-one"
                            >
                              <input
                                onChange={(e) => readURL(e, img1, "image1")}
                                type="file"
                                className="upload-input"
                                id="upload-image-one"
                                name="images"
                                multiple
                              />
                            </label>
                            <img ref={img1} width="100%" height="100px" />
                          </div>
                          <div>
                            <label
                              className="upload-image"
                              for="upload-image-two"
                            >
                              <input
                                onChange={(e) => readURL(e, img2, "image2")}
                                type="file"
                                className="upload-input"
                                id="upload-image-two"
                                name="images"
                                multiple
                              />
                            </label>
                            <img ref={img2} width="100%" height="100px" />
                          </div>
                          <div>
                            <label
                              className="upload-image"
                              for="upload-image-three"
                            >
                              <input
                                onChange={(e) => readURL(e, img3, "image3")}
                                type="file"
                                className="upload-input"
                                id="upload-image-three"
                                name="images"
                                multiple
                              />
                            </label>
                            <img ref={img3} width="100%" height="100px" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row form-group select-price">
                      <label className="col-md-3 label-title">
                        حداقل بودجه<span className="required">*</span>
                      </label>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          id="min_price"
                          name="min_price"
                          onChange={(e) => changeUserFieldHandler(e)}
                        />
                        {invalidData &&
                          (!userOrderRequired.min_price.trim().length ||
                            !Number(userOrderRequired.min_price) ||
                            Number(userOrderRequired.max_price) <
                              Number(userOrderRequired.min_price)) && (
                            <span className="text-error">
                              لطفا یک قیمت مناسب انتخاب کنید.
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row form-group select-price">
                      <label className="col-md-3 label-title">
                        حداکثر بودجه<span className="required">*</span>
                      </label>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          id="max_price"
                          name="max_price"
                          onChange={(e) => changeUserFieldHandler(e)}
                        />
                        {invalidData &&
                          (!userOrderRequired.max_price.trim().length ||
                            !Number(userOrderRequired.max_price) ||
                            Number(userOrderRequired.max_price) <
                              Number(userOrderRequired.min_price)) && (
                            <span className="text-error">
                              لطفا یک قیمت مناسب انتخاب کنید.
                            </span>
                          )}
                      </div>
                    </div>
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
                        {invalidData &&
                          !userOrderRequired.introduction.trim().length && (
                            <span className="text-error">
                              لطفا توضیحات مناسب شرح دهید.
                            </span>
                          )}
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

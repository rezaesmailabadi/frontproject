import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { getCategory } from "../../redux/category/categoryActions";

export default function AddAdvertising() {

  const navigate = useNavigate();

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const { categories, loading } = useSelector(state => state.categoryState);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      if (!categories) {
        dispatch(getCategory());
      }
    }

    fetchData();

  }, []);

  return (
    <section id="main" className="clearfix ad-post-page">
      <div className="container">
        <div className="breadcrumb-section">
          <ol className="breadcrumb">
            <li>
              <Link to="/">خانه</Link>
            </li>
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
                  {
                    loading ? <Loader /> :
                      categories?.map(category =>
                        <li
                          className={`${selectedCategoryId === category.id && "selected-category"}`}
                          onClick={() => setSelectedCategoryId(category.id)}
                        >
                          {category.name}
                        </li>)
                  }

                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="section next-stap post-option">
                <h2>
                  ارسال آگهی تنها در <span>30 ثانیه</span>
                </h2>
                <p>
                  لطفاً برای چندین مورد یا خدمات ، چندین تبلیغات ارسال نکنید.
                  همه تبلیغات تکراری ، اسپم و طبقه بندی اشتباه حذف می شوند.
                </p>
                <div className="btn-section">
                  <NavLink
                    to="/add-advertising-details"
                    className={`btn ${!selectedCategoryId ? "disabled-cursor" : "enabled-cursor"}`}
                    state={selectedCategoryId}
                  >
                    بعدی
                  </NavLink>
                  <a onClick={() => navigate(-1)} className="btn btn-info">
                    برگشت
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 offset-sm-2 text-center">
              <div className="ad-section">
                <a href="#">
                  <img
                    src="images/ads/3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

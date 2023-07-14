import React from "react";
import Ads from "../../components/Ads";
import Advertising from "../../components/Advertising";
import SomthingSell from "../../components/SomthingSell";

export default function Categories() {
  return (
    <>
      <section id="main" class="clearfix category-page main-categories">
        <div class="container">
          <div class="breadcrumb-section">
            <ol class="breadcrumb">
              <li>
                <a href="index.html">خانه</a>
              </li>
              <li>کالاهای دیجیتال و گجت</li>
            </ol>
            <h2 class="title">گوشی موبایل</h2>
          </div>
          <div class="banner">
            <div class="banner-form banner-form-full">
              <form action="#">
                <div class="dropdown category-dropdown">
                  <a data-toggle="dropdown" href="#">
                    <span class="change-text">انتخاب دسته‌بندی</span>{" "}
                    <i class="fa fa-angle-down"></i>
                  </a>
                  <ul class="dropdown-menu category-change">
                    <li>
                      <a href="#">مد و زیبایی</a>
                    </li>
                    <li>
                      <a href="#">ماشین و وسایل نقلیه</a>
                    </li>
                    <li>
                      <a href="./details.html">دستگاه‌های دیجیتال و گجت‌ها</a>
                    </li>
                    <li>
                      <a href="#">املاک</a>
                    </li>
                    <li>
                      <a href="#">ورزشی و بازی</a>
                    </li>
                  </ul>
                </div>

                <div class="dropdown category-dropdown language-dropdown ">
                  <a data-toggle="dropdown" href="#">
                    <span class="change-text">ایران</span>{" "}
                    <i class="fa fa-angle-down"></i>
                  </a>
                  <ul class="dropdown-menu  language-change">
                    <li>
                      <a href="#">ایران</a>
                    </li>
                    <li>
                      <a href="#">عراق</a>
                    </li>
                    <li>
                      <a href="#">چین</a>
                    </li>
                    <li>
                      <a href="#">روسیه</a>
                    </li>
                  </ul>
                </div>

                <input
                  type="text"
                  class="form-control"
                  placeholder="عبارت مورد نظر خود را تایپ کنید"
                />
                <button type="submit" class="form-control" value="Search">
                  جستجو
                </button>
              </form>
            </div>
          </div>

          <div class="category-info">
            <div class="row">
              <h1>haromzadeh</h1>
              <div class="col-lg-3 col-md-4">
                <div class="category-accordion tr-accordion" id="accordion">
                  <div class="card">
                    <div class="card-header" id="heading-1">
                      <button
                        data-toggle="collapse"
                        data-target="#collapse-1"
                        aria-expanded="true"
                        aria-controls="collapse-1"
                      >
                        همه دسته‌بندی‌ها
                      </button>
                    </div>

                    <div
                      id="collapse-1"
                      class="collapse show"
                      aria-labelledby="heading-1"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        <ul>
                          <li>
                            <a href="categories.html">
                              <i class="icofont icofont-laptop-alt"></i>کالاهای
                              دیجیتال و گجت<span>(1029)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-police-car-alt-2"></i>
                              ماشین و وسایل نقلیه<span>(1228)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-building-alt"></i>املاک
                              <span>(178)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-ui-home"></i>خانه و
                              دکوراسیون<span>(7163)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-animal-dog"></i>حیوانات
                              خانگی <span>(8709)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-nurse"></i>سلامت و
                              زیبایی<span>(3129)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-hockey"></i>ورزشی و
                              تفریحی<span>(2019)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-burger"></i>غذا و خوراکی
                              <span>(323)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-girl-alt"></i>بچگانه
                              <span>(425)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-gift"></i>کادو و هدیه
                              <span>(3223)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-architecture-alt"></i>
                              محصولات دفتر<span>(3283)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-animal-cat-alt-1"></i>
                              کار دستی و هنری<span>(3221)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icofont icofont-abc"></i>متفرقه
                              <span>(3129)</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="heading-2">
                      <button
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        وضعیت
                      </button>
                    </div>
                    <div
                      id="collapse-2"
                      class="collapse"
                      aria-labelledby="heading-2"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        <label for="new">
                          <input type="checkbox" name="new" id="new" />
                          جدید
                        </label>
                        <label for="used">
                          <input type="checkbox" name="used" id="used" />
                          دسته دوم
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="heading-3">
                      <button
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        قیمت
                      </button>
                    </div>
                    <div
                      id="collapse-3"
                      class="collapse"
                      aria-labelledby="heading-3"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        <div class="price-range">
                          <div class="price">
                            <span>
                              100 تومان - <strong>700 تومان</strong>
                            </span>
                            <div class="dropdown category-dropdown pull-right">
                              <a data-toggle="dropdown" href="#">
                                <span class="change-text">تومان</span>
                                <i class="fa fa-caret-square-o-down"></i>
                              </a>
                              <ul class="dropdown-menu category-change">
                                <li>
                                  <a href="#"> 10تومان </a>
                                </li>
                                <li>
                                  <a href="#"> 15تومان </a>
                                </li>
                                <li>
                                  <a href="#"> 20تومان </a>
                                </li>
                                <li>
                                  <a href="#"> 25تومان </a>
                                </li>
                                <li>
                                  <a href="#"> 35تومان </a>
                                </li>
                              </ul>
                            </div>
                            <input
                              type="text"
                              value=""
                              data-slider-min="0"
                              data-slider-max="700"
                              data-slider-step="5"
                              data-slider-value="[250,450]"
                              id="price"
                            />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="heading-4">
                      <button
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapse-4"
                        aria-expanded="false"
                        aria-controls="collapse-4"
                      >
                        پست شده توسط
                      </button>
                    </div>
                    <div
                      id="collapse-4"
                      class="collapse"
                      aria-labelledby="heading-4"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        <label for="شخصی">
                          <input type="checkbox" name="شخصی" id="شخصی" /> شخصی
                        </label>
                        <label for="dealer">
                          <input type="checkbox" name="dealer" id="dealer" />
                          فروشنده
                        </label>
                        <label for="reseller">
                          <input
                            type="checkbox"
                            name="reseller"
                            id="reseller"
                          />
                          تامین‌کننده
                        </label>
                        <label for="manufacturer">
                          <input
                            type="checkbox"
                            name="manufacturer"
                            id="manufacturer"
                          />
                          کارخانه
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="heading-5">
                      <button
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapse-5"
                        aria-expanded="false"
                        aria-controls="collapse-5"
                      >
                        برند
                      </button>
                    </div>
                    <div
                      id="collapse-5"
                      class="collapse"
                      aria-labelledby="heading-5"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        <input
                          type="text"
                          placeholder="جستجو برند "
                          class="form-control"
                        />
                        <label for="apple">
                          <input type="checkbox" name="apple" id="apple" /> اپل
                        </label>
                        <label for="htc">
                          <input type="checkbox" name="htc" id="htc" /> اچ تی سی
                        </label>
                        <label for="micromax">
                          <input
                            type="checkbox"
                            name="micromax"
                            id="micromax"
                          />{" "}
                          سامسونگ
                        </label>
                        <label for="nokia">
                          <input type="checkbox" name="nokia" id="nokia" />{" "}
                          نوکیا
                        </label>
                        <label for="others">
                          <input type="checkbox" name="others" id="others" />{" "}
                          دیگر
                        </label>
                        <label for="samsung">
                          <input type="checkbox" name="samsung" id="samsung" />{" "}
                          شیائومی
                        </label>
                        <span class="border"></span>
                        <label for="acer">
                          <input type="checkbox" name="acer" id="acer" /> سونی
                        </label>
                        <label for="bird">
                          <input type="checkbox" name="bird" id="bird" /> برند
                        </label>
                        <label for="blackberry">
                          <input
                            type="checkbox"
                            name="blackberry"
                            id="blackberry"
                          />{" "}
                          برند
                        </label>
                        <label for="celkon">
                          <input type="checkbox" name="celkon" id="celkon" />{" "}
                          برند
                        </label>
                        <label for="ericsson">
                          <input
                            type="checkbox"
                            name="ericsson"
                            id="ericsson"
                          />{" "}
                          برند
                        </label>
                        <label for="fly">
                          <input type="checkbox" name="fly" id="fly" /> برند
                        </label>
                        <label for="g-fone">
                          <input type="checkbox" name="g-fone" id="g-fone" />{" "}
                          برند
                        </label>
                        <label for="gionee">
                          <input type="checkbox" name="gionee" id="gione" />{" "}
                          برند
                        </label>
                        <label for="haier">
                          <input type="checkbox" name="haier" id="haier" /> برند
                        </label>
                        <label for="hp">
                          <input type="checkbox" name="hp" id="hp" /> برند
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-8 col-lg-7">
                <div class="section recommended-ads">
                  <div class="featured-top">
                    <h4>توصیه شده برای شما</h4>
                    <div class="dropdown pull-right">
                      <div class="dropdown category-dropdown">
                        <h5>چینش:</h5>
                        <a data-toggle="dropdown" href="#">
                          <span class="change-text">محبوبیت</span>
                          <i class="fa fa-caret-square-o-down"></i>
                        </a>
                        <ul class="dropdown-menu category-change">
                          <li>
                            <a href="#">جدیدترین</a>
                          </li>
                          <li>
                            <a href="#">قدیمیترین</a>
                          </li>
                          <li>
                            <a href="#">همه</a>
                          </li>
                          <li>
                            <a href="#">پرفروش‌ترین</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Advertising />

                  <div class="ad-section text-center">
                    <a href="#">
                      <img
                        src="images/ads/3.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                  </div>

                  <Advertising />
                  <div class="text-center">
                    <ul class="pagination ">
                      <li>
                        <a href="#">
                          <i class="fa fa-chevron-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li class="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a>...</a>
                      </li>
                      <li>
                        <a href="#">10</a>
                      </li>
                      <li>
                        <a href="#">20</a>
                      </li>
                      <li>
                        <a href="#">30</a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-chevron-left"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Ads />
            </div>
          </div>
        </div>
      </section>

      <SomthingSell />
    </>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Advertising() {
  const { id } = useParams();
  // console.log(id);
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetchOrderCategory();
  }, [id]);

  const fetchOrderCategory = async () => {
    try {
      const result = await axios.get(
        "http://127.0.0.1:8000/api/ordercategory/" + id
      );
      console.log(result.data.results);
      setOrder(result.data.results);
    } catch (err) {
      //   console.log("Something Wrong");
    }
  };

  return (
    <div className="ad-item row">
      {orders.map((order) => {
        return (
          <div>
            <div className="item-image-box col-lg-4">
              <div className="item-image">
                <a href="details.html">
                  <img
                    src="/images/trending/1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <a
                  href="#"
                  className="verified"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="تایید شده"
                >
                  <i className="fa fa-check-square-o"></i>
                </a>
              </div>
            </div>

            <div className="item-info col-lg-8">
              <div className="ad-info">
                <h3 className="item-price"> {order.price} تومان </h3>
                <h4 className="item-title">
                  <a href="#">{order.title}</a>
                </h4>
                <div className="item-cat">
                  <span>
                    <a href="./details.html">{order.category_id}</a>
                  </span>{" "}
                  /
                  {/* <span>
                        <a href="#">تلویزیون و دستگاه ویدئو</a>
                    </span> */}
                </div>
              </div>
              <div className="ad-meta">
                <div className="meta-content">
                  <span className="dated">
                    <a href="#">7 مهر 1399 - 10:10 بعدازظهر </a>
                  </span>
                  <a href="#" className="tag">
                    <i className="fa fa-tags"></i>دسته دوم
                  </a>
                </div>
                <div className="user-option pull-right">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="ایران- تهران"
                  >
                    <i className="fa fa-map-marker"></i>{" "}
                  </a>
                  <a
                    className="online"
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="فروشنده"
                  >
                    <i className="fa fa-suitcase"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

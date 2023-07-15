import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../redux/category/categoryActions";

export default function Categories() {

  const { categories } = useSelector(state => state.categoryState);
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
    <>
      {categories?.map((category) => {
        return (
          <li key={category.id} className="category-item">
            <div className="category-icon">
              <img
                src={category.image}
                alt="images"
                className="img-fluid"
              />
            </div>
            <Link to={`/advertisements/${category.id}`}>{category.name}</Link>
          </li>
        );
      })}
    </>
  );
}

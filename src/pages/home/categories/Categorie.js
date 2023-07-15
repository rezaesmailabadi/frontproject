import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categoryData, setCategoryData] = useState([]);

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
  return (
    <div>
      {categoryData.map((category) => {
        return (
          <li className="category-item">
            <a href="categories.html">
              <div className="category-icon">
                <img
                  src="images/icon/1.png"
                  alt="images"
                  className="img-fluid"
                />
              </div>
              <Link to={`/categories/${category.id}`}>{category.name}</Link>
            </a>
          </li>
        );
      })}
    </div>
  );
}

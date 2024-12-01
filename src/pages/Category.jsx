import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./Pages.module.scss";
import { Link } from "react-router-dom";

const Category = ({ list, heading }) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCategory = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      setCategory(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      <div className={s.container}>
        <>
          {loading === true && <h2>Loading...</h2>}
          {loading === false && (
            <div className={s.categoryPage}>
              {heading && <h2>{heading}</h2>}
              {category.slice(0, list).map((item) => (
                <div key={item._id} className={s.catBlock}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <Link to={`/category/${item.id}`}>View</Link>
                </div>
              ))}
            </div>
          )}
        </>
      </div></>
  );
};

export default Category;

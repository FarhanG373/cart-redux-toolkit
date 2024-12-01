import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./Pages.module.scss";
import { Link } from "react-router-dom";

const Products = ({ list, heading }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getData = async () => {
    setLoading(true);
    const allProd = await axios.get(`https://api.escuelajs.co/api/v1/products`);
    setData(allProd.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading === true && <h2>Loading...</h2>}
      {loading === false && (
        <div className={s.products}>
          {heading && <h2>{heading}</h2>}
          <div className={s.container}>
            {data.slice(0, list).map((product) => (
              <div key={product.id} className={s.singleBlock}>
                <img src={product.images} alt={product.title} />
                <h2>{product.title}</h2>
                <p>
                  <b>Price : </b>${product.price}
                </p>
                <p>
                  <b>Category : </b>
                  {product.category.name}
                </p>
                <Link to={`/product/${product.id}`}>View</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;

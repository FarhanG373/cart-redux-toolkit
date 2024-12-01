import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./Pages.module.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CategorySingle = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );
      const product = response.data.filter((prod) => prod.category.id == id);
      setData(product);
      setLoading(false);
    };
    fetchProducts();
  }, [id]);

  return (
    <>
      {loading === true && <h2>Loading...</h2>}
      {loading === false && (
        <div className={s.categorySingle}>
          <div className={s.container}>
            {data.map((product) => (
              <div key={product.id} className={s.prodBlock}>
                <img src={product.images[1]} alt={product.title} />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>{product.category.name}</p>
                <Link to={`/product/${product.id}`}>View Product</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategorySingle;

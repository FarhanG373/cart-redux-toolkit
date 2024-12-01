import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./Pages.module.scss";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";


const SingleProduct = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [prodCount, setProdCount] = useState(1);




  const incre = () => {
    setProdCount(prodCount + 1);
  };
  const decre = () => {
    if (prodCount > 0) {
      setProdCount(prodCount - 1);
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
  
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
  
      if (response.data) {
        setData(response.data);
      } else {
        console.error("Error fetching product data");
      }
  
      setLoading(false);
    };
    fetchProducts();
  }, [id]);

  // const items = useSelector((state) => state.allCart.data);
  const dispatch = useDispatch();

  return (
    <>
      {loading === true && <h2>Loading...</h2>}
      {loading === false && (
        <div className={s.singleProduct}>
          <div className={s.container}>
            <div className={s.left}>
              <img src={data?.images} alt={data.title} />
            </div>
            <div className={s.right}>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <p>
                <b>Price: </b>${" "}
                {prodCount > 1 ? data.price * prodCount : data.price}
              </p>
              {/* <p><b>Category: </b>{data.category.name}</p> */}
              <button onClick={decre} disabled={prodCount < 2}>
                -
              </button>

              <span style={{ margin: "0px 10px" }}>{prodCount}</span>

              <button onClick={incre} disabled={prodCount === 10}>
                +
              </button>
              <br></br>
              <button onClick={() => dispatch(addToCart(data))}>Add to cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;

import React from "react";
import s from "./Pages.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
} from "../Redux/cartSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalCart = cartData.totalPrice * cartData.totalQuantity;
  console.log(totalCart);

  return (
    <div className={s.cartPage}>
      <div className={s.container}>
        {cartData.totalQuantity > 0 ? (
          <ul>
            {cartData.items.map((item, index) => (
              <li key={item.id}>
                <div className={s.itemImg}>
                  <img src={item.images} alt={item.title} />
                </div>
                <div className={s.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price * item.quantity}</p>
                  <div className={s.btns}>
                    <button
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => dispatch(decreaseItemQuantity(item))}
                    >
                      -
                    </button>
                    <span className="btn btn-info">{item.quantity}</span>
                    <button
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => dispatch(increaseItemQuantity(item))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => dispatch(removeFromCart(item))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p
            style={{
              fontWeight: "Bold",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            Cart is empty
          </p>
        )}
        {cartData.totalQuantity > 0 && (
          <div className={s.totalPrice}>Totla Cart Price : {totalCart}Rs</div>
        )}
      </div>
    </div>
  );
};

export default Cart;

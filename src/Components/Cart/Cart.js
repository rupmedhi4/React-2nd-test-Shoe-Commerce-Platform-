import React, { useState,useContext, useEffect } from "react";
import Modal from "./Modal";
import CartContext from "../../Store/cart-context";
import classes from './Cart.module.css';

const Cart = (props) => {
    const crtx = useContext(CartContext)
    const [amount, setAmount] = useState(0);
    let amt = 0;
    crtx.CartItems.map(item => {
        // console.log(item)
        amt = amt + Number(item.price * item.quantity)
    })
    useEffect(() => {
        setAmount(amt);
    })
    console.log(amount)

    const orderNow = () => {
        crtx.orderNow();
    }

    const cartItem = (
      <ul>
        {crtx.CartItems.map((item) => {
          return (
            <li key={Math.random()}>
              {item.name}-{item.description}-{item.price}-{item.quantity}
            </li>
          );
        })}
      </ul>
    );

  return (
    <Modal onClick={props.onClick}>
      <h2>Cart</h2>
      {cartItem}
      <div className={classes.amount}>
        <span>Total Amount</span>
              <span>{amount}</span>
          </div>
          <button onClick={orderNow}>Order Now</button>
    </Modal>
  );
};

export default Cart;

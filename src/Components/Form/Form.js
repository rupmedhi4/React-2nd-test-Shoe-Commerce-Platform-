import React, { useRef, useContext } from "react";
import classes from "./Form.module.css";
import CartContext from "../../Store/cart-context";
const Form = (props) => {
  const crtx = useContext(CartContext);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  // const mRef = useRef();

  const addProductHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: Number(priceRef.current.value),
    };
    // if (obj.name === '' || obj.description === '' || obj.price < 0)
    // {
    //   return 0;
    // }
    crtx.addListItem(obj);
    console.log("adding data from -Form");

    
  };

  return (
    <form className={classes.form}>
      <label>Medicine Name</label>
      <select id="name" ref={nameRef}>
        <option>Medicine-Name</option>
        <option>Crocin Pain Relief</option>
        <option>Analgesic tablet</option>
        <option>Dolo 650 </option>
        
      </select>
      <label>Description</label>
      <select id="description" ref={descriptionRef}>
        <option>Description</option>
        <option>Headache</option>
        <option>Cold & cough</option>
        <option>Tooth pain</option>
      </select>
      <label>Price</label>
      <input ref={priceRef} type="number" min="0" />

     

      <button onClick={addProductHandler}>Add-Product</button>
    </form>
  );
};

export default Form;

import React,{useContext,useRef} from "react";
import classes from './List.module.css'
import CartContext from "../../Store/cart-context";
const List = () => {
  const crtx = useContext(CartContext);
  const qtyRef = useRef();
    // console.log(crtx.ListItems)

  const quantityHandler = (e) => {
    const name = e.target.id;
    const quantity = qtyRef.current.value;
    // const obj = {...item,quantity:quantity}
   
    crtx.ListItems.map((item) => {
      if (item.name === name) {
        // console.log(item.name ,name)
        crtx.removeListItem(name);
        crtx.addToCart({ ...item, quantity: Number(quantity) });
      }
    });


      // crtx.addToCart(obj)
    }

    return (
      <div className={classes.list}>
        <h2>List Items</h2>
        <ul>
          {crtx.ListItems.map((item) => {
              return (
                <li key={Math.random()}>
                  <span>Name:{item.name}</span>{" "}
                  <span>description:{item.description}</span>
                  <span>Price:{item.price}</span>
                    <input id={item.name} ref={qtyRef}  type="number" min='1' max='20' defaultValue='1'/>
                    <button  id={item.name}  onClick={quantityHandler}>AddToCart</button>
                </li>
              );
          })}
        </ul>
      </div>
    );
}

export default List;
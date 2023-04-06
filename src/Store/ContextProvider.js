import React,{ useState} from "react";
import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const [list, setList] = useState([])
  const [cart, setCart] = useState([])

  
    // const crtx = useContext(CartContext)
    
    const addListItemHandler = (item) => {
      setList((prevItem) => {
           return [...prevItem,item]
         });
         console.log(list)
        };
  // console.log('working');
  const addItemToCart = (item) => {
    setCart(prevItem => {
      return [...prevItem, item];
        })
      }
       
  const removeListItem = (name) => {
    setList(prevItem => {
      const newList =  prevItem.filter(item => {
           console.log(item.name,name)
        return (item.name !== name);
       })
      return newList;
      })
  }

  const orderNowHandler = () => {
    setCart([]);
  }
    
     const context = {
       CartItems: cart,
       ListItems: list,
       addListItem: addListItemHandler,
       addToCart: addItemToCart,
       removeListItem: removeListItem,
       orderNow: orderNowHandler 
     };
    
    return (

        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>

    )
}

export default ContextProvider;

import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer} from "./Reducer";
// import {items} from './Data'

const Cart = createContext();
faker.seed(99);

function Context ({children}) {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
      }));

      const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
      });
      const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      });
    
      console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch,productState, productDispatch }}>
      {children}
    </Cart.Provider>
  )
}

// function Context  ({ children }) {
//     const [state, dispatch] = useReducer(cartReducer, {
//       products: items, // Use the items array as initial products
//       cart: [],
//     });
  
//     return (
//       <Cart.Provider value={{ state, dispatch }}>
//         {children}
//       </Cart.Provider>
//     );
//   };
export const CartState = () => {
    return useContext(Cart);
  };

export default Context

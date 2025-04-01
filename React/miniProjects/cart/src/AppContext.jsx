import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./Reducer";
import cartItems from "./data";
const GlobalContext = createContext();
const cart = new Map();
for (let item of cartItems) {
  const { id, ...rest } = item;
  cart.set(id, rest);
}
// console.log(cart);
const url = "https://www.course-api.com/react-useReducer-cart-project";
const defaultState = {
  cart: cart,
  isLoading: false,
};
// Custom hook for using the context
export const useGlobalContext = () => useContext(GlobalContext);

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const fetchData = () => {
    dispatch({ type: "LOADING" });
    fetch(url) // Return the fetch promise
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newcart = new Map();
        for (let item of data) {
          const { id, ...rest } = item;
          newcart.set(id, rest);
        }
        dispatch({ type: "RESET", payload: { newcart: newcart } });
      })
      .catch((err) => {
        // console.error(err);
        throw err;
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <GlobalContext.Provider value={{ state, dispatch, fetchData }}>
      {children}
    </GlobalContext.Provider>
  );
}

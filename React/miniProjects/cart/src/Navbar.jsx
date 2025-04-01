import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./AppContext";
const Navbar = () => {
  const { state } = useGlobalContext();
  const itemCount = () => {
    let count = 0;
    for (let [key, { amount }] of state.cart.entries()) {
      count += amount;
    }
    return count;
  };
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{itemCount()}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import CartItem from "./CartItem";
import cartItems from "./data";
import { useGlobalContext } from "./AppContext";
const CartContainer = () => {
  const { state, dispatch, fetchData } = useGlobalContext();
  // console.log(state);
  const cartArray = [...cartItems];
  const items = [];
  for (let item of Array.from(state.cart.entries())) {
    items.push({ id: item[0], ...item[1] });
  }
  // console.log(items);

  const totalCost = () => {
    let cost = 0;
    for (let [key, { price, amount }] of state.cart.entries()) {
      cost += price * amount;
    }
    return cost.toFixed(2);
  };

  if (state.cart.size === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <button
            onClick={fetchData}
            className="btn"
            style={{
              marginInline: "auto",
              display: "block",
              marginTop: "2rem",
            }}
          >
            Reset
          </button>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {items.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>{totalCost()}</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => dispatch({ type: "CLEAR" })}
          style={{
            marginInline: "auto",
            display: "block",
            marginTop: "2rem",
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

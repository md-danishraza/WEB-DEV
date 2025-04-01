export default function reducer(state, action) {
  if (action.type === "CLEAR") {
    return { ...state, cart: new Map() };
  } else if (action.type === "REMOVE") {
    const copy = new Map(state.cart);
    copy.delete(action.payload.id);
    return { ...state, cart: copy };
  } else if (action.type === "INCREASE") {
    const copy2 = new Map(state.cart);
    const id = action.payload.id;
    const item = copy2.get(id);
    item.amount += 1;
    copy2.set(id, { ...item });
    return { ...state, cart: copy2 };
  } else if (action.type === "DECREASE") {
    const copy3 = new Map(state.cart);
    const id = action.payload.id;
    const item = copy3.get(id);
    if (item) {
      item.amount -= 1;
      if (item.amount > 0) {
        copy3.set(id, { ...item });
      } else {
        copy3.delete(id);
      }
    }
    return { ...state, cart: copy3 };
  } else if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  } else if (action.type === "RESET") {
    return { ...state, cart: action.payload.newcart, isLoading: false };
  } else {
    throw new Error("no action matched");
  }
}

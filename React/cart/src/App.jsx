// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./AppContext";

function App() {
  const { state, dispatch } = useGlobalContext();
  // console.log(state.isLoading);
  return (
    <main>
      {state.isLoading ? (
        <div className="loading" style={{ marginTop: "5rem" }}></div>
      ) : (
        <>
          <Navbar />
          <CartContainer />
        </>
      )}
    </main>
  );
}

export default App;

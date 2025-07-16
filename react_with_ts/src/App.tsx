import Component from "./starter/05-challenge";
function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      <Component type="basic" name="john" />
      <Component type="advance" name="john" email="test@gmail.com" />
    </main>
  );
}

export default App;

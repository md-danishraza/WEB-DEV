import ThemeProvider from "./context";

function ParentComponent(){
  // return <Component/>
  return (
    <ThemeProvider>
      <Component/>
    </ThemeProvider>
  )
}


import { getContext } from "./context";
function Component() {
  const context = getContext();
  console.log(context)
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
      <button className="btn btn-center" onClick={()=>context.setTheme("light")}>toggle theme</button>
    </div>
  );
}
export default ParentComponent;

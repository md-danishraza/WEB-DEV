
// type MyProps = {
  //   name:string,age:number,children:React.ReactNode
  // }
import {type PropsWithChildren } from "react";
// its a generic type that do intersection with our type (oject) 
// and add the children?:React.ReactNode
type MyProps = PropsWithChildren< {
  name:string,age:number
}>
function Component({name,age,children}:MyProps) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Props</h2>
      <h1>{name}</h1>
      <h1>{age}</h1>
      {children}
    </div>
  );
}
export default Component;

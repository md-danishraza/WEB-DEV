import { useState } from "react";

type Link = {
  id:number,
  url:string,
  text:string
}
const navLinks:Link[] = [
  {
    id:1,
    url:"google.com",
    text:"google"
  }
]

function Component() {
  // primitive types - ls inferring
  const [text,setText] = useState("danish");
  // array of list ( need empty)
  const [list,setList] = useState<string[]>([]);
  const [links  ,setLinks] = useState<Link[]>([]);

  const handleClick = ()=>{
    console.log(text)
  }
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>State</h2>
      <button className="btn btn-center" onClick={handleClick}>click me</button>
    </div>
  );
}
export default Component;

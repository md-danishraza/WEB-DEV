import { useState } from "react";

function Component() {
  const [text,setText] = useState("")
  const [email,setEmail] = useState("")
  const handleEmail  = (e:React.ChangeEvent<HTMLInputElement>)=>{
    // console.log(e)
    setEmail(e.target.value)
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(formData));

  }
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Events</h2>
      <form action="#" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={text} onChange={(e)=>setText(e.target.value)}/>
        </fieldset>
        <fieldset>
          <label htmlFor="email">email</label>
          <input type="email" id="email" name="email" onChange={handleEmail} value={email}/>
        </fieldset>
        <button type="submit" >submit</button>
      </form>
    </div>
  );
}
export default Component;

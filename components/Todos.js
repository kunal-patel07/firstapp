import { resolve } from "styled-jsx/css";

export default async function Todos() {
     await new Promise((resolve)=>setTimeout(resolve,1000))
     let data = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
     let res  = await data.json()

  return (
    <div>
        {res.map(({title,completed})=>(
     <div key={title}>
      <p>{title}</p>
      <input type='checkbox' checked={completed}  readOnly   />
     </div>))}
    </div>
  )
}

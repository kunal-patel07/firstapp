 //  export let dynamic = "force-dynamic"
// 'use client';
// import { useState } from 'react';


//created function to fetch data and convert into json
async function fetchData(url) {
    let data = await fetch(url)
    return await data.json()   
}
//parallel call for all apis using promise.All
let urls = [
  "https://jsonplaceholder.typicode.com/todos?_limit=5",
  "https://procodrr.vercel.app/?sleep=1000",
  "https://procodrr.vercel.app/?sleep=5000",
];

let webDev = async() => {
    let [todos, data2s, data3s] = await Promise.all(
        urls.map(url => fetchData(url))
    )
    
    // const [completedTodos, setCompletedTodos] = useState({});

    // const handleCheckboxChange = (title) => {
    //     setCompletedTodos(prev => ({
    //         ...prev,
    //         [title]: !prev[title]
    //     }));
    // };

    return (
        <div>
            {todos.map(({title, completed}) => (
                <div key={title}>   
                    <p>{title}</p>
                    {/* <input 
                        type='checkbox' 
                        checked={completedTodos[title] ?? completed} 
                        onChange={() => handleCheckboxChange(title)}
                    /> */}
                </div>
            ))}
            <h3>{JSON.stringify(data2s)}</h3>
            <h3>{JSON.stringify(data3s)}</h3>
            
            <p>Front end dev </p>
            <p>Back end dev</p>
            <p>Full stack Dev </p>
            <p>MERN stack dev </p>
        </div>
    );
};

export default webDev;

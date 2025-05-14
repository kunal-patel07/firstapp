"use client" 

import Link from "next/link";
import { useEffect, useState } from "react";

let  Services =()=>{
    let [post,setPost] = useState([]);


    let fetchData  =async ()=>{
        let data  = await fetch("https://.typicode.com/posts?_limit=5");
        let res = await data.json()
        setPost(res)
        console.log(res)
    }

    useEffect(()=>{
        fetchData()
    },[])   
    return (
        <div>
        <div>
          {post.map((item)=><div key={item.id}>
             <h2>{item.title}</h2>
             <h4>{item.body}</h4>

          </div>)}
            welcome to services
        </div>   
        <p>
           <Link href="/services/webDev">Web Development</Link> 
        </p>
        </div>
    )
}

export default Services;
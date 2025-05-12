import Link from "next/link";

let  Services =()=>{
    return (
        <div>
        <h1>
            welcome to services
        </h1>
        <p>
           <Link href="/services/webDev">Web Development</Link> 
        </p>
        </div>
    )
}

export default Services;
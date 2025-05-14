  
// app/page.js
import Link from 'next/link';


export let revalidate = 5
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      
      <nav>
        <Link href="/services">Services</Link> 
        <Link href="/about">About</Link>
        <Link href="/posts/1">View Posts</Link>
        <h4>{new Date().toLocaleString()}</h4>
      </nav>
    </div>
  );
}
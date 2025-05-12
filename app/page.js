
// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/services">Services</Link> 
      <Link href="/about">About</Link>
    </div>
  );
}
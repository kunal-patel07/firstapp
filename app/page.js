  
// app/page.js
import Link from 'next/link';
import Page from './posts/[rId]/page';
import { Provider } from 'react-redux';
import appStore from '@/store/appStore';
  

export let revalidate = 5
export default function Home() {
   const services = [
    "Web Development",
    "Mobile App Development",
    "Consulting Services",
    "Digital Marketing",
  ];
  return (
    <div>
      <h1>Home Page</h1>
      <Provider store={appStore}>


      <nav>
        <Link href="/services">Services</Link> 
        <Link href="/about">About</Link>
        <Link href="/posts/1">View Posts</Link>
        <h4>{new Date().toLocaleString()}</h4>
        <Page>
          {services.map((item,index)=>(
            <h3 key={index}>{item}</h3>
          ))}
        </Page>
      </nav>
          </Provider>
    </div>
  );
}
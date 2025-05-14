import ResDelay2s from "@/components/ResDelay2s";
import ResDelay3s from "@/components/ResDelay3s";
import Todos from "@/components/Todos";
import Link from "next/link";
import { Suspense } from "react";

const About = async () => {
  return (
    <div>
  <Suspense fallback=<div>"loading todos..."</div>> <Todos/>   </Suspense> 
  <Suspense fallback=<div>"loading todos..."</div>><ResDelay2s/>    </Suspense> 
  <Suspense fallback=<div>"loading todos..."</div>>  <ResDelay3s/>   </Suspense> 
      <h1> about</h1>
      <p>providing services related to tech</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default About;

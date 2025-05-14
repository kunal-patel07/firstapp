// "use client"
import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Views from "@/components/Views";
import { notFound } from "next/navigation";
import { Suspense, use } from "react";

export let dynamicParams = false;
// export async function generateStaticParams() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return data.map(({id})=>({rId:`${id}`}));
// }

const Page =  ({ params }) => {
  const { rId } = use (params);

  if (!/^\d+$/.test(rId)) {
    notFound();
  }

  return (
    <div>
      <h1>Posts ID: {rId}</h1>
    <div>
     <Likes/>
     <Comments/>
     <Views/>
      </div>
    </div>
  );
};

export default Page;

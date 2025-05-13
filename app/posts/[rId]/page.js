import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Views from "@/components/Views";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export let dynamicParams = false;
// export async function generateStaticParams() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return data.map(({id})=>({rId:`${id}`}));
// }

const Page = async ({ params }) => {
  const { rId } =await params;

  if (!/^\d+$/.test(rId)) {
    notFound();
  }

  return (
    <div>
      <h1>Posts ID: {rId}</h1>
      <Suspense fallback=<div>loading views...</div>>
       <Views/>
      </Suspense>
       <Suspense fallback=<div>loading likes...</div>>
      <Likes/>
      </Suspense>
       <Suspense fallback=<div>loading comments...</div>>
      <Comments/>
      </Suspense>
    </div>
  );
};

export default Page;

"use client"
import Home from "@/app/page";
import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Views from "@/components/Views";
import { notFound } from "next/navigation";
import { Children, Suspense, use } from "react";
import { useDispatch } from "react-redux";

export let dynamicParams = false;
// export async function generateStaticParams() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return data.map(({id})=>({rId:`${id}`}));
// }

const Page = ({ params, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="prose max-w-none">
            {children}
          </div>
          
          <div className="flex flex-wrap gap-4 justify-between items-center pt-4 border-t border-gray-200">
            <Likes />
            <Comments />
            <Views />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

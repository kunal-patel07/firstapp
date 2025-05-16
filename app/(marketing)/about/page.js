import ResDelay2s from "@/components/ResDelay2s";
import ResDelay3s from "@/components/ResDelay3s";
import Todos from "@/components/Todos";
import Link from "next/link";
import { Suspense } from "react";

const About = async () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Providing cutting-edge technology services to help businesses thrive in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Suspense fallback={<div className="animate-pulse h-32 bg-gray-200 rounded"></div>}>
            <Todos />
          </Suspense>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
            <Suspense fallback={<div className="animate-pulse h-32 bg-gray-200 rounded"></div>}>
            <ResDelay2s />
          </Suspense>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <Suspense fallback={<div className="animate-pulse h-32 bg-gray-200 rounded"></div>}>
            <ResDelay3s />
          </Suspense>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;

// "use client"
// app/page.js
import Link from 'next/link';
import Page from './posts/[rId]/page';
// import { Provider } from 'react-redux';
  // import appStore from '@/store/appStore';
    
// export let revalidate = 5  
export default function Home() {
  const services = [
    "Web Development",
    "Mobile App Development",
    "Consulting Services",
    "Digital Marketing",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Welcome to Tech Giants
        </h1>

        <nav className="flex flex-col items-center space-y-4 mb-12">
          <div className="flex space-x-6">
            <Link 
              href="/services" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Services
            </Link> 
            <Link 
              href="/about" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="/posts/1" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              View Posts
            </Link>
          </div>
          <h4 className="text-sm text-gray-500">
            {new Date().toLocaleString()}
          </h4>
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-700">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
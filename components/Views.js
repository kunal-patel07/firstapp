import { resolve } from "styled-jsx/css";

const Views = () => {
  return (
    <button className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors duration-200">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path 
          fillRule="evenodd" 
          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" 
          clipRule="evenodd" 
        />
      </svg>
      <span className="font-medium">50k Views</span>
    </button>
  )
}

export default Views;

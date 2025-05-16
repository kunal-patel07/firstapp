import './globals.css'
// import appStore from "@/store/appStore";
// import { Provider } from "react-redux";

// app/layout.js
export const metadata = {
  title: 'Tech Giants',
  description: 'Your trusted technology partner',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">
        {children}
      </body>
    </html>
  );
}

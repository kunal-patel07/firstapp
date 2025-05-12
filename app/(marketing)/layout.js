export const metadata = {
  title: 'Tech Giants',
  description: '...',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>This app will render on all page</h1>
        {children}
        <h3 className="bottom-0">copyright </h3>
      </body>
    </html>
  );
}

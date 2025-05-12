// app/layout.js
export const metadata = {
  title: 'Tech Giants',
  description: '...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

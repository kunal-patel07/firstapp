export const metadata = {
  title: 'Tech Giants',
  description: '...',
}
 
export default function marketing({ children }) {
  return (
 <>
    <h1>This app will render on all page</h1>
        {children}
        <h3 className="bottom-0">copyright </h3>
    </>
  );
}

import { notFound } from "next/navigation";



export let dynamicParams = true;
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data.map(({ id }) => ({ rId: `${id}` }));
}

const Page = ({ params }) => {
  const { rId } = params;

  if (!/^\d+$/.test(rId)) {
    notFound();
  }

  return (
    <div>
      <h1>Posts ID: {rId}
        
      </h1>
    </div>
  );
};

export default Page; 

// /app/[rId]/page.js
import { notFound } from "next/navigation";
import styles from "./rid.module.css"
export let dynamicParams = false    
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data.map(({ id }) => ({ rId: `${id}` }));
}

const Page =async ({ params }) => {
  console.log(styles)
  const { rId } =await params;

  if (!/^\d+$/.test(rId)) {
    notFound();
  }

  return (
    <div>
      <h1 className={styles.title}>Post ID: {rId}</h1>
    </div>
  );
};

export default Page;

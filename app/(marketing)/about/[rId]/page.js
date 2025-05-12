import { notFound } from "next/navigation"

const page =async ({params}) => {
    let {rId} = await params
    if( !/^\d+$/.test(rId)){
       notFound() 
    }
  return (
    <div>
      <h1>page  :{rId}</h1>
    </div>
  )
}

export default page

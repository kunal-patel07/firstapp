
const page =async ({params}) => {
    console.log(await params)
    let {blogId} = await params
  return (
    <div>
      blog 1{blogId}
    </div>
  )
}

export default page

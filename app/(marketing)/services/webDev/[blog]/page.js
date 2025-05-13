
let dynamic = 'force-dynamic'

const page = ({params}) => {
    console.log( params)
    let {blogId} =  params
  return (
    <div>
      blog 1{blogId}
    </div>
  )
}

export default page

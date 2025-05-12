
const page =async ({params}) => {
    let {filePath} = await params
    console.log(filePath)
  return (
    <div>
      <h1>file Path : /{filePath.join("/")}</h1>
    </div>
  )
}

export default page

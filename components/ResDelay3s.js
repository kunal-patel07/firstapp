
export default async function ResDelay3s() {
    
  let delayResponse2 = await fetch("https://procodrr.vercel.app/?sleep=3000");
  let delayData2 = await delayResponse2.json();

  return (
    <div>
       {JSON.stringify(delayData2)}
    </div>
  )
}

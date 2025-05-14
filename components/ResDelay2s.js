
export default async function ResDelay2s() {
    
  let delayResponse1 = await fetch("https://procodrr.vercel.app/?sleep=2000");
  let delayData1 = await delayResponse1.json();

  return (
    <div>
       {JSON.stringify(delayData1)}
    </div>
  )
}

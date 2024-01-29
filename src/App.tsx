import { useEffect, useState } from "react"
import getData from './utils/getData'
type SakugaCut = {
  url?: string
}

function App() {
  const [sakugaData, setSakuga] = useState<SakugaCut>({})
  const changeCut = () => {
    getData().then((response: SakugaCut) => setSakuga(response))
  }
  useEffect(() => {
    changeCut()
  }, [])
  return (
    <article className="flex flex-col justify-center items-center gap-5">
    <h1>Random cut</h1>
    <img src={sakugaData.url} alt="" />
    <button className="border-2 py-2 px-2 box-border active:scale-105 hover:bg-gray-300" onClick={changeCut}>Click to retrieve another cut</button>
    </article>
  )
}

export default App

import { useState } from "react"


function App() {
  const [color,setcolor] = useState("olive")

  return (
    //total screeen
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >  
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 px-2 rounded-3xl" >

          <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor: "red"}}>Red</button>

<button onClick={()=>setcolor("green")} className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor: "green"}}>green</button>

<button onClick={()=>setcolor("blue")} className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor: "blue"}}>blue</button>

<button onClick={()=>setcolor("yellow")} className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor: "yellow"}}>yellow</button>

<button onClick={()=>setcolor("white")} className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor: "white"}}>ehite</button>

<button onClick={()=>setcolor("black")} className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor: "black"}}>black</button>

<button onClick={()=>setcolor("grey")} className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor: "grey"}}>grey</button>


<button onClick={()=>setcolor("pink")} className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor: "pink"}}>pink</button>

<button onClick={()=>setcolor("purple")} className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor: "purple"}}>purple</button>
        </div>
      </div>
    </div>
  )
}

export default App

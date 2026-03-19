import { useState } from "react"


const likes = {
    "왕과 사는 남자":20,
    "주술회전":30,
    "나루토": 14 
}

function Title({title, thumbsup}) {
  const [count, setCount] = useState(thumbsup)
  return (
    <div
      style= {{
        height:100, padding:10, margin:10, border:"1px solid"
      }}
    >
      <h3>{title}</h3>
      <button onClick={()=>setCount(count+1)}> 👍 {count}</button>
    </div>
  )
}

export default function TitleList() {
  return (
    <>
      {
        Object.entries(likes).map( ([title, thumbsup], idx) => {
          return <Title key={idx} title={title} thumbsup={thumbsup}/>
        } )
      }
    </>
  )
}

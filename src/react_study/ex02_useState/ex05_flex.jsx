import { useState } from "react"
import "./ex05_flex.css"

export default function FlexEx() {
  const [radius, setRadius] = useState(0)
  return (
    <>
      <div className="box" style={{borderRadius: `${radius}px` }}>
        <h2>빅숏</h2>
        <h2>진격의 거인</h2>
        <h2>주술회전</h2>
      </div>
      <div className="buttonBox">
        <button onClick={()=>setRadius(radius+1)}>둥글게</button>
        <button onClick={()=>setRadius(0)}>초기화</button>
      </div>
    </>
  )
}
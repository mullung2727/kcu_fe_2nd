import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MyComponent2, { Child, Child2, MyComponent} from './react_study/ex01_basic/ex01_component'
import UseStateEx from './react_study/ex02_useState/ex01_basic'
import TitleList from './react_study/ex02_useState/ex03_map'
import UseStateArr from './react_study/ex02_useState/ex04_arr'
import FlexEx from './react_study/ex02_useState/ex05_flex'
import ObjectEx from './react_study/ex02_useState/ex06_object'
import Filter from './react_study/ex02_useState/ex07_filter'
import AddRemove from './react_study/ex04_useRef/ex01_useRef'
import Timer from './react_study/ex03_useEffect/ex02_Timer'
import TestContext from './react_study/ex05_useContext/ex01_noContext'
import LangComp from './react_study/ex05_useContext/ex03_language'
import MyApp from './react_study/ex05_useContext/ex05_useContext'

function App() {
  // const [title, setTitle] = useState("기본 제목")
  return (
    <>
      {/* <h1>{title}</h1>
      <div>
        <button 
          onClick={()=>{
          {title === '기본 제목' ? (
            setTitle("새로운 제목")
          ) : (
            setTitle("기본 제목")
          )}
        }}
          style={{fontSize:"20px", color:'blue'}}
        >
          제목 변경
        </button>
        <div>
          {title === '새로운 제목' && <p>제목이 바뀌었습니다.</p>}
        </div>
      </div> */}
      {/* <MyComponent />
      <MyComponent2 />
      <Child name='물렁이' childStyle={{color:'skyblue'}} />
      <Child2 name='노자'/> */}
      {/* <UseStateEx /> */}
      {/* <TitleList /> */}
      {/* <UseStateArr/> */}
      {/* <FlexEx/> */}
      {/* <ObjectEx/> */}
      {/* <Filter/> */}
      {/* <AddRemove/> */}
      {/* <Timer /> */}
      {/* <MyApp/> */}
      {/* <TestContext/> */}
      {/* <LangComp /> */}
      <MyApp />
    </>
  )
}

export default App

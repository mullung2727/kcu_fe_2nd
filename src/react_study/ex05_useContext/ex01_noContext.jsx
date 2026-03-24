import { createContext, useContext } from "react";

const UserContext = createContext()

function FirstComp() {
  return (
    <div>
      <h1>첫 번째 컴포넌트</h1>
      <SecondComp />
    </div>
  )
}

function SecondComp(){
  const userName = useContext(UserContext)
  return (
    <h1>{userName} 입니다.</h1>
  )
}

export default function TestContext() {
  const userName = '정원준';
  return (
    <UserContext.Provider value={userName}>
      <h2>APP</h2>
      <FirstComp />
    </UserContext.Provider>
  )
}
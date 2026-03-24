function FirstComp({userName}) {
  return (
    <div>
      <h1>첫 번째 컴포넌트</h1>
      <SecondComp userName={userName} />
    </div>
  )
}

function SecondComp({userName}){
  return (
    <h1>{userName} 입니다.</h1>
  )
}

export default function TestContext() {
  const userName = '정원준';
  return (
    <div>
      <h2>APP</h2>
      <FirstComp userName={userName}/>
    </div>
  )
}
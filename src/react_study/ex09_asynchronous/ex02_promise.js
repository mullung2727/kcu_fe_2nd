// const myPromise = new Promise( (resolve, reject)=> {
//   setTimeout( ()=>{
//     // resolve("작업 성공")
//     reject("작업 실패")
//   }, 500)
// })

// myPromise.then( (result)=> {
//   console.log(`결과: ${result}`)
// }).catch((error)=>{
//   console.error(`에러: ${error}`)
// })

function step(msg) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (msg.startsWith("오")){
        console.log(msg);
        resolve();
      } else {
        reject(`실패: ${msg}는 '오'로 시작하지 않음`)
      }
    }, 500)
  })
}

step("오 1단계 완료")
  .then(()=>step("오 2단계 완료"))
  .then(()=>step("오 3단계 완료"))
  .then(()=>step("와 4단계 완료"))
  .catch((err)=>console.error("에러: ", err))
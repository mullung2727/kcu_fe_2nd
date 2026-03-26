// console.log("1. 시작");

// setTimeout(()=>{
//   console.log("2. 1초 후 실행")
// }, 1000)

// console.log("3. 끝")

function sayHello(name, callback){
  console.log("안녕, ", name);
  callback();
}

// sayHello("철수", ()=>{
//   console.log("잘 지내자")
// })

setTimeout(()=>{
  console.log("1단계")
  setTimeout(()=>{
    console.log("2단계")
    setTimeout(()=>{
      console.log("3단계")
      setTimeout(()=>{
        console.log("4단계")
      }, 500)
    }, 500)
  }, 500)
}, 500)
function Info({name,age}) {
  return (
    <h1>{name}은 {age}살 이다.</h1>
  )
}

export default function InfoList() {
  return (
    <>
      <Info name="Alice" age={30}/>
      <Info name="Bob" age={40}/>
    </>
  )
}

function Book({title, author, year}){
  return (
    <div style={{
      display:"flex",
      gap:"10px",
      justifyContent:"center",
      fontSize:"25px"
    }}>
      <span>제목: {title}</span>
      <span>저자: {author}</span>
      <span>출판연도: {year}</span>
    </div>
  )
}

const books = [
  {title:"해리포터", author:"J.K. 롤링", year:1997},
  {title:"어린왕자", author:"생텍쥐페리", year:1943},
]

export function BookList() {
  return(
    <div>
      {
        books.map(({title, author, year}, idx)=> {
          return <Book key={idx} title={title} author={author} year={year}/>
        })
      }
    </div>
  )
}
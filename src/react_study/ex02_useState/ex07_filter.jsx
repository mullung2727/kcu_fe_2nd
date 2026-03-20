import { useState } from "react";

export default function Filter() {
  const origin = [
    { name: "노트북", price: 1200000, description: "고성능 업무용 노트북" },
    { name: "키보드", price: 35000, description: "기계식 키보드" },
    { name: "마우스", price: 9000, description: "무선 마우스" },
    { name: "이어폰", price: 9000, description: "가성비 좋은 유선 이어폰" },
    { name: "모니터", price: 210000, description: "27인치 FHD 모니터" },
  ]
  const [products, setProducts] = useState(origin);
  const [price, setPrice] = useState(0)
  // products를 useState
  // price를 useState
  // input -> setPrice
  // button -> setProducts(filter)
  return (
    <div>
      <input 
        type="number"
        value={price}
        onChange={(e)=>setPrice(parseInt(e.target.value))}
      />
      <button
        onClick={()=>{
          return setProducts(origin.filter((item)=>(item.price<price)))
        }}
      >적용</button>
      <h2>{price} 미만 상품 목록</h2>
      {
        products.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{
                border: "1px solid gray",
                padding: "12px",
                marginBottom:"10px"
              }}
            >
              <h3>{item.name}</h3>
              <p>가격: {item.price}</p>
              <p>{item.description}</p>
            </div>
          )
        })
      }
    </div>
  )

}
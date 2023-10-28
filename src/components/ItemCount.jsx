import { useState } from "react"

export const ItemCount = ({ initial,stock }) => {
  const [count,setCount] = useState(initial);
  
  const handleSub = () => {
    count > 1 && setCount(count - 1)
  }
  const handleAdd = () => {
    count < stock && setCount(count + 1)
  }

  return (
    <div className="counter">
        <button onClick={handleSub}>-</button>
        <p>{count}</p>
        <button onClick={handleAdd}>+</button>
    </div>
  )
}

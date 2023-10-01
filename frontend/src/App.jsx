import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [item, setItem] = useState({
    name:'React',price:5000,image:'http://127.0.0.1:5173/src/assets/react.svg'
  })
  const handleClick = async (e) => {
    const data = await fetch('http://localhost:3001/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
          item
      })
    })
    const response = await data.json();
    console.log(response);
    window.location.assign(response.url);
  }
  return (
    <>
      <div className='card' style={{border:'1px solid red'}}>
        <img src = {item.image} />
        <h3>{item.name}</h3>
        <h5>Price: ${item.price}</h5>
        <button onClick={handleClick}>
          Buy
        </button>
      </div>
        
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const items = [
    "hello, k8s!!!",
  ]

  return (
    <div>
      <h2>SETTING UP CICD PIPELINE</h2>

      {
        items.map((item, index)=>
        <p>
         {index+1}. {item}
        </p>
        
        )
      }
    </div>
    
  )
}

export default App

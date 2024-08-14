import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const items = [
    "Preparing CICD Pipeline",
    "just testing on circleci"

  ]

  return (
    <div>
      <h2>SETTING UP CICD PIPELINE</h2>
      <h3>hello, k8s!!!</h3>
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

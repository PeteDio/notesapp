import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState('')

  useEffect(() => {
    fetch("http://192.168.0.27:8080/v1/test")
      .then(response => response.json())
      .then(data => setCount(data.message))
  }, [])

  return (
    <>
      <h1>Api Data: </h1>
      <p>{count}</p>
    </>
  )
}

export default App

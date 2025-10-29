import React from 'react'

const App = () => {
  const array = [1, 2, 3, 4, 5]
  return (
    <div>
      {array.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default App

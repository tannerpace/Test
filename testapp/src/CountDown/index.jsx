import React from 'react'

function CountDown({ countDown }) {
  const handleClick = () => {
    countDown()
  }
  return (
    <div>
      <button onClick={handleClick}>Count Down</button>
    </div>
  )
}

export default CountDown

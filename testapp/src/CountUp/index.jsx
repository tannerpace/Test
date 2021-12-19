import React from 'react'

function CountUp({ countUp }) {

  const handleClick = () => {
    countUp()
  }

  return (
    <div>
      <button onClick={handleClick}>Count Up</button>
    </div>
  )
}

export default CountUp

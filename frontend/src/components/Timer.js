import React from 'react'
import "./timer.css"

function Timer() {
  return (
    <div className="timer">
      <div className ="tab">
        <button>Start</button>
        <button>Pause</button>
      </div>
      <div class="time-count">
        <h1 className='time-text'>45:00</h1>
      </div>
    </div>
  )
}

export default Timer
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
         45:00
      </div>
    </div>
  )
}

export default Timer
import React from 'react'
import timerStyle from "./Timer.module.css"

function Timer() {
  return (
    <div className={timerStyle.timer}>
        <div className ={timerStyle.tab}>
        <button className={timerStyle.btn}>Start</button>
        <button className={timerStyle.btn}>Pause</button>
      </div>
      <div className={timerStyle.timeCounter}>
        <h1 className={timerStyle.timeTexts}>45:00</h1>
      </div>
    </div>
  )
}

export default Timer
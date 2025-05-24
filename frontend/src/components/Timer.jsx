import TimerStyle from './Timer.module.css'

const Timer = () =>{
    return (
        <>
        <div className={TimerStyle.timer}>
        <div className ={TimerStyle.tab}>
        <button className={TimerStyle.btn}>Start</button>
        <button className={TimerStyle.btn}>Pause</button>
      </div>
      <div className={TimerStyle.timeCounter}>
        <h1 className={TimerStyle.timeTexts}>45:00</h1>
      </div>
    </div>
        </>
    )
}

export default Timer
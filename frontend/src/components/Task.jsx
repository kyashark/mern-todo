import TaskStyle from './Task.module.css'

const Task = ()=>{
    return(
        <>
        <div className={TaskStyle.container}>
      <form className={TaskStyle.addTask}>
        <input type="text"></input>
        <button type="submit">Add</button>
      </form>
      <div className={TaskStyle.taskList}>
      <div className={TaskStyle.task}>
        <input type="checkbox" className={TaskStyle.checkbox}></input>
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={TaskStyle.task}>
        <input type="checkbox" className={TaskStyle.checkbox}></input>
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={TaskStyle.task}>
        <input type="checkbox" className={TaskStyle.checkbox}></input>
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={TaskStyle.task}>
        <input type="checkbox" className={TaskStyle.checkbox}></input>
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={TaskStyle.task}>
        <input type="checkbox" className={TaskStyle.checkbox}></input>
        <span>Lorem ipsum dolor</span>
      </div>
      </div>
    
    </div>
        </>
    )
}

export default Task;
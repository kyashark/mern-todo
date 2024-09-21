
import './App.css';
import Timer from './components/Timer';
import Task from './components/Task';
import Profile from './components/Profile';


function App() {
  return (
  
      <div className='container'>
        <div className='col-left'>
          <div className='row up'><Timer/></div>
          <div className='row bottom'><Profile/></div>
        </div>
        <div className='col-right'><Task/></div>
      </div>
  
  );
}

export default App;

import Timer from '../components/Timer';
import Task from '../components/Task';
import Profile from '../components/Profile';
import homeStyle from '../styles/Home.module.css';

function Home(){
        return (
        <div className={homeStyle.container}>
          <div className={homeStyle.colLeft}>
            <div className={homeStyle.up}><Timer/></div>
            <div className={homeStyle.bottom}><Profile/></div>
          </div>
          <div className={homeStyle.colRight}><Task/></div>
        </div>
    
    );

}
export default Home;
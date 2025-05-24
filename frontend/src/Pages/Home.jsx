import Timer from '../components/Timer';
import Task from '../components/Task';
import Profile from '../components/Profile';
import HomeStyle from './Home.module.css';

function Home(){
        return (
        <div className={HomeStyle.container}>
          <div className={HomeStyle.colLeft}>
            <div className={HomeStyle.up}><Timer/></div>
            <div className={HomeStyle.bottom}><Profile/></div>
          </div>
          <div className={HomeStyle.colRight}><Task/></div>
        </div>
    
    );

}
export default Home;
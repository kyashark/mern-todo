import ProfileStyle from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={ProfileStyle.profile}>
        <div className={ProfileStyle.details}>
          <a href="#">
            <p className={ProfileStyle.username}>Hello Shakya</p>
          </a>
          <p className={ProfileStyle.date}>Sunday May 19</p>
          <p className={ProfileStyle.time}>6.51 PM</p>
        </div>
        <div className={ProfileStyle.image}>
          <img src="./logo.png" />
        </div>
      </div>
    </>
  );
};

export default Profile;

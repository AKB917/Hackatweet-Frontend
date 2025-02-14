import styles from '../styles/HomeWall.module.css';
import Tweet  from './Tweet';


function HomeWall() {

  return (
    <div >
        <div className={styles.main} >
         <h1 className={styles.home}>Home</h1>
         <input className={styles.textcontainer} type="text" placeholder="What's up?" />
         <button className={styles.tweetbutton}> Tweet</button>
         </div>

         <div>
          <Tweet />
         </div>


    </div>
  );
}

export default HomeWall;


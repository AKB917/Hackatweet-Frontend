import styles from '../styles/mainWall.module.css';
import Profil from '../components/Profil'
import HomeWall from '../components/HomeWall';
import Trends from '../components/Trends';

function mainWall() {
  return (
    <div className={styles.main}>

{/* profil */}
        <div className={styles.profil}>
            <Profil />
        </div>
        

{/* home Wall */}
        <div className={styles.homeWall}>
                <HomeWall/>
        </div>

{/* Trends */}
        <div className={styles.trends}>
                <Trends/>
        </div>
      
    </div>
  );
}


export default mainWall;
import styles from '../styles/Home.module.css';
import Background from './Background';
import Connexion from './Connexion';

function Home() {
  return (
    <div className={styles.main}>
      {/* div de gauche */}
        <div className={styles.Background}> 
         <Background />
        </div>

{/* div du centre  */}
      <div className={styles.Connexion}> 
        <Connexion/> 

      </div>

{/* div de droite */}

      <div> 
        
      </div>
    </div>
  );
}

export default Home;

import styles from '../styles/Home.module.css';
import Image from 'next/image'

function Background() {
    return (
      <div>
    
       <Image className={styles.Background} src="/images/background.png" alt="background" width={600} height={900}/>

      </div>
    );
   }
   
   
   export default Background;


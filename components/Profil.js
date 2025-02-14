import styles from '../styles/profil.module.css';
import Image from 'next/image'
import User from './User'


function Profil() {


  return (
    <div className={styles.main}>
      <Image className={styles.image} src="/images/logo.png" alt="logo" width={70} height={70}/>
      <div className={styles.user}><User/></div>
    </div>
  );
}

export default Profil;


import styles from '../styles/user.module.css';
import Image from 'next/image'

function User() {

  return (
    <div >
        <div className={styles.main} >
        <Image className={styles.image} src="/images/user.jpg" alt="logo" width={80} height={80}/>
        <div className={styles.profilecontainer}> 
         <h1 >John</h1>
         <h3> @John48 </h3>
         <button className={styles.logout}> Logout</button>
         </div>
         </div>
    </div>
  );
}

export default User;
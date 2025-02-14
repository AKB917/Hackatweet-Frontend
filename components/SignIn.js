
import styles from '../styles/SignIn.module.css';
import Image from 'next/image'


function SignIn({ onClose }) {

  return (
    <div className={styles.main}>
       <button className= {styles.xbutton} onClick={onClose} > X </button>
        <Image className={styles.image} src="/images/logo.png" alt="logo" width={70} height={70}/>
        <p className ={styles.text}> Connect to Hackatweet </p>
        <input className={styles.username} type="text" placeholder="User Name" />
        <input className={styles.password} type="text" placeholder="Password" />
        <button className= {styles.signIn}> Sign In </button>
  
    </div>
  );
}

export default SignIn;
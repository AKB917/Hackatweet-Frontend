
import styles from '../styles/SignUp.module.css';
import Image from 'next/image'



function SignUp({ onClose }) {


  return (
    <div className={styles.main}>
       <button className= {styles.xbutton} onClick={onClose} > X </button>
        <Image className={styles.image} src="/images/logo.png" alt="logo" width={70} height={70}/>
        <p className ={styles.text}> Create your Hackatweet account </p>
        <input className={styles.firstname} type="text" placeholder="First Name" />
        <input className={styles.username} type="text" placeholder="User Name" />
        <input className={styles.password} type="text" placeholder="Password" />

        
        <button className= {styles.signin}> Sign up </button>
        
      
    </div>
  );
}

export default SignUp;
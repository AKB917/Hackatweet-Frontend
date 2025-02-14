
import styles from '../styles/connexion.module.css';
import Image from 'next/image'


function Connexion({ onSignIn, onSignUp }) {


  return (
    <div className={styles.main}>
        <Image className={styles.image} src="/images/logo.png" alt="logo" width={70} height={70}/>
        <h1 className= {styles.title}> See what's happening </h1>
        <h3 className= {styles.title2}> Join Hackatweet today. </h3>
        <button className= {styles.signup} onClick={onSignUp} > Sign up </button>
        <p className= {styles.para} > Already have an </p>
        <button className= {styles.signin}onClick={onSignIn} > Sign in </button>
        
      
    </div>
  );
}

export default Connexion;
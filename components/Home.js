import styles from '../styles/Home.module.css';
import Background from './Background';
import { useState } from 'react';
import Connexion from './Connexion';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Home() {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false); 
  const [isSignInVisible, setIsSignInVisible] = useState(false);

  const showSignUp = () => {
    setIsSignUpVisible(true); 
  };
  const hideSignUp = () => {
    setIsSignUpVisible(false);
  };

const showSignIn = () => {
  setIsSignInVisible(true); 
  };
  const hideSignIn = () => {
    setIsSignInVisible(false);
  };



  return (
    <div className={styles.main}>

      {/* div de gauche */}
      <div className={styles.Background}>
        <Background />
      </div>

      {/* div du centre */}
      <div className={styles.Connexion}>
        <Connexion onSignIn={showSignIn} onSignUp={showSignUp}/> 
      </div>


      {/* Affichage conditionnel du composant SignUp */}
      {isSignUpVisible && (
        <div className={styles.SignUp}>
           <SignUp onClose={hideSignUp} />
        </div>
      )}
      {isSignInVisible && (
        <div className={styles.SignIn}>
          <SignIn onClose={hideSignIn} />
        </div>
      )}

    </div>
  );
}

export default Home;


import styles from '../styles/tweet.module.css';
import Image from 'next/image'


function Tweet() {

  return (
    <div className={styles.main}>

        <div className={styles.profilcontainer}> 
        <Image src="/images/user.jpg" alt="logo" width={70} height={70}/>
        <h1> John</h1>
        <h3> @john48</h3>
        </div> 

        <div className={styles.tweetcontainer}> 
            <p> YOU CAN'T SEE ME! </p>
            <p> #cenation </p>
        </div>
        <div>

        
        </div>
       
    </div>
  );
}

export default Tweet;
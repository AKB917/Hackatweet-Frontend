import styles from '../styles/tweet.module.css';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Tweet() {

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  

  const handlelike = () => {
    setLiked(!liked);
    if (!liked) {
      setLikeCount(likeCount + 1); 
    } else {
      setLikeCount(likeCount - 1); 
    }
  };

  let iconHeart = {};
  if (liked) {
    iconHeart = { "color": "#e74c3c" };
  }



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
        <span onClick={handlelike} className={styles.like}> <FontAwesomeIcon icon={faHeart} style={iconHeart} /> ({likeCount}) </span>
        <span className={styles.trash}><FontAwesomeIcon icon={faTrash} /></span>
        </div>
       
    </div>
  );
}

export default Tweet;


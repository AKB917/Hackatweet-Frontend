import styles from '../styles/tweet.module.css';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useState ,  useSelector } from 'react';


function Tweet(props) {

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
        <h1> {props.firstname}</h1>
        <h3> {props.username}</h3>
        <span>{props.date}</span>
        </div> 

        <div className={styles.tweetcontainer}> 
            <p> {props.tweet} </p>

        </div>

        <div>
        <span onClick={handlelike} className={styles.like}> <FontAwesomeIcon icon={faHeart} style={iconHeart} /> {props.like} </span>
        <span className={styles.trash}><FontAwesomeIcon icon={faTrash} /></span>
        
        </div>
       
    </div>
  );
}

export default Tweet;
import styles from '../styles/HomeWall.module.css';
import Tweet from './Tweet';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';










function HomeWall() {
const user = useSelector((state) => state.user.value);
const [tweetData , setTweetData] = useState([]);


//Get all tweets
useEffect(() => {
  fetch('http://localhost:3000/tweets')
    .then(response => response.json())
    .then(data => { 
      console.log(data); 

      if (data.result && Array.isArray(data.tweets)) {
        setTweetData(data.tweets); 
        
      } 
    })
  }, []);
 console.log(tweetData)
  const tweets = tweetData.map((data, i) => {
    
      return <Tweet key={i} {...data} />;})


      //Post a new tweet
      fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: signInUsername, password: signInPassword }),
      }).then(response => response.json())
        .then(data => {
          if (data.result) {
            dispatch(login({ username: signInUsername, token: data.token }));
            setSignInUsername('');
            setSignInPassword('');
            setIsModalVisible(false)
          }
        });
    };






















  return (
    <div >
      <div className={styles.main} >
        <h1 className={styles.home}>Home</h1>
        <input className={styles.textcontainer} type="text" placeholder="What's up?" />
        <button className={styles.tweetbutton} onClick={() => postTweet()}> Tweet</button>
      </div>

      <div>
        {tweets}
      </div>


    </div>
  );
}

export default HomeWall;


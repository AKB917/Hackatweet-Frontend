import styles from '../styles/HomeWall.module.css';
import Tweet from './Tweet';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';










function HomeWall() {
const [tweetData , setTweetData] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/tweets')
    .then(response => response.json())
    .then(data => { 
      console.log(data); 

      if (data.result && Array.isArray(data.tweets)) {
        setTweetData(data.tweets); 
        console.log(tweetData)
      } 
    })
  }, []);
 console.log(tweetData)
  const tweets = tweetData.map((data, i) => {
    
      return <Tweet key={i} {...data} />;})
























  return (
    <div >
      <div className={styles.main} >
        <h1 className={styles.home}>Home</h1>
        <input className={styles.textcontainer} type="text" placeholder="What's up?" />
        <button className={styles.tweetbutton}> Tweet</button>
      </div>

      <div>
        <Tweet />
      </div>


    </div>
  );
}

export default HomeWall;


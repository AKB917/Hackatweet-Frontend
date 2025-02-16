import styles from '../styles/HomeWall.module.css';
import { useEffect, useState } from 'react';

function Trends() {
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    // Appel à la route pour récupérer les hashtags
    fetch('http://localhost:3000/hashtag')
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          setHashtags(data.hashtags);
          console.log(data.hashtags)
        } else {
          console.error('No hashtags found');
        }
      })
  }, []);


  return (
    <div >
        <div >
         <h1 className={styles.home}>Trends</h1>
         </div>

         <div>
            <div> 
                <h2>Hashtags</h2>
      <ul>
        {hashtags.map((hashtag, index) => (
          <li key={index}>{hashtag}</li>
        ))}
      </ul>
            </div>
            <h2>Hashtags</h2>
      <ul>
        {hashtags.map((hashtag, index) => (
          <li key={index}>{hashtag}</li>
        ))}
      </ul>
         </div>

    </div>
  );
}

export default Trends;

import styles from '../styles/HomeWall.module.css';


function Trends() {

  return (
    <div >
        <div >
         <h1 className={styles.home}>Trends</h1>
         </div>

         <div>
            <div> 
                <h2> #hackatweet </h2> 
                <h2>  Tweets </h2> 
            </div>
            <div> 
                <h2> #first </h2> 
                <h2>  Tweets </h2> 
            </div>
            <div> 
                <h2> #cenation </h2> 
                <h2>  Tweets </h2> 
            </div>
         </div>

    </div>
  );
}

export default Trends;

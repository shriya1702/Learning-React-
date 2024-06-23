import styles from "./card.module.css"

function Card(){
  return(
    <div className={styles['card']}>
      <img src="src/images/image12.png" className={styles['card--img']} ></img>
        <div className={styles['det']}>
           <img src= "src/images/star.png" className={styles['det--img']}></img>
           <span> 5.0 </span>
           <span className={styles['grey']}>(6) • </span>
            <span className={styles['grey']}>USA</span>
        </div>

        <h2> Life Lesson with katie Zoferes </h2>
        <p className={styles['amt']}><span> <b> From $136</b></span>/person</p>
        
                

    </div>

  )
}
export default Card;
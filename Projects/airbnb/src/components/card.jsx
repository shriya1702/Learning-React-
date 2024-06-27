import styles from "./card.module.css"

function Card(){
  return(
    <div classNameName={styles['card']}>
      <img src="src/images/image12.png" classNameName={styles['card--img']} ></img>
        <div classNameName={styles['det']}>
           <img src= "src/images/star.png" classNameName={styles['det--img']}></img>
           <span> 5.0 </span>
           <span classNameName={styles['grey']}>(6) • </span>
            <span classNameName={styles['grey']}>USA</span>
        </div>

        <h2> Life Lesson with katie Zoferes </h2>
        <p classNameName={styles['amt']}><span> <b> From $136</b></span>/person</p>
        
                

    </div>

  )
}
export default Card;
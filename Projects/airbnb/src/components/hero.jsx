import styles from "./hero.module.css"

const Hero = () => {
  return(
    <section className={styles['hero-sec']}> 

      <img className={styles['hero-img']} src= "src\images\Group77.png"></img>
      <h1 className={styles['hero-title']}> Online Experience</h1>
      <p className={styles['hero-p']}>Join unique intractive activities led by one of a kind hosts all without leaving home</p>

    </section>
 


    
    

  );
}
export default Hero;
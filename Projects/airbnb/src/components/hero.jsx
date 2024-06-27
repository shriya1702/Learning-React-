import styles from "./hero.module.css"

const Hero = () => {
  return(
    <section classNameName={styles['hero-sec']}> 

      <img classNameName={styles['hero-img']} src= "src\images\Group77.png"></img>
      <h1 classNameName={styles['hero-title']}> Online Experience</h1>
      <p classNameName={styles['hero-p']}>Join unique intractive activities led by one of a kind hosts all without leaving home</p>

    </section>
 


    
    

  );
}
export default Hero;
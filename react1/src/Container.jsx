
import styles from "./Container.module.css"


const Container = (props) =>{
  return <div classNameName={styles.Container}> {props.children}  </div>

}

export default Container;
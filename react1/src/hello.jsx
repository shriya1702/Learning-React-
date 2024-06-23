
import styles from "./hello.module.css"

function Hello(){
  let myname= "shriyas"
  
  let fullname = () => {
    return 'sonashi'
  }
  
  const handleclick = (fullname)=>{
    alert(`${myname} is my name`)
  }

  return(
  < >
<h1 className= {styles.yoo}> welcome to my house
    My name is {fullname()} and my daughters name is  {myname}
  </h1>
  <p> This content is passes as children to the conainer</p>

  

  <button className={styles.btn} onClick={handleclick} > CLICK ME DAMMIT </button>


 
</>


  );

     
}

export default Hello;
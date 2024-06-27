const Chai = ( {items} ) => {

  return (
   <ul classNameName= {'list-group'}>
    {
       items.map( (item) => (
           <li key= {item} classNameName={'list-group-item '} >  {item} 
          </li>  )
 
       )
      }
     
 
    </ul>
     
  );

};
export default Chai ;






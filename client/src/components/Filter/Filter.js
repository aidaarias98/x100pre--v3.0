import React, {useEffect} from 'react'
import './Filter.css'

//call them so we can access them here and be able to use them
function Filter({setActive, active, setFiltered, product}) {

  //
    useEffect(() => {
      //conditional 
      //just make sure it is the same as original aka all items
        if(active === '*'){
            setFiltered(product);
              return;
        }
        //creating filtered so that it can filter through the products
        //using 'genre' including the active state
        //grab the original (product)
        //for each individual product
        //
        const filtered = product.filter((product) =>
        product.genre.includes(active)
        );
        setFiltered(filtered); //setting setFiltered to filtered which will be used in the products.jsx
      },[active,product,setFiltered])//run this function everytime these thigs change
    // },[active]);

  return (

    //buttons created so when onclick it will change to the active state 
    //aka the genre that was used in mysql
    <div className='filter-container'>
        <button onClick={() => setActive('*')} >All</button>
        <button onClick={() => setActive('Pop')}>Pop</button>
        <button onClick={() => setActive('Latin')}>Latin</button>
        <button onClick={() => setActive('R&B')}>R&B</button>
        <button onClick={() => setActive('Alternative')}>Alternative</button>
        <button onClick={() => setActive('Misc')}>Misc.</button>
        
        </div>
  )
}

export default Filter
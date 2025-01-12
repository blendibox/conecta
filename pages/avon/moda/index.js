import Head from 'next/head'

import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Listagem from  '../../../components/listagem.js'
import moda from '../../../data/avon-moda.json'



export const config = { amp: true };


export const getStaticProps = async () =>{
   return {
    props: {
      modas: moda,
    
    }
   }
}


 function returnModa({modas}) {

//console.log(moda);

 var ia = 3;

  return (

   <div>

   { moda.map( (item, i) =>
   

    <div  className="containner" key={ia++} >


     <Listagem key={ia++}
        title={item.title}
        image={item.image}
        link={item.link}
        price={item.price}
        brand="Avon"
        offer={item.offer}
        priceGoogle={item.price}
        >
     </Listagem>
 
     </div>


   )}

    

    </div>


   

  )
}

export default returnModa

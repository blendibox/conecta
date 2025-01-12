import  Produto  from '../../../components/produto'
import styles from '../../../styles/Home.module.css'
import casa from '../../../data/avon_casa_.json'
import NextLink from 'next/link'


export const config = { amp: true };

export const getStaticProps = async ({params: {title} }) =>{

	const casas = casa.filter(p =>p.url.toString() == title)

   const price = casas[0].offer == ''? casas[0].price.replace('R','').replace('$','').replace(',','.'): casas[0].offer.replace('R','').replace('$','').replace(',','.') ;


   return {
    props: {
      item: casas[0],
      price: price,

    }
   }
}


export const getStaticPaths = async()=>{
	const paths = casa.map(item =>({
		params: {title: item.url.toString()},
	}))
	return {paths,fallback: false}
}

 function casa_item({item,price}) {

  return(

  <div  className="containner"  >
    <Produto 
        title={item.title}
        image={item.image}
        link={item.link}
        price={item.price}
        brand="Avon"
        offer={item.offer}
        priceGoogle={price}

    />
    
  </div>
)   

  
}


export default casa_item
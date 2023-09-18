
import React from 'react'

import { useParams } from 'react-router-dom'
const Product = (props) => {
    console.log(props)
    const {products} = props
    const prms = useParams()

    const singleproduct =  products.find((item) => item.id === Number(prms.id))
    console.log(singleproduct)
  return (
    <div className='fex'>
    
    <img src={singleproduct.image}/>
    <p>{singleproduct.title}</p>

        
        </div>
  )
}

export default Product
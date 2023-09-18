import React from 'react'
import { Link } from 'react-router-dom'

const Products = (props) => {

    const {products}  = props
  return (
    <div className='grid'>
          {
            products.map((item => (
                <Link to={`/products/${item.id}`}>
               <div className='item-wrpper'>

                <img className='img' src = {item.image
}/>
                </div>
                </Link>
            )))
           
          }
     
        
        
        </div>
  )
}

export default Products
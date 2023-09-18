import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-wrpper'>
        
            
            <div className='img-wrpper'>
                <img src='https://media.istockphoto.com/id/1348054180/photo/woman-choosing-domestic-cleaning-product-by-the-supermarket-shelf.webp?b=1&s=170667a&w=0&k=20&c=_CIFayb3RWESBwnTKtwfflV1ZkNkA9rKMq-6FfUhwCM='/>
            </div>
           
            <Link to="/product">shopnow</Link>
            
            </div>
  )
}

export default Home
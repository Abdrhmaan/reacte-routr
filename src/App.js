import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect, } from 'react';
import { Routes,Route , Link} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import axios from 'axios';
import Product from './components/Product';

function App() {
  const [products , setproducts] = useState([])

  useEffect(()=> {

    axios.get('https://fakestoreapi.com/products')
    .then((res) =>  {


  setproducts(res.data)
  

    })
  
    
    

   
  },[])

  console.log(products)
  return (
    <div className="App">
    <nav>
      <h1>gabi porject</h1>
      <div className='nav'>
     
       <Link to="/">home</Link>
       <Link to="/product">shop</Link>
      </div>
    </nav>

    <Routes>
  
  <Route path='/products/:id' element={<Product  products ={products}/>}/>
      
      <Route path='/product' element={<Products  products= {products}/>}/>

      <Route path='/' element={<Home/>}/>

    </Routes>

    </div>
  );
}

export default App;

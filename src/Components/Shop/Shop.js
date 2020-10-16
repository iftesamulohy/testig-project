import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
const Shop = () => {
    //console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart,setCart]= useState([]);
    const handleAddProduct = (product) =>{
        //console.log("product added",product);
        const sameProduct = cart.find(pd => pd.key===product.key);
        let count = 1;
        let newCart;
        if(sameProduct){
             count= sameProduct.quantity+1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others,sameProduct];
    
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }

        setCart(newCart);
        
        
        addToDatabaseCart(product.key,count);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            
                {
                 products.map(product =><Product key={product.key} showAddtoCart={true} product={product} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
          
    
   
        </div>
    );
};

export default Shop;
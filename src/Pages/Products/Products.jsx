import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    // const [products, setProducts]= useState([])
    // useEffect(()=>{
    //     fetch('https://dummyjson.com/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data.products))
    // } , [])
    // console.log(products)


    const {products} = useLoaderData()
    // const products = myProducts.products
    // console.log(products)
    return (
        <div>
            <p>Total Product :{products.length} </p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 p-3'>
                {
                    products.map( product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;
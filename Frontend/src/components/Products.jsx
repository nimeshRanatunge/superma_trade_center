import React from 'react'
import { useEffect, useState } from "react";
import styled from 'styled-components'
import {popularProducts} from "../data";
import { Product } from './Product';
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {
  //console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  //when we applied filter
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products"
        );
        console.log(res);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]); 
  
  useEffect(() => {
    // if there is a category.......
    cat &&
      setFilteredProducts(
        // check whether our item includes those filters or not 
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
          // example: key=color value=yellow
            item[key].includes(value)
          )
        )
      );
      
  }, [products, cat, filters]);

  useEffect(() => {
    console.log()
    // compare two elements of the array
//     sort((a,b) => a.createdAt - b.createdAt) ---> doesn't work because createdAt is STRING. Instead, use below;
// sort((a,b) => a.createdAt.localeCompare(b.createdAt) )
    if (sort === "newest") {
      setFilteredProducts((prev) =>
      // prev has all products sorted previously
        [...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    // console.log(filteredProducts),
    <Container>
    {cat
      ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
      : products
          .slice(0, 8)
          .map((item) => <Product item={item} key={item.id} />)}
  </Container>
  )
}
export default Products;
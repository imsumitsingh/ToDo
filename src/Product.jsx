import React, { useState,useEffect } from 'react';
import PageTitle from './PageTitle';
import ProductCard from './ProductCard';
import axios from "axios";
import Loader from "react-loader-spinner";

    const Product=()=>{
        const [products, setPost] = React.useState([]);
        const [category, setCategory] = React.useState([]);
        const [search, setSearch] = React.useState('flex');
        const [categoryName, setCategoryName] = React.useState('Vegetarian');
        const [loader, setLoader] = React.useState(true);
      useEffect(()=>{
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`).then((response) => {
                console.log(response.data)
                

                setPost(response.data.meals);
                setLoader(false);
              });
            }, []); 
            
             
             
       
        return( <>

       <PageTitle title="Product"></PageTitle>
          <div className="container">
          <div className="row mb-2">
         
                 
 <div className="col-md-3">
<Loader type="Puff" color="#00BFFF" height={50} width={50} visible={loader}  />
</div>
                  </div>
                
              <div className="row">
             
                  {
                     

                     products.map((item,index)=>{

                      return  <div key={index} className="col-md-3">
                        <ProductCard   name={item.strMealThumb}></ProductCard>
                        </div>
                      }) 
                  }
                  

              </div>

          </div>
      
        </>);
    }
    export default Product;
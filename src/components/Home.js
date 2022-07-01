import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  useGetAllCategoryQuery,
  useGetAllProductsQuery,
} from "../redux/productsApi";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
export default function Home() {
  const [search, setSearch]=useState(" ")
  const [category, setCategory]=useState([])
  const { data, error, isLoading } = useGetAllProductsQuery();
  
  let navigate = useNavigate();
  const { items: products, status } = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();

  const handleChange = async e => {
    const { name, value } = e.target
    console.log("hh",data && data.products.filter((x)=>x.category==value))
    console.log(value)
    const updateList=data.products.filter((x)=>x.category==value)
    setCategory(updateList)
    console.log(updateList)
    
   
  };

    console.log(data && data.products.filter((item)=>item.title.toLowerCase().includes(search)))
    console.log(category)
   // 
  return (
    <div className="container">
      <div>
        <div className="row">
          <div className="col-sm-2 mt-5 mb-3">
            <select
              name="category"
              onChange={handleChange}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected onChange={handleChange}>All</option>
              {products &&
                products.map((item, index) => (
                  <option   key={index} value={item}>{item}</option>
                ))}
            </select>
          </div>
          <div className="col-sm-7 ml-5 mt-5 mb-3">
        
          <input
            onChange={(e)=>setSearch(e.target.value)}
            name="search"
            type="text"
            className="form-control me-2"
            placeholder="search"
          />
          </div>
        </div>
      </div>
      <div className="row">
         {
          (data &&
              data.products.filter((item)=>item.title.toLowerCase().includes(search)).map((item) => (
                <div className="col-sm-4 mb-3" key={item.id}>
                  <div className="card h-100 card-cascade card-ecommerce wider shadow">
                    <div className="view view-cascade overlay text-center">
                      <img className="card-img-top" src={item.images[0]} alt="" />
                      <a>
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
    
                    <div className="card-body card-body-cascade text-center">
                      <h4 className="card-title">
                        <strong>{item.title}</strong>
                      </h4>
    
                      <p className="card-text ">{item.description}</p>
    
                      <Link
                        className="card-footer btn mt-2"
                        to={`/cart/${item.id}`}
                      >
                        See more
                      </Link>
                    </div>
                  </div>
                </div>
              )))
              &&
             ( category.filter((item)=>item.title.toLowerCase().includes(search)).map((item1)=>(
              <div className="col-sm-4 mb-3" key={item1.id}>
              <div className="card h-100 card-cascade card-ecommerce wider shadow">
                <div className="view view-cascade overlay text-center">
                  <img className="card-img-top" src={item1.images[0]} alt="" />
                  <a>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body card-body-cascade text-center">
                  <h4 className="card-title">
                    <strong>{item1.title}</strong>
                  </h4>

                  <p className="card-text ">{item1.description}</p>

                  <Link
                    className="card-footer btn mt-2"
                    to={`/cart/${item1.id}`}
                  >
                    See more
                  </Link>
                </div>
              </div>
            </div>
            )) )
          }
        
      </div>
    </div>
  );
}

import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductQuery } from "../redux/productsApi";

export default function Cart() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetAllProductQuery(parseInt(id));
  console.log(data && data.images);
  return (
    <div className="container">
      <div className="row mb-5">
        {data && (
          <>
            <div className="col-sm mt-5">
              <div>
                <img src={data.images[0]} alt="" />
              </div>
              {data.images.map((item) => (
                <img
                  src={item}
                  alt=""
                  style={{
                    width: "80px",
                    marginLeft: "10px",
                    marginTop: "10px",
                    heigth: "90px",
                  }}
                />
              ))}
            </div>
            <div className="col-sm mt-5">
              <h5>Brand: {data.brand}</h5>
              <h5>Title: {data.title}</h5>
              <h5>Category: {data.category}</h5>
              <h5>Description: {data.description}</h5>
              <h5>Dis count Percentage: {data.discountPercentage}</h5>
              <h5>Price: {data.price}$ </h5>
              <h5>Rating: {data.rating}</h5>
              <h5>Stock: {data.stock}</h5>
              <div className="d-flex justify-content-center">
                <button className="btn mt-3 btn-primary">Buy</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

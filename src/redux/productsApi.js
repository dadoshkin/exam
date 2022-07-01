import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (limit) => `product?${limit && `_limit=${limit}`}`,
    }),
    getAllProduct: builder.query({
      query: (id) => `product/${id}`,
    }),
    

  }),
  })
 



export const { useGetAllProductsQuery,useGetAllProductQuery } = productsApi;

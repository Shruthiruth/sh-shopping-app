
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_BASE_URL,
    Credentials: 'include',
}),
    endpoints: () => ({  }),
    tagTypes: ['auth', 'Product', 'Cart', 'Order'], // Add your tag types here
})

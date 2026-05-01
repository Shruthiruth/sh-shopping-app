
import { baseApi } from "../../app/baseApi";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => 'cart',
            providesTags: ['cart'],
        }),
        addToCart: builder.mutation({
            query: ({productId, quantity}) => ({
                url: 'cart/add',
                method: 'POST', 
                body: { productId, quantity },
            }),
            invalidatesTags: ['cart'],
        }),
        removeFromCart: builder.mutation({
            query: (cartItemId) => ({
                url: `cart/items/${cartItemId}`,
                method: 'DELETE',
                body: cartItemId ,
            }), 
            invalidatesTags: ['cart'],
        }),
        updateCartById: builder.mutation({
            query: ({cartItemId, quantity}) => ({
                url: `cart/items/${cartItemId}`,
                method: 'PUT',
                body: { quantity },
            }),
            invalidatesTags: ['cart'],
        }),
        clearCart: builder.mutation({
            query: () => ({
                url: 'cart/clear',
                method: 'DELETE',
            }),
            invalidatesTags: ['cart'],
        }),
    }),
})
export const { useGetCartQuery, useAddToCartMutation, useRemoveFromCartMutation, useUpdateCartByIdMutation, useClearCartMutation } = cartApi
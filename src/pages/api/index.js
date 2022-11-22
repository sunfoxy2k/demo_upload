
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_USER_ENDPOINT = "`/user`";

const reducerPath = 'api'

export const api = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_API_ENDPOINT,
        prepareHeaders: (headers, { getState }) => {
            const jwt = getState().jwt

            if (jwt) {
                headers.set('authorization', jwt)
            }

            return headers
        }
    }),
    endpoints: (builder) => ({
        getUserInfo: builder.query({
            query: _ => '/user',
        }),
        putUserInfo: builder.mutation({
            query: (body) => {
                return {
                    url : eval(API_USER_ENDPOINT),
                    method: 'PUT',
                    body
                }
            }
        })
    })
})

export const {
    useGetUserInfoQuery,
    usePutUserInfoMutation
} = api
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const TaskApi = createApi({
  reducerPath: 'TaskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5000' }),
  endpoints: (builder) => ({
    getAllTask: builder.query({
      query: (name) => `/task`,
    }),
  }),
})


export const { useGetAllTaskQuery } = TaskApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  // Define your base URL here
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  // Define your endpoints here
  endpoints: (builder) => ({
    getAnimals: builder.query({
      query: () => 'api/animals',
    }),
  }),
});

export const { useGetAnimalsQuery } = apiSlice;

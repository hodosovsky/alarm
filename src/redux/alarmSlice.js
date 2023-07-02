import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const apiKey = '5bfa85d8:a212478ea08355118d100959b187275f';
export const alarmsApi = createApi({
  reducerPath: 'alarmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://movies-1l0g.onrender.com/api/`, 
     
  }),

  tagTypes: ['Alerts'],
  endpoints: builder => ({
    getAlarms: builder.query({
      query: name => ({ url: name, method: 'GET'
       }),
      providesTags: ['Alerts'],
    }),
    // createPokemon: builder.mutation({
    //   query: newPokemon => ({
    //     url: `pokemon`,
    //     method: 'POST',
    //     body: newPokemon,
    //   }),
    //   invalidatesTags: ['Pokemon'],
    // }),
  }),
});

export const { useGetAlarmsQuery  } = alarmsApi;

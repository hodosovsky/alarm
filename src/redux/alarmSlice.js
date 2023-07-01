import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const apiKey = '5bfa85d8:a212478ea08355118d100959b187275f';
export const alarmsApi = createApi({
  reducerPath: 'alarmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.ukrainealarm.com/api/v3/`,
    prepareHeaders: (headers) => {
      headers.set("content-Type", "application/json");
      headers.set('authorization', `5bfa85d8:a212478ea08355118d100959b187275f`)
      headers.set('accept', 'application/json')
    
      return headers;
    },
    mode: 'no-cors',   
 
     
  }),

  tagTypes: ['Alerts'],
  endpoints: builder => ({
    getAlarms: builder.query({
      query: name => ({ url: name, method: 'GET'
    //   , headers: {
    //     'content-type': 'application/json',
    //     'Authorization': `5bfa85d8:a212478ea08355118d100959b187275f`,
    //     'Accept': 'application/json'
    // },
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

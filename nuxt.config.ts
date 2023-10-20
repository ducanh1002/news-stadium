// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],

    app:{
      head:{
        title: 'OEG Stadium',
        meta:[
          {name: 'description', content:'Website for OEG Stadium'}
        ],
        link:[
          {rel: 'stylesheet', href:'https://fonts.google.com/icons'}
        ]
      }
    },
 
})

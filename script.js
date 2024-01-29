console.log("ok", Vue);

const { createApp } = Vue;
// Importo l endpoint
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
const app = createApp({
  data: () => ({
    email: [],
  }),
});

app.mount("#root");

console.log("ok", Vue);

const { createApp } = Vue;
const app = createApp({
  data: () => ({}),
});

app.mount("#root");

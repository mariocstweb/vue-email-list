console.log("ok", Vue);

const { createApp } = Vue;
// Importo l endpoint
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
const app = createApp({
  data: () => ({
    emails: [],
  }),
  created() {
    // Utilizzo un ciclo for per ripetere l operazione tot volte
    for (let i = 0; i < 10; i++) {
      axios.get(endpoint).then((res) => {
        // Utilizzo il metodo push per "riempire" l'array vuoto emails con cioò che ottengo dalla chiamata ajax
        this.emails.push(res.data.response);
      });
    }
  },
});

app.mount("#root");

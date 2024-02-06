const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Email list",
      listMail: [],
    };
  },

  methods: {},

  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.listMail[i] = response.data.response;
          // console.log(response.data.response);
        });
    }
  },

  mounted() {},
}).mount("#app");

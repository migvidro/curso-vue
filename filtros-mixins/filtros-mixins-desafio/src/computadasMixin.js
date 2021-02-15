export default {
  computed: {
    fraseComVírgula() {
      return this.frase.replace(/ /g, ",");
    },
    fraseComTamanhos() {
      return this.frase
        .split(" ")
        .map((palavra) => `${palavra} (${palavra.length}) `)
        .join("");
    },
  },
};

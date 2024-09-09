// arrays, objetos
let meta = {
      value: "Ler um livro por mês",
      address: 2,
      checked: false,
      isChecked: (info) => {
            console.log(info)
      }
};

meta.value = "não é mais ler um livro";
meta.isChecked(meta.value);

const criarMeta = () => {}

// function criarMeta(){}
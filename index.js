async function getData(url) {
  try {
    const response = await fetch(url);
    data = await response.json();
    document.getElementById("Bairro-input").value = data.bairro;
    document.getElementById("Cidade-input").value = data.localidade;
    document.getElementById("Estado-input").value = data.uf;
    document.getElementById("Rua-input").value = data.logradouro;
    document.getElementById("Complemento-input").value = data.complemento;
} catch (error) {
}
}
function events(cep) {

  if (cep.length === 8) {
    getData(`https://viacep.com.br/ws/${cep}/json/`);
  }else{
    alert("CEP inválido. Tente novamente")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buttom = document
    .getElementById("btn-CEP")
    .addEventListener("click", () => {
      const cep = document.getElementById("CEP-input").value;
      events(cep);
    });
});

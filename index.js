async function getData(url) {
  try {
    const response = await fetch(url);
    data = await response.json();
    
    document.getElementById("Bairro-input").value = data.bairro;
    document.getElementById("Cidade-input").value = data.cidade;
    document.getElementById("Estado-input").value = data.uf;
    document.getElementById("Bairro-input").value = data.bairro;
    document.getElementById("Bairro-input").value = data.bairro;

} catch (error) {}
}
function events(cep) {
console.log(cep)
  if (cep.length === 8) {
    getData(`https://viacep.com.br/ws/${cep}/json/`);
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

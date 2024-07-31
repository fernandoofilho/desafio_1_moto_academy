function clearData() {
   
    document.getElementById("Bairro-input").value = "";
    document.getElementById("Cidade-input").value = "";
    document.getElementById("Estado-input").value = "";
    document.getElementById("Rua-input").value = "";

}
async function getData(url) {
  try {
    const response = await fetch(url);
    data = await response.json();
    
    document.getElementById("Bairro-input").value = data.bairro;
    document.getElementById("Cidade-input").value = data.localidade;
    document.getElementById("Estado-input").value = data.uf;
    document.getElementById("Rua-input").value = data.logradouro;

    if (!data.uf){
      alert("CEP não encontrado")
      clearData()
    }

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
      if (cep.length === 8){
         events(cep);

      } else { 
        alert("CEP inválido")
      }
    });
});

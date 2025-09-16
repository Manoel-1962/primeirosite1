const form = document.getElementById("formDono")



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("campoNome").value;
    const end = document.getElementById("endereco").value;
    alert(`Nome: ${nome} Endereço: ${end}`);
    form.reset();
})
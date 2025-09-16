const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");
const texto = document.getElementById("texto");

const alerta = ()  => {
    alert("O botao foi presionado");

}

botao.addEventListener("click",alerta);

const mudarcor = () => {
    titulo.style.color = "red";
}

titulo.addEventListener("mouseover",mudarcor);

const restaurarcor =() => {
    titulo.style.color = "black";
}

titulo.addEventListener("mouseout",restaurarcor);

const revelarMentira = () => {
    texto.innerText = "É mentira!!";
}

texto.addEventListener("mouseover",revelarMentira);

const restaurartexto = () => {
    texto.innerText = "O jacaré é amigo"
}

texto.addEventListener("mouseout",restaurartexto);


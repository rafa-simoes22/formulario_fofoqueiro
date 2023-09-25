function Enviar() {

    var nome = document.getElementById("name").value;
    var modo = document.getElementById("mood").value;
    var resposta = document.getElementById("resposta");

    if (nome && modo) {
        resposta.textContent = `Saudações, ${nome}!, Você parece mesmo ${modo}`;
    }
}
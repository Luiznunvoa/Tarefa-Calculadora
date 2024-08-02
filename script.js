let notas = [];

function isNumber(value) {
    return !isNaN(Number(value));
}

document.getElementById("addNota").addEventListener("click", () => {
    let nota = document.getElementById("notas").value;
    document.getElementById("notas").value = "";

    if (nota > 10 || nota < 0 || !isNumber(nota)) {
        alert("Você não pode digitar essa nota");
    } else {
        notas.push(Number(nota));
        document.getElementById("notasAlunos").innerHTML += `<p>A nota ${notas.length} foi ${nota}</p>`;
    }
});

document.getElementById("calcMedia").addEventListener("click", () => {
    let media = (notas.reduce((acc, grade) => acc + grade, 0) / notas.length).toFixed(2);
    document.getElementById("media").innerText = "A média é " + media;
});
let txt = document.getElementById("txt");
let res = document.getElementById("res");
let aviso = document.getElementById("aviso");
let botaocod = document.getElementById("codificador");
let botaodec = document.getElementById("decodificador");
let botaocopy = document.getElementById("copiar");
let botaolimpar = document.getElementById("limpar");

let cod = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

let decod = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
};

function codificar() {
    let texto = txt.value.replace(/a|e|i|o|u/g, function(ocorrencia) {
        return cod[ocorrencia];
    });
    res.value = texto;
}

function decodificar() {
    let texto = txt.value.replace(/ai|enter|imes|ober|ufat/g, function(ocorrencia) {
        return decod[ocorrencia];
    });
    res.value = texto;
}

function copiar() {
    navigator.clipboard.writeText(res.value);
    txt.select();
}

function limpar() {
    txt.value = "";
    res.value = "";
}

botaocod.onclick = codificar;
botaodec.onclick = decodificar;
botaocopy.onclick = copiar;
botaolimpar.onclick = limpar;

input.addEventListener('beforeinput', function(event) {
    if (/[^a-z\s.,?!;]/.test(event.data)) {
        event.preventDefault();
        aviso.style.color = "red";
        aviso.style.fontWeight = "bold";
        aviso.scrollIntoView(true);
    } else {
        aviso.style.color = "rgb(87, 87, 87)";
        aviso.style.fontWeight = "normal";
    }
});



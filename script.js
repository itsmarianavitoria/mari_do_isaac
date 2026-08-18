/* =========================================
   DATA DO INÍCIO DO NAMORO
========================================= */

// Maio é 4 porque no JavaScript:
// Janeiro = 0
// Fevereiro = 1
// Março = 2
// Abril = 3
// Maio = 4

const inicioNamoro = new Date(2026, 4, 17, 0, 0, 0);


/* =========================================
   CALCULAR MESES DE NAMORO
========================================= */

function calcularMesesDeNamoro() {

    const hoje = new Date();

    let meses =
        (hoje.getFullYear() - inicioNamoro.getFullYear()) * 12 +
        (hoje.getMonth() - inicioNamoro.getMonth());

    /*
        Se ainda não chegou o dia 17 do mês,
        significa que aquele mês ainda não foi completado.
    */

    if (hoje.getDate() < inicioNamoro.getDate()) {
        meses--;
    }

    return Math.max(meses, 0);
}


/* =========================================
   ATUALIZAR O TÍTULO
========================================= */

function atualizarTitulo() {

    const meses = calcularMesesDeNamoro();

    const titulo = document.getElementById("titulo-meses");

    const surpresa = document.getElementById("meses-surpresa");


    /*
        Quando completar 1 ano,
        mostramos anos e meses.
    */

    if (meses < 12) {

        titulo.textContent = `Feliz ${meses} ${meses === 1 ? "mês" : "meses"}`;

        surpresa.textContent =
            `${meses} ${meses === 1 ? "mês" : "meses"}`;

    } else {

        const anos = Math.floor(meses / 12);

        const mesesRestantes = meses % 12;


        if (mesesRestantes === 0) {

            titulo.textContent =
                `Feliz ${anos} ${anos === 1 ? "ano" : "anos"}`;

            surpresa.textContent =
                `${anos} ${anos === 1 ? "ano" : "anos"}`;

        } else {

            titulo.textContent =
                `${anos} ${anos === 1 ? "ano" : "anos"} e ${mesesRestantes} ${mesesRestantes === 1 ? "mês" : "meses"}`;

            surpresa.textContent =
                `${anos} ${anos === 1 ? "ano" : "anos"} e ${mesesRestantes} ${mesesRestantes === 1 ? "mês" : "meses"}`;

        }

    }

}


/* =========================================
   CONTADOR DE TEMPO
========================================= */

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - inicioNamoro;


    if (diferenca < 0) {
        return;
    }


    const segundosTotais =
        Math.floor(diferenca / 1000);


    const minutosTotais =
        Math.floor(segundosTotais / 60);


    const horasTotais =
        Math.floor(minutosTotais / 60);


    const diasTotais =
        Math.floor(horasTotais / 24);


    const segundos =
        segundosTotais % 60;


    const minutos =
        minutosTotais % 60;


    const horas =
        horasTotais % 24;


    const meses =
        calcularMesesDeNamoro();


    /*
        Data do último aniversário de mês
    */

    const ultimoMesCompleto =
        new Date(
            inicioNamoro.getFullYear(),
            inicioNamoro.getMonth() + meses,
            inicioNamoro.getDate()
        );


    const diferencaUltimoMes =
        agora - ultimoMesCompleto;


    const diasDepoisDoMes =
        Math.floor(
            diferencaUltimoMes /
            (1000 * 60 * 60 * 24)
        );


    document.getElementById("meses").textContent =
        meses;


    document.getElementById("dias").textContent =
        diasDepoisDoMes;


    document.getElementById("horas").textContent =
        horas;


    document.getElementById("minutos").textContent =
        minutos;


    document.getElementById("segundos").textContent =
        segundos;

}


/* =========================================
   BOTÃO SURPRESA
========================================= */

const botaoSurpresa =
    document.getElementById("btn-surpresa");


const mensagemSurpresa =
    document.getElementById("mensagem-surpresa");


botaoSurpresa.addEventListener("click", function () {

    mensagemSurpresa.style.display = "block";

    botaoSurpresa.style.display = "none";


    /*
        Criar vários corações ao clicar
    */

    for (let i = 0; i < 30; i++) {

        setTimeout(criarCoracao, i * 80);

    }

});


/* =========================================
   CORAÇÕES ANIMADOS
========================================= */

function criarCoracao() {

    const coracao =
        document.createElement("div");


    coracao.classList.add("heart");


    const coracoes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "🤍"
    ];


    coracao.innerHTML =
        coracoes[
            Math.floor(
                Math.random() * coracoes.length
            )
        ];


    /*
        Posição aleatória
    */

    coracao.style.left =
        Math.random() * 100 + "vw";


    /*
        Tamanho aleatório
    */

    coracao.style.fontSize =
        15 + Math.random() * 20 + "px";


    /*
        Velocidade aleatória
    */

    coracao.style.animationDuration =
        4 + Math.random() * 4 + "s";


    document.body.appendChild(coracao);


    /*
        Apaga o coração depois da animação
    */

    setTimeout(() => {

        coracao.remove();

    }, 8000);

}


/*
    Criar um coração de vez em quando
*/

setInterval(criarCoracao, 1200);


/* =========================================
   INICIAR SITE
========================================= */

atualizarTitulo();

atualizarContador();


/*
    Atualizar contador a cada segundo
*/

setInterval(atualizarContador, 1000);


/*
    Verificar periodicamente se mudou
    o mês do relacionamento.
*/

setInterval(atualizarTitulo, 60000);
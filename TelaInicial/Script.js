// BOTÕES SELECIONÁVEIS
const botoes = document.querySelectorAll(".btn-select");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botao.classList.toggle("ativo");
    });
});

// PEGAR BOTÕES SELECIONADOS
function pegarSelecionados(id) {

    const container = document.getElementById(id);

    if (!container) return "";

    const ativos = container.querySelectorAll(".btn-select.ativo");

    let valores = [];

    ativos.forEach(botao => {
        valores.push(botao.innerText);
    });

    return valores.join(", ");
}

// SALVAR DADOS


    function salvarDados() {

    const dados = {

        // IDENTIFICAÇÃO
        nome:
            document.getElementById("nome")?.value || "",

        nomeCivil:
            document.getElementById("nomeCivil")?.value || "",

        pronome:
            document.getElementById("pronome")?.value || "",

        idade:
            document.getElementById("idade")?.value || "",

        identidadeGenero:
            pegarSelecionados("identidadeGenero"),

        contato:
            document.getElementById("contato")?.value || "",

        profissional:
            document.getElementById("profissional")?.value || "",

        dataConsulta:
            document.getElementById("dataConsulta")?.value || "",

        proximaConsulta:
            document.getElementById("proximaConsulta")?.value || "",

        // HISTÓRICO
        queixaPrincipal:
            document.getElementById("queixaPrincipal")?.value || "",

        hda:
            document.getElementById("hda")?.value || "",

        // HISTÓRIA CLÍNICA
        tempoHormonioterapia:
            document.getElementById("tempoHormonioterapia")?.value || "",

        tipoHormonioterapia:
            pegarSelecionados("tipoHormonioterapia"),

        viaAdministracao:
            pegarSelecionados("viaAdministracao"),

        doseAtual:
            document.getElementById("doseAtual")?.value || "",

        queixasRelacionadas:
            pegarSelecionados("queixasRelacionadas"),

        cirurgiaRedesignacaoSim:
            document.getElementById("cirurgiaRedesignacaoSim")?.checked || false,

        cirurgiaRedesignacaoNao:
            document.getElementById("cirurgiaRedesignacaoNao")?.checked || false,

        tipoCirurgiaRedesignacao:
            document.getElementById("tipoCirurgiaRedesignacao")?.value || "",

        intencaoFuturaSim:
            document.getElementById("intencaoFuturaSim")?.checked || false,

        intencaoFuturaNao:
            document.getElementById("intencaoFuturaNao")?.checked || false,

        procedimentosPrevios:
            pegarSelecionados("procedimentosPrevios"),

        doencasAssociadas:
            pegarSelecionados("doencasAssociadas"),

        historicoFamiliar:
            document.getElementById("historicoFamiliar")?.value || "",

        alergias:
            document.getElementById("alergias")?.value || "",

        // SAÚDE SEXUAL
        atividadeSexual:
            pegarSelecionados("atividadeSexual"),

        numeroParceiros:
            document.getElementById("numeroParceiros")?.value || "",

        tipoParceiro:
            pegarSelecionados("tipoParceiro"),

        usoPreservativo:
            pegarSelecionados("usoPreservativo"),

        // SAÚDE MENTAL
        humor:
            document.getElementById("humor")?.value || "",

        ansiedade:
            document.getElementById("ansiedade")?.value || "",

        autoimagemCorporal:
            document.getElementById("autoimagemCorporal")?.value || "",

        sono:
            document.getElementById("sono")?.value || "",

        apoioFamiliarSocial:
            document.getElementById("apoioFamiliarSocial")?.value || "",

        ideacaoSuicida:
            pegarSelecionados("ideacaoSuicida"),

        // CONTEXTO SOCIAL
        estrategiasEnfrentamento:
            document.getElementById("estrategiasEnfrentamento")?.value || "",

        // EXAME FÍSICO
        pressaoArterial:
            document.getElementById("pressaoArterial")?.value || "",

        peso:
            document.getElementById("peso")?.value || "",

        frequenciaCardiaca:
            document.getElementById("frequenciaCardiaca")?.value || "",

        altura:
            document.getElementById("altura")?.value || "",

        // EXAMES
        hemograma:
            document.getElementById("hemograma")?.value || "",

        glicemia:
            document.getElementById("glicemia")?.value || "",

        // CONDUTA
        educacaoSaude:
            document.getElementById("educacaoSaude")?.value || "",

        orientacoesDadas:
            document.getElementById("orientacoesDadas")?.value || "",

        encaminhamentos:
            document.getElementById("encaminhamentos")?.value || "",

        // PLANEJAMENTO
        dataPlanejamento:
            document.getElementById("dataPlanejamento")?.value || "",

        // OBSERVAÇÕES
        observacoesFinais:
            document.getElementById("observacoesFinais")?.value || ""

    };



   localStorage.setItem("prontuario", JSON.stringify(dados));

    window.location.href = "../TelaResult/Resultado.html";
}

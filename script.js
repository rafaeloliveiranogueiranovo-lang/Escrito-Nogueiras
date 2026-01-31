function selecionarServico(servico) {
    document.getElementById("servico").value = servico;
    scrollToAtendimento();
}

function scrollToAtendimento() {
    document.getElementById("atendimento").scrollIntoView({
        behavior: "smooth"
    });
}

function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;
    const descricao = document.getElementById("descricao").value;

    const corpoEmail =
        `Nome: ${nome}%0D%0A` +
        `E-mail: ${email}%0D%0A` +
        `Telefone: ${telefone}%0D%0A` +
        `Serviço: ${servico}%0D%0A%0D%0A` +
        `Descrição:%0D%0A${descricao}`;

    window.location.href =
        `mailto:miriamnogueira@gmail.com?subject=Solicitação de Atendimento&body=${corpoEmail}`;
}

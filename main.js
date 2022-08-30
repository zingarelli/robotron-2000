const braco = document.querySelector('#bracos');
const ajustes = document.querySelectorAll('[data-operacao]');

//adiciona evento de click nos botões de ajuste de cada peça
ajustes.forEach((ajuste) => {
    ajuste.addEventListener('click', (e) => {
        const operacao = e.target.dataset.operacao;
        const peca = e.target.parentNode;
        ajustaQuantidade(operacao, peca);
    });
})

//ajusta a quantidade de peças de acordo com a operação a ser feita
function ajustaQuantidade(operacao, peca){
    const quantidade = peca.querySelector('[data-quantidade]');

    if(operacao === '+'){
        quantidade.value++;
    }
    else if(operacao === '-'){
        quantidade.value--;
    }
}

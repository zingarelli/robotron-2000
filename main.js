//botões de aumentar/diminuir número de peças
const ajustes = document.querySelectorAll('[data-operacao]');

//elementos com os valores das estatísticas
const statsAtuais = document.querySelectorAll('[data-stats]');

//cor do robô
const corAtual = document.querySelector('[data-cor-robo]');
const botoesCor = document.querySelectorAll('[data-opcao-cor]');

//objeto com os valores fornecidos por cada peça para as estatísticas do robô
//possuem os mesmos nomes declarados nos data attributes no HTML
const statsPorPeca = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },

    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },

    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}



// --------------------------------- FUNÇÕES

//altera a cor do robo
function alteraCorRobo(cor){
    corAtual.src = `img/robotron-${cor}.png`
}

//muda o estilo do botão selecionado para alterar a cor
function alteraEstiloBotao(botao){
    //remove o atributo do botão ativo atual
    document.querySelector('[data-cor-ativa]').removeAttribute('data-cor-ativa');

    //adiciona o atributo ao botão selecionado
    botao.setAttribute('data-cor-ativa', '');
}

//ajusta a quantidade de peças de acordo com a operação a ser feita
function ajustaQuantidadePecas(operacao, peca){
    const quantidade = peca.querySelector('[data-quantidade]');

    if(operacao === '+'){
        quantidade.value++;
    }
    else if(operacao === '-' && quantidade.value > 0){
        quantidade.value--;
    }
}

/** 
 * Toda vez que uma peça é adicionada/removida, recalcula todas as estatísticas.
 * A função feita na aula possuía bugs: não atualizava quando a quantidade de peças
 * era subtraída ou quando não havia peças. Por isso, refatorei esta função para que
 * as estatísticas sejam recalculadas a cada mudança em qualquer peça.
 */
function atualizaStats(){
    const pecas = document.querySelectorAll('[data-peca]');
    const novosStats = { //irá conter o somatório das estatísticas fornecidas por todas as peças
        "forca": 0,
        "poder": 0,
        "energia": 0,
        "velocidade": 0
    };

    //verifico em cada peça o valor que fornece às estatísticas e atualizo cada estatística
    pecas.forEach((peca) => {
        const quantidade = parseInt(peca.querySelector('[data-quantidade]').value);
        const nomePeca = peca.dataset.peca;
        const valorStats = statsPorPeca[nomePeca]; //estatísticas que a peça fornece

        //calcula as estatísticas pelo número de peças
        for(stat in valorStats){
            novosStats[stat] += valorStats[stat] * quantidade;
        }        
    })

    //atualiza o valor das estatísticas
    statsAtuais.forEach(stat => {
        stat.textContent = novosStats[stat.dataset.stats];
    })
}


// --------------------------------- EVENTOS

//adiciona evento de clique nos botões de ajuste de cada peça
ajustes.forEach((ajuste) => {
    ajuste.addEventListener('click', (e) => {
        const operacao = e.target.dataset.operacao;
        const peca = e.target.parentNode;

        ajustaQuantidadePecas(operacao, peca);
        atualizaStats();
    });
})

//adiciona evento de clique para alteração da cor do robo
botoesCor.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        corEscolhida = e.target.dataset.opcaoCor;
        alteraCorRobo(corEscolhida);
        alteraEstiloBotao(botao);
    })
})


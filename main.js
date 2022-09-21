//valor máximo de peças disponíveis
const MAX_PECAS = 12;
const pecasDisponiveis = document.querySelector('[data-disponivel]');

//botões de aumentar/diminuir número de peças
const ajustes = document.querySelectorAll('[data-operacao]');

//elementos com os valores das estatísticas
const statsAtuais = document.querySelectorAll('[data-stats]');

//cor do robô
const corAtual = document.querySelector('[data-cor-robo]');
const botoesCor = document.querySelectorAll('[data-opcao-cor]');

//botão para criar robô
const botaoCriar = document.querySelector('.producao');

//modal que mostra o robô criado
const modal = document.querySelector('.modal__sucesso');
const modalFechar = document.querySelector('.modal__fechar');

//objeto com os valores fornecidos por cada peça para as estatísticas do robô
//possuem os mesmos nomes declarados nos data attributes no HTML
const statsPorPeca = {
    "bracos": {
        "força": 29,
        "poder": 35,
        "energia": -18,
        "velocidade": -5
    },

    "blindagem": {
        "força": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },

    "nucleos": {
        "força": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -10
    },

    "pernas": {
        "força": 27,
        "poder": 21,
        "energia": -25,
        "velocidade": 54
    },

    "foguetes": {
        "força": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


// --------------------------------- FUNÇÕES

//altera a cor do robo
function alteraCorRobo(cor) {
    corAtual.src = `img/robotron-${cor}.png`
}

//muda o estilo do botão selecionado para alterar a cor
function alteraEstiloBotao(botao) {
    //remove o atributo do botão ativo atual
    document.querySelector('[data-cor-ativa]').removeAttribute('data-cor-ativa');

    //adiciona o atributo ao botão selecionado
    botao.setAttribute('data-cor-ativa', '');
}

/**
 * O ajuste na quantidade de peças é baseado na operação a ser feita
 * e também na quantidade de peças que há disponível. Não é aceito ajuste de 
 * peças com valores negativos.
 */
function ajustaQuantidadePecas(operacao, peca) {
    const quantidadePeca = peca.querySelector('[data-quantidade]');
    let quantidadeDisponivel = parseInt(pecasDisponiveis.textContent);

    //necessário haver peças disponíveis para incrementar a quantidade
    if (operacao === '+' && quantidadeDisponivel > 0) {
        quantidadePeca.value++;
        quantidadeDisponivel--;
        pecasDisponiveis.textContent = quantidadeDisponivel;
    }
    //não permitir subtração que deixe a quantidade negativa
    else if (operacao === '-' && quantidadePeca.value > 0) {
        quantidadePeca.value--;
        quantidadeDisponivel++;
        pecasDisponiveis.textContent += 1;
        pecasDisponiveis.textContent = quantidadeDisponivel;
    }
}

/** 
 * Toda vez que uma peça é adicionada/removida, recalcula todas as estatísticas.
 * A função feita na aula possuía bugs: não atualizava quando a quantidade de peças
 * era subtraída ou quando não havia peças. Por isso, refatorei esta função para que
 * as estatísticas sejam recalculadas a cada mudança em qualquer peça.
 */
function atualizaStats() {
    const pecas = document.querySelectorAll('[data-peca]');
    const novosStats = { //irá conter o somatório das estatísticas fornecidas por todas as peças
        "força": 0,
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
        for (stat in valorStats) {
            novosStats[stat] += valorStats[stat] * quantidade;
        }
    })

    //atualiza o valor das estatísticas
    statsAtuais.forEach(stat => {
        stat.textContent = novosStats[stat.dataset.stats];
    })
}

//adiciona ao modal a imagem e estatísticas do robô criado
function mostraRoboProduzido() {
    const imagemLoading = document.querySelector('.modal__loading')
    const imagemRobo = document.querySelector('.modal__imagem');
    const statsRobo = document.querySelector('.modal__estatisticas');
    const modalRobo = document.querySelector('.modal__robo');
    const tituloModal = document.querySelector('.modal__titulo');

    //esconde o conteúdo para simular um tempo de produção
    modalRobo.classList.add('modal--hide');

    //simula um tempo de produção de alguns segundos antes de mostrar o robô
    setTimeout(() => {
        imagemLoading.classList.add('modal--hide');          
        tituloModal.innerText = 'Robotron pronto para salvar o planeta!'
        
        // adiciona imagem do robô selecionado
        imagemRobo.src = corAtual.src;

        // adiciona as estatísticas escolhidas
        statsRobo.innerHTML = ''; // limpa o conteúdo que havia (no caso de abrir e fechar o modal)
        statsAtuais.forEach(stat => {
            const estatistica = document.createElement('p');
            estatistica.innerText = `${stat.dataset.stats}: ${stat.innerText}`;
            statsRobo.appendChild(estatistica);
        })    
        
        //mostra o conteúdo
        modalRobo.classList.remove('modal--hide');
    }, 3500);
}

//esconde o modal e volta o HTML para o padrão
function fechaModal(){
    const imagemLoading = document.querySelector('.modal__loading');
    const tituloModal = document.querySelector('.modal__titulo');
    
    modal.classList.add('modal--hide');

    imagemLoading.classList.remove('modal--hide');
    tituloModal.innerText = 'Produzindo seu Robotron, aguarde...';
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
    });
});

//adiciona evento de clique para iniciar a produção do robô (abrirá um modal de sucesso)
botaoCriar.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--hide');

    //adiciona imagem e estatísticas do robô
    mostraRoboProduzido();
});

//adiciona eventos de clique para fechar o modal
modalFechar.addEventListener('click', () => {
    fechaModal();
})

modal.addEventListener('click', (e) => {
    //modal ocupa todo o documento, se clicado fora do modal_container, ele não será mostrado
    if (e.target == modal) {
        fechaModal();
    }
})

//atualiza a quantidade de peças disponíveis quando a página carrega
pecasDisponiveis.textContent = MAX_PECAS;
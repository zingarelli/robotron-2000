# Robotron 2000 🤖

Aprendendo JavaScript e manipulação do DOM, brincando de alterar os stats de um robô para salvar a Terra.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Crie seu Robotron**
| :label: Tecnologias | html, css, javascript
| :rocket: URL         | https://robotron2000-js-dom.vercel.app
| :fire: Curso     | https://www.alura.com.br/curso-online-javascript-manipulando-dom

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://user-images.githubusercontent.com/19349339/189413262-3c40c6c2-302e-418f-8ed8-16ea79a42dc4.png#vitrinedev)

## Detalhes do projeto

Na tela do projeto, são exibidas uma imagem do robô, suas estatísticas (stats) e uma quantidade de peças que podem ser distribuídas para diferentes partes do robô. Ao clicar nos botões de `+` e `-` é possível adicionar/remover peças (até o limite de peças disponíveis), o que irá influenciar nos stats do robô. Abaixo do robô há botões de diferentes cores. Ao clicar em um botão, a cor do robô é alterada para a mesma cor do botão.

Foi utilizado o JavaScript para tratar os eventos de clique e manipulação do DOM para atualização dos valores de stats, bem como condicionantes para, por exemplo, impedir que o robô possua valores negativos nas peças ou tente incluir mais do que a quantidade de peças disponíveis. Utilizou-se também de "data attributes" para poder acessar os elementos do HTML sem a necessidade de depender das classes e id de suas tags.

## Créditos
**Instrutor:** [Pedro Marins](https://github.com/pedromarins).

[Projeto original](https://github.com/pedromarins/robotron-2000) feito pelo Instrutor, para o curso *JavaScript: manipulando o DOM*, da Alura.

## Tópicos aprendidos
- Seleção de elementos HTML utilizando `querySelector()`, `querySelectorAll()`, `getElementById()` e `getElementsByTagName()`;
- Método `addEventListener()` e um pouco sobre manipulação de eventos;
- Função anônima, arrow function, hoisting;
- Array e iteração com `forEach()`;
- Uso de data attributes.

## Modificações efetuadas
- A função que altera os stats do robô foi refatorada, pois no código original estava com um bug em que não atualizava corretamente os stats quando se diminuía ou zerava a quantidade de um tipo de peça;

- Foi criada uma condição para que a quantidade de peças não ficasse negativa.

- O CSS foi adaptado para melhorar o posicionamento dos elementos para diferentes larguras, utilizando Flexbox. Também alterei o CSS do box em que ficam as peças, pois ele estava escondendo elementos quando a largura/altura eram pequenas. Para a altura, coloquei `overflow-y: auto` para criar um scroll quando os elementos não cabem dentro do box. 

- Nova funcionalidade: escolha de cor. Adicionado um box abaixo da imagem do robô com opção de escolha entre 6 cores (azul, amarelo, branco, preto, rosa e vermelho). Incluído um efeito de `hover` ao passar o mouse nas opções e mudança de estilo na opção escolhida. Ao selecionar uma nova cor, o `src` da imagem é alterado dinamicamente por meio do JavaScript e de data attributes.

- Nova funcionalidade: limite de peças disponíveis. Agora há uma quantidade de 12 peças disponíveis, limitando a quantidade de peças que podem ser distribuídas entre as diferentes partes do robô. Ao atingir o limite, não é possível adicionar novas peças, mas pode-se subtrair peças para distribuí-las em outras partes.  

- Nova funcionalidade: produção do robô. Ao clicar no botão "Iniciar Produção", um modal (janela acima do conteúdo) é mostrado com uma barra de loading, simulando a produção do Robotron. A imagem e as estatísticas do robô personalizado são exibidas neste modal após 3,5 segundos.

- Rebalanceamento dos stats por peça: alterei o valor dos stats concedidos por cada peça, para melhorar a distribuição dos poderes de forma mais equilibrada (estava punindo muito a energia e velocidade).

- Responsividade: o layout é adaptado para diferentes tamanhos de telas (até 425px, 1200px ou 1600px). Segue abaixo como ficou o layout para celulares:

![screenshot da tela para celulares](https://user-images.githubusercontent.com/19349339/190256637-314c9f36-e6a3-42c7-ad55-484c6a7b1400.png)

## Projeto finalizado!

Segue um gif do projeto finalizado, mostrando a seleção de cores, escolha das peças e produção do Robotron. A animação está em velocidade 1.5.

![gif mostrando a personalização e produção do robô](https://user-images.githubusercontent.com/19349339/191568796-e8ac881e-43b2-4c7e-a7e3-fa37b5b223d4.gif)

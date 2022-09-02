# Robotron 2000
Aprendendo JavaScript, brincando de alterar os stats de um robô para salvar a Terra.

Na tela, são exibidas uma imagem do robô, suas estatísticas (stats) e peças. Ao clicar nos botões de `+` e `-` é possível adicionar/remover peças, o que irá influenciar nos stats do robô. 

Foi utilizado o JavaScript para tratar os eventos de clique e manipulação do DOM para atualização dos valores de stats, bem como condicionantes para, por exemplo, impedir que o robô possua valores negativos nas peças. Utilizou-se também de data-attributes para poder acessar os elementos do HTML sem a necessidade de depender das classes e id de suas tags.

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

## Modificações a serem feitas
- deixar o usuário escolher a cor do robô;
- criar um limite de pontos que pode ser distribuído para a quantidade de peças;
- adaptar para mobile.
# Robotron 2000
Aprendendo JavaScript brincando de alterar os stats de um robô para salvar a Terra.

## Tópicos aprendidos
- Seleção de elementos HTML utilizando `querySelector()`, `querySelectorAll()`, `getElementById()` e `getElementsByTagName()`;
- Método `addEventListener()` e um pouco sobre manipulação de eventos;
- Função anônima, arrow function, hoisting;
- Array e iteração com `forEach()`;
- Uso de data attributes.

## Modificações efetuadas
- A função que altera os stats do robô foi refatorada, pois no código original estava com um bug em que não atualizava corretamente os stats  quando se diminuía ou zerava a quantidade de um tipo de peça;

- Foi  criada uma condição para que a quantidade de peças não ficasse negativa.

## Modificações a serem feitas
- deixar o usuário escolher a cor do robô;
- criar um limite de pontos que pode ser distribuído para a quantidade de peças;
- adaptar para mobile.

# Créditos
Projeto original feito pelo Pedro Marins, para o curso **JavaScript: manipulando o DOM**, da Alura.
https://github.com/pedromarins/robotron-2000
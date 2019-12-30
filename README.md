# HTML5

É uma linguagem de marcação que tem as seguintes resposabilidades:

- Conteúdo;
- Semântico (tags);
- Estrutura

* `<h1>` - heading 1 - 6
Usamos ele quando queremos definir títulos

- `<a>` - Link (a - anchor)
Usamos ela para definir a navegação do usuário. Se você tem um texto que
você quer que o usuário clique e ele vá para outro lugar você pode usar
essa tag junto com o atributo `href`. Exemplo de um `a` que o usuário
é direcionado para o site da collabcode.training:

```
<a href="http://collabcode.training">CollabCode.Training</a>
```



# CSS
É uma linguagem de estilo, isso quer dizer que ela tem as seguintes responsabilidades:

- Visual;

***
# Propriedade Float

## Resumo do float

```
Resumo.
A propriedade float do CSS determina que um elemento deve ser retirado do seu fluxo normal e colocado ao longo do lado direito ou esquerdo do seu containêr, onde textos  e elementos em linha irão se posicionar ao seu redor.
```

`Um elemento flutuante é um tipo de elemento cujo valor de float é diferente de none.`

```
Como mencionado acima, quando um elemento é flutuado ele é retirado do seu fluxo normal no documento. Ele é reposicionado à esquerda ou à direita até tocar a borda do seu próprio box ou outro elemento flutuante.
```

- Novo Contexto.
Quando é criado um novo contexto(`float`) o pai ignora o elemento
- Nunca Esconde Conteúdo.
- O que define o width e heigth é o conteúdo dele. (Caso não seja especificado width e height).

***
# Propriedade Overflow

- Overflow: hidden; Tem por padrão esconder o elemento que vase o escopo do tamanho do pai.

- Recalcula o contexto do float

* Caso o elemento que foi colocado o `overflow: hidden;` **NÃO** contenha tamanho, ele é recalculado para o tamanho do filho.

* Caso o elemento que foi colocado o `overflow: hidden;` **tenha** tamanho ele esconde o conteúdo do elemento filho que estiver vazando.

## Resumo do Overflow

```
Resumo
A propriedade overflow especifica quando o conteúdo de um elemento de nível de bloco deve ser cortado, exibido com barras de rolagem ou se transborda do elemento.

O uso da propriedade overflow com valor diferente de visible (seu valor padrão), criará um novo contexto de formatação de bloco. Isto é tecnicamente necessário para evitar que um conteúdo flutuante que entre em contato com o objeto dentro da área de rolamento e quebre as linhas do conteúdo para ajustar a disposição do texto. A quebra das linhas ocorre sempre que a barra de rolagem é utilizada, tornando a experiência de rolagem lenta.
```
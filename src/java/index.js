/* 
Objetivo: Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.

Passo 1- Dar um jeito de pegar o elemento HTML dos botões.
Passo 2- Dar um jeito de identificar o clique do usuario no botão.
Passo 3- Desmarcar o botão selecionado anterior.
Passo 4- Marcar o botão clicando como se estivesse selecionado.
Passo 5- Esconder a imagem de fundo anterior.
Passo 6- Fazer aparecer a imagem correspondente ao botão clicado.
*/

//Passo 1- Dar um jeito de pegar o elemento HTML dos botões.
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//Passo 2- Dar um jeito de identificar o clique do usuario no botão.
botoescarrossel.forEach((botao, indice) => {
botao.addEventListener('click',() => {

       console.log(indice);

       //Passo 3- Desmarcar o botão selecionado anterior.
       const botaoselecionado = document.querySelector('.selecionado');
       botaoselecionado.classList.remove('selecionado');

       //Passo 4- Marcar o botão clicando como se estivesse selecionado.
       botao.classList.add('selecionado');

       //Passo 5- Esconder a imagem ativa de fundo.
       const imagemAtiva = document.querySelector('.ativa');
       imagemAtiva.classList.remove('ativa');

       //Passo 6- Fazer aparecer a imagem correspondente ao botão clicado.
      console.log(imagens);
      imagens[indice].classList.add('ativa');
})
})

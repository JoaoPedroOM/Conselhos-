const bnt = document.getElementById('botao');

function pegaConselho() {

  fetch('https://api.adviceslip.com/advice')

  .then(response => response.json()) // quando a resposta da API é recebida, usamos o método then() para transformar a resposta em um objeto JSON que 
                                    // possa ser facilmente manipulado pelo JavaScript.

  .then(data => { // Aqui podemos manipular nosso objeto JSON 
   const textConselho = document.getElementById('text');
   const mensagem = data.slip.advice;
   textConselho.innerHTML = mensagem;
})

  .catch(error => console.error(error));
}


//Traduzindo os dados da api


bnt.addEventListener("click", pegaConselho);
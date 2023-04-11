
const API_URL = 'https://pensador-api.vercel.app/?term=Jesus+Cristo&max=200';
const textConselho = document.getElementById('text'); // h2 que exibe a frase

function pegaFrase() 
{

  fetch(API_URL)
  
  .then(response => response.json())
  .then(data => {
    const frases = data.frases;

    // textConselho = ""; //Inicia vazio
    
    for (let i = 0; i < frases.length; i++) 
    {
      
      const texto = frases[Math.floor(Math.random() * frases.length)].texto;

      while (texto.length >= 190) 
      {
        const randomIndex = Math.floor(Math.random() * frases.length);
        texto = frases[randomIndex].texto;
      }
      textConselho.innerHTML = texto;
    }
  })

  .catch(error => console.log(error))
}

const bnt = document.getElementById('botao');
bnt.addEventListener("click", pegaFrase);




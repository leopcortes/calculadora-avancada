/* ========== Calculadora Científica ========== */

   const resultadoEl = document.querySelector('.resultado');
   
   const acEl = document.querySelector('.ac');
   const mmEl = document.querySelector('.mm');
   const porcentoEl = document.querySelector('.porcento');
   
   const adicaoEl = document.querySelector('.adicao');
   const subtracaoEl = document.querySelector('.subtracao');
   const multiplicacaoEl = document.querySelector('.multiplicacao');
   const divisaoEl = document.querySelector('.divisao');
   const igualEl = document.querySelector('.igualiphone');
   
   const decimalEl = document.querySelector('.decimal');
   const numero0El = document.querySelector('.numero-0');
   const numero1El = document.querySelector('.numero-1');
   const numero2El = document.querySelector('.numero-2');
   const numero3El = document.querySelector('.numero-3');
   const numero4El = document.querySelector('.numero-4');
   const numero5El = document.querySelector('.numero-5');
   const numero6El = document.querySelector('.numero-6');
   const numero7El = document.querySelector('.numero-7');
   const numero8El = document.querySelector('.numero-8');
   const numero9El = document.querySelector('.numero-9');
   const numeroElArray = [ numero0El, numero1El, numero2El, numero3El, numero4El, numero5El, numero6El, numero7El, numero8El, numero9El, ];
   
   // Variáveis
   let resultadoStringNaMemoria = null;
   let operadorNaMemoria = null;
   
   // Funções
   const pegarResultadoString = () => resultadoEl.textContent.split(',').join('');
   
   const pegarResultadoNumero = () => {
      return parseFloat(pegarResultadoString());
   };
   
   const definirStringComoResultado = (resultadoString) => {
      if (resultadoString[resultadoString.length - 1] === '.') {
         resultadoEl.textContent += '.';
         return;
      }
   
      const [parteInteiraString, decimalString] = resultadoString.split('.');
      if (decimalString) {
         resultadoEl.textContent =
            parseFloat(parteInteiraString).toLocaleString() + '.' + decimalString;
      } else {
         resultadoEl.textContent = parseFloat(parteInteiraString).toLocaleString();
      }
   };
   
   const lidarComNumeroAoClicar = (numStr) => {
      const resultadoAtualString = pegarResultadoString();
      if (resultadoAtualString === '0') {
         definirStringComoResultado(numStr);
      } else {
         definirStringComoResultado(resultadoAtualString + numStr);
      }
   };
   
   const pegarResultadoDaOperacaoComoString = () => {
      const resultadoAtualNumero = pegarResultadoNumero();
      const resultadoNumeroNaMemoria = parseFloat(resultadoStringNaMemoria);
      let novoResultadoNumero;
      if (operadorNaMemoria === 'adicao') {
         novoResultadoNumero = resultadoNumeroNaMemoria + resultadoAtualNumero;
      } else if (operadorNaMemoria === 'subtracao') {
         novoResultadoNumero = resultadoNumeroNaMemoria - resultadoAtualNumero;
      } else if (operadorNaMemoria === 'multiplicacao') {
         novoResultadoNumero = resultadoNumeroNaMemoria * resultadoAtualNumero;
      } else if (operadorNaMemoria === 'divisao') {
         novoResultadoNumero = resultadoNumeroNaMemoria / resultadoAtualNumero;
      }
   
      return novoResultadoNumero.toString();
   };
   
   const lidarComOperadorAoClicar = (operation) => {
      const resultadoAtualString = pegarResultadoString();
   
      if (!resultadoStringNaMemoria) {
         resultadoStringNaMemoria = resultadoAtualString;
         operadorNaMemoria = operation;
         definirStringComoResultado('0');
         return;
      }
      resultadoStringNaMemoria = pegarResultadoDaOperacaoComoString();
      operadorNaMemoria = operation;
      definirStringComoResultado('0');
   };
   
   acEl.addEventListener('click', () => {
      definirStringComoResultado('0');
      resultadoStringNaMemoria = null;
      operadorNaMemoria = null;
   });
   mmEl.addEventListener('click', () => {
      const resultadoAtualNumero = pegarResultadoNumero();
      const resultadoAtualString = pegarResultadoString();
   
      if (resultadoAtualString === '-0') {
         definirStringComoResultado('0');
         return;
      }
      if (resultadoAtualNumero >= 0) {
         definirStringComoResultado('-' + resultadoAtualString);
      } else {
         definirStringComoResultado(resultadoAtualString.substring(1));
      }
   });
   porcentoEl.addEventListener('click', () => {
      const resultadoAtualNumero = pegarResultadoNumero();
      const novoResultadoNumero = resultadoAtualNumero / 100;
      definirStringComoResultado(novoResultadoNumero.toString());
      resultadoStringNaMemoria = null;
      operadorNaMemoria = null;
   });
   
   adicaoEl.addEventListener('click', () => {
      lidarComOperadorAoClicar('adicao');
   });
   subtracaoEl.addEventListener('click', () => {
      lidarComOperadorAoClicar('subtracao');
   });
   multiplicacaoEl.addEventListener('click', () => {
      lidarComOperadorAoClicar('multiplicacao');
   });
   divisaoEl.addEventListener('click', () => {
      lidarComOperadorAoClicar('divisao');
   });
   igualEl.addEventListener('click', () => {
      if (resultadoStringNaMemoria) {
         definirStringComoResultado(pegarResultadoDaOperacaoComoString());
         resultadoStringNaMemoria = null;
         operadorNaMemoria = null;
      }
   });
   
   for (let i = 0; i < numeroElArray.length; i++) {
      const numeroEl = numeroElArray[i];
      numeroEl.addEventListener('click', () => {
         lidarComNumeroAoClicar(i.toString());
      });
   }
   decimalEl.addEventListener('click', () => {
      const resultadoAtualString = pegarResultadoString();
      if (!resultadoAtualString.includes('.')) {
         definirStringComoResultado(resultadoAtualString + '.');
      }
   });
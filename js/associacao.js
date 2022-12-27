/* ======================== Associação Resistores ========================  */ 

/* ============ Associação Resistores em Série ============ */
function associarResistoresSerie(){

    /* ========== Associação HTML -> JS ========== */

    var _inputResistorSerie1  = document.getElementById("inputResistorSerie1").value
    var _inputResistorSerie2  = document.getElementById("inputResistorSerie2").value
    var _inputResistorSerie3  = document.getElementById("inputResistorSerie3").value
    var _inputResistorSerie4  = document.getElementById("inputResistorSerie4").value
    var _inputResistorSerie5  = document.getElementById("inputResistorSerie5").value
    var _inputResistorSerie6  = document.getElementById("inputResistorSerie6").value
    var _inputResistorSerie7  = document.getElementById("inputResistorSerie7").value
    var _inputResistorSerie8  = document.getElementById("inputResistorSerie8").value
    var _inputResistorSerie9  = document.getElementById("inputResistorSerie9").value
    var _inputResistorSerie10 = document.getElementById("inputResistorSerie10").value
    
    var inputResistorSerie1 =  parseInt(_inputResistorSerie1)
    var inputResistorSerie2 =  parseInt(_inputResistorSerie2)
    var inputResistorSerie3 =  parseInt(_inputResistorSerie3)
    var inputResistorSerie4 =  parseInt(_inputResistorSerie4)
    var inputResistorSerie5 =  parseInt(_inputResistorSerie5)
    var inputResistorSerie6 =  parseInt(_inputResistorSerie6)
    var inputResistorSerie7 =  parseInt(_inputResistorSerie7)
    var inputResistorSerie8 =  parseInt(_inputResistorSerie8)
    var inputResistorSerie9 =  parseInt(_inputResistorSerie9)
    var inputResistorSerie10 = parseInt(_inputResistorSerie10)

    var e1 = document.getElementById("unidadesResistoresSerie1")
    var unidadeResistorSerie1 = e1.options[e1.selectedIndex].text

    var e2 = document.getElementById("unidadesResistoresSerie2")
    var unidadeResistorSerie2 = e2.options[e2.selectedIndex].text

    var e3 = document.getElementById("unidadesResistoresSerie3")
    var unidadeResistorSerie3 = e3.options[e3.selectedIndex].text

    var e4 = document.getElementById("unidadesResistoresSerie4")
    var unidadeResistorSerie4 = e4.options[e4.selectedIndex].text

    var e5 = document.getElementById("unidadesResistoresSerie5")
    var unidadeResistorSerie5 = e5.options[e5.selectedIndex].text

    var e6 = document.getElementById("unidadesResistoresSerie6")
    var unidadeResistorSerie6 = e6.options[e6.selectedIndex].text

    var e7 = document.getElementById("unidadesResistoresSerie7")
    var unidadeResistorSerie7 = e7.options[e7.selectedIndex].text

    var e8 = document.getElementById("unidadesResistoresSerie8")
    var unidadeResistorSerie8 = e8.options[e8.selectedIndex].text

    var e9 = document.getElementById("unidadesResistoresSerie9")
    var unidadeResistorSerie9 = e9.options[e9.selectedIndex].text

    var e10 = document.getElementById("unidadesResistoresSerie10")
    var unidadeResistorSerie10 = e9.options[e9.selectedIndex].text

    /* ========== Conversão ========== */

         if(unidadeResistorSerie1 == "Ω (Ohms)")    { inputResistorSerie1 = inputResistorSerie1 }
    else if(unidadeResistorSerie1 == "KΩ (Kilohms)"){ inputResistorSerie1 = inputResistorSerie1 * 1000 }
    else if(unidadeResistorSerie1 == "MΩ (Megohms)"){ inputResistorSerie1 = inputResistorSerie1 * 1000000 }

         if(unidadeResistorSerie2 == "Ω (Ohms)")    { inputResistorSerie2 = inputResistorSerie2 }
    else if(unidadeResistorSerie2 == "KΩ (Kilohms)"){ inputResistorSerie2 = inputResistorSerie2 * 1000 }
    else if(unidadeResistorSerie2 == "MΩ (Megohms)"){ inputResistorSerie2 = inputResistorSerie2 * 1000000 }

         if(unidadeResistorSerie3 == "Ω (Ohms)")    { inputResistorSerie3 = inputResistorSerie3 }
    else if(unidadeResistorSerie3 == "KΩ (Kilohms)"){ inputResistorSerie3 = inputResistorSerie3 * 1000 }
    else if(unidadeResistorSerie3 == "MΩ (Megohms)"){ inputResistorSerie3 = inputResistorSerie3 * 1000000 }

         if(unidadeResistorSerie4 == "Ω (Ohms)")    { inputResistorSerie4 = inputResistorSerie4 }
    else if(unidadeResistorSerie4 == "KΩ (Kilohms)"){ inputResistorSerie4 = inputResistorSerie4 * 1000 }
    else if(unidadeResistorSerie4 == "MΩ (Megohms)"){ inputResistorSerie4 = inputResistorSerie4 * 1000000 }

         if(unidadeResistorSerie5 == "Ω (Ohms)")    { inputResistorSerie5 = inputResistorSerie5 }
    else if(unidadeResistorSerie5 == "KΩ (Kilohms)"){ inputResistorSerie5 = inputResistorSerie5 * 1000 }
    else if(unidadeResistorSerie5 == "MΩ (Megohms)"){ inputResistorSerie5 = inputResistorSerie5 * 1000000 }

         if(unidadeResistorSerie6 == "Ω (Ohms)")    { inputResistorSerie6 = inputResistorSerie6 }
    else if(unidadeResistorSerie6 == "KΩ (Kilohms)"){ inputResistorSerie6 = inputResistorSerie6 * 1000 }
    else if(unidadeResistorSerie6 == "MΩ (Megohms)"){ inputResistorSerie6 = inputResistorSerie6 * 1000000 }

         if(unidadeResistorSerie7 == "Ω (Ohms)")    { inputResistorSerie7 = inputResistorSerie7 }
    else if(unidadeResistorSerie7 == "KΩ (Kilohms)"){ inputResistorSerie7 = inputResistorSerie7 * 1000 }
    else if(unidadeResistorSerie7 == "MΩ (Megohms)"){ inputResistorSerie7 = inputResistorSerie7 * 1000000 }

         if(unidadeResistorSerie8 == "Ω (Ohms)")    { inputResistorSerie8 = inputResistorSerie8 }
    else if(unidadeResistorSerie8 == "KΩ (Kilohms)"){ inputResistorSerie8 = inputResistorSerie8 * 1000 }
    else if(unidadeResistorSerie8 == "MΩ (Megohms)"){ inputResistorSerie8 = inputResistorSerie8 * 1000000 }

         if(unidadeResistorSerie9 == "Ω (Ohms)")    { inputResistorSerie9 = inputResistorSerie9 }
    else if(unidadeResistorSerie9 == "KΩ (Kilohms)"){ inputResistorSerie9 = inputResistorSerie9 * 1000 }
    else if(unidadeResistorSerie9 == "MΩ (Megohms)"){ inputResistorSerie9 = inputResistorSerie9 * 1000000 }

         if(unidadeResistorSerie10 == "Ω (Ohms)")    { inputResistorSerie10 = inputResistorSerie10 }
    else if(unidadeResistorSerie10 == "KΩ (Kilohms)"){ inputResistorSerie10 = inputResistorSerie10 * 1000 }
    else if(unidadeResistorSerie10 == "MΩ (Megohms)"){ inputResistorSerie10 = inputResistorSerie10 * 1000000 }

    var resistenciaSerieEquivalente = (inputResistorSerie1) + (inputResistorSerie2) + (inputResistorSerie3) + (inputResistorSerie4) + (inputResistorSerie5) + (inputResistorSerie6) + (inputResistorSerie7) + (inputResistorSerie8) + (inputResistorSerie9) + (inputResistorSerie10)

    /* ========== Impressão ========== */

    console.log("Resistencia Equivalente = " + resistenciaSerieEquivalente)

    document.getElementById("resistenciaEquivalenteSerie").innerHTML =  "Resistência Equivalente = " + resistenciaSerieEquivalente + " Ω"
}

/* ============ Associação Resistores em Paralelo ============ */
function associarResistoresParalelo(){

    /* ========== Associação HTML -> JS ========== */

    var _inputResistorParalelo1  = document.getElementById("inputResistorParalelo1").value
    var _inputResistorParalelo2  = document.getElementById("inputResistorParalelo2").value
    var _inputResistorParalelo3  = document.getElementById("inputResistorParalelo3").value
    var _inputResistorParalelo4  = document.getElementById("inputResistorParalelo4").value
    var _inputResistorParalelo5  = document.getElementById("inputResistorParalelo5").value
    var _inputResistorParalelo6  = document.getElementById("inputResistorParalelo6").value
    var _inputResistorParalelo7  = document.getElementById("inputResistorParalelo7").value
    var _inputResistorParalelo8  = document.getElementById("inputResistorParalelo8").value
    var _inputResistorParalelo9  = document.getElementById("inputResistorParalelo9").value
    var _inputResistorParalelo10 = document.getElementById("inputResistorParalelo10").value
    
    var inputResistorParalelo1 =  parseFloat(_inputResistorParalelo1)
    var inputResistorParalelo2 =  parseFloat(_inputResistorParalelo2)
    var inputResistorParalelo3 =  parseFloat(_inputResistorParalelo3)
    var inputResistorParalelo4 =  parseFloat(_inputResistorParalelo4)
    var inputResistorParalelo5 =  parseFloat(_inputResistorParalelo5)
    var inputResistorParalelo6 =  parseFloat(_inputResistorParalelo6)
    var inputResistorParalelo7 =  parseFloat(_inputResistorParalelo7)
    var inputResistorParalelo8 =  parseFloat(_inputResistorParalelo8)
    var inputResistorParalelo9 =  parseFloat(_inputResistorParalelo9)
    var inputResistorParalelo10 = parseFloat(_inputResistorParalelo10)

    var e1 = document.getElementById("unidadesResistoresParalelo1")
    var unidadeResistorParalelo1 = e1.options[e1.selectedIndex].text

    var e2 = document.getElementById("unidadesResistoresParalelo2")
    var unidadeResistorParalelo2 = e2.options[e2.selectedIndex].text

    var e3 = document.getElementById("unidadesResistoresParalelo3")
    var unidadeResistorParalelo3 = e3.options[e3.selectedIndex].text

    var e4 = document.getElementById("unidadesResistoresParalelo4")
    var unidadeResistorParalelo4 = e4.options[e4.selectedIndex].text

    var e5 = document.getElementById("unidadesResistoresParalelo5")
    var unidadeResistorParalelo5 = e5.options[e5.selectedIndex].text

    var e6 = document.getElementById("unidadesResistoresParalelo6")
    var unidadeResistorParalelo6 = e6.options[e6.selectedIndex].text

    var e7 = document.getElementById("unidadesResistoresParalelo7")
    var unidadeResistorParalelo7 = e7.options[e7.selectedIndex].text

    var e8 = document.getElementById("unidadesResistoresParalelo8")
    var unidadeResistorParalelo8 = e8.options[e8.selectedIndex].text

    var e9 = document.getElementById("unidadesResistoresParalelo9")
    var unidadeResistorParalelo9 = e9.options[e9.selectedIndex].text

    var e10 = document.getElementById("unidadesResistoresParalelo10")
    var unidadeResistorParalelo10 = e9.options[e9.selectedIndex].text

    /* ========== Conversão ========== */

         if(unidadeResistorParalelo1 == "Ω (Ohms)")    { inputResistorParalelo1 = inputResistorParalelo1 }
    else if(unidadeResistorParalelo1 == "KΩ (Kilohms)"){ inputResistorParalelo1 = inputResistorParalelo1 * 1000 }
    else if(unidadeResistorParalelo1 == "MΩ (Megohms)"){ inputResistorParalelo1 = inputResistorParalelo1 * 1000000 }

         if(unidadeResistorParalelo2 == "Ω (Ohms)")    { inputResistorParalelo2 = inputResistorParalelo2 }
    else if(unidadeResistorParalelo2 == "KΩ (Kilohms)"){ inputResistorParalelo2 = inputResistorParalelo2 * 1000 }
    else if(unidadeResistorParalelo2 == "MΩ (Megohms)"){ inputResistorParalelo2 = inputResistorParalelo2 * 1000000 }

         if(unidadeResistorParalelo3 == "Ω (Ohms)")    { inputResistorParalelo3 = inputResistorParalelo3 }
    else if(unidadeResistorParalelo3 == "KΩ (Kilohms)"){ inputResistorParalelo3 = inputResistorParalelo3 * 1000 }
    else if(unidadeResistorParalelo3 == "MΩ (Megohms)"){ inputResistorParalelo3 = inputResistorParalelo3 * 1000000 }

         if(unidadeResistorParalelo4 == "Ω (Ohms)")    { inputResistorParalelo4 = inputResistorParalelo4 }
    else if(unidadeResistorParalelo4 == "KΩ (Kilohms)"){ inputResistorParalelo4 = inputResistorParalelo4 * 1000 }
    else if(unidadeResistorParalelo4 == "MΩ (Megohms)"){ inputResistorParalelo4 = inputResistorParalelo4 * 1000000 }

         if(unidadeResistorParalelo5 == "Ω (Ohms)")    { inputResistorParalelo5 = inputResistorParalelo5 }
    else if(unidadeResistorParalelo5 == "KΩ (Kilohms)"){ inputResistorParalelo5 = inputResistorParalelo5 * 1000 }
    else if(unidadeResistorParalelo5 == "MΩ (Megohms)"){ inputResistorParalelo5 = inputResistorParalelo5 * 1000000 }

         if(unidadeResistorParalelo6 == "Ω (Ohms)")    { inputResistorParalelo6 = inputResistorParalelo6 }
    else if(unidadeResistorParalelo6 == "KΩ (Kilohms)"){ inputResistorParalelo6 = inputResistorParalelo6 * 1000 }
    else if(unidadeResistorParalelo6 == "MΩ (Megohms)"){ inputResistorParalelo6 = inputResistorParalelo6 * 1000000 }

         if(unidadeResistorParalelo7 == "Ω (Ohms)")    { inputResistorParalelo7 = inputResistorParalelo7 }
    else if(unidadeResistorParalelo7 == "KΩ (Kilohms)"){ inputResistorParalelo7 = inputResistorParalelo7 * 1000 }
    else if(unidadeResistorParalelo7 == "MΩ (Megohms)"){ inputResistorParalelo7 = inputResistorParalelo7 * 1000000 }

         if(unidadeResistorParalelo8 == "Ω (Ohms)")    { inputResistorParalelo8 = inputResistorParalelo8 }
    else if(unidadeResistorParalelo8 == "KΩ (Kilohms)"){ inputResistorParalelo8 = inputResistorParalelo8 * 1000 }
    else if(unidadeResistorParalelo8 == "MΩ (Megohms)"){ inputResistorParalelo8 = inputResistorParalelo8 * 1000000 }

         if(unidadeResistorParalelo9 == "Ω (Ohms)")    { inputResistorParalelo9 = inputResistorParalelo9 }
    else if(unidadeResistorParalelo9 == "KΩ (Kilohms)"){ inputResistorParalelo9 = inputResistorParalelo9 * 1000 }
    else if(unidadeResistorParalelo9 == "MΩ (Megohms)"){ inputResistorParalelo9 = inputResistorParalelo9 * 1000000 }

         if(unidadeResistorParalelo10 == "Ω (Ohms)")    { inputResistorParalelo10 = inputResistorParalelo10 }
    else if(unidadeResistorParalelo10 == "KΩ (Kilohms)"){ inputResistorParalelo10 = inputResistorParalelo10 * 1000 }
    else if(unidadeResistorParalelo10 == "MΩ (Megohms)"){ inputResistorParalelo10 = inputResistorParalelo10 * 1000000 }

//     var resistenciaParaleloEquivalente = 1/(1/(inputResistorParalelo1) + 1/(inputResistorParalelo2) + 1/(inputResistorParalelo3) + 1/(inputResistorParalelo4) + 1/(inputResistorParalelo5) + 1/(inputResistorParalelo6) + 1/(inputResistorParalelo7) + 1/(inputResistorParalelo8) + 1/(inputResistorParalelo9) + 1/(inputResistorParalelo10))
     var resistenciaParaleloEquivalente = 0

         if(inputResistorParalelo10 == 0 && inputResistorParalelo9 != 0 && inputResistorParalelo8 != 0 && inputResistorParalelo7 != 0 && inputResistorParalelo6 != 0 && inputResistorParalelo5 != 0 && inputResistorParalelo4 != 0 && inputResistorParalelo3 != 0 && inputResistorParalelo2 != 0 && inputResistorParalelo1 != 0){ resistenciaParaleloEquivalente = 1/(1/(inputResistorParalelo1) + 1/(inputResistorParalelo2) + 1/(inputResistorParalelo3) + 1/(inputResistorParalelo4) + 1/(inputResistorParalelo5) + 1/(inputResistorParalelo6) + 1/(inputResistorParalelo7) + 1/(inputResistorParalelo8) + 1/(inputResistorParalelo9)) }
    else if(inputResistorParalelo10 == 0 && inputResistorParalelo9 == 0 && inputResistorParalelo8 != 0 && inputResistorParalelo7 != 0 && inputResistorParalelo6 != 0 && inputResistorParalelo5 != 0 && inputResistorParalelo4 != 0 && inputResistorParalelo3 != 0 && inputResistorParalelo2 != 0 && inputResistorParalelo1 != 0){ resistenciaParaleloEquivalente = 1/(1/(inputResistorParalelo1) + 1/(inputResistorParalelo2) + 1/(inputResistorParalelo3) + 1/(inputResistorParalelo4) + 1/(inputResistorParalelo5) + 1/(inputResistorParalelo6) + 1/(inputResistorParalelo7) + 1/(inputResistorParalelo8)) }
    else if(inputResistorParalelo10 == 0 && inputResistorParalelo9 == 0 && inputResistorParalelo8 == 0 && inputResistorParalelo7 != 0 && inputResistorParalelo6 != 0 && inputResistorParalelo5 != 0 && inputResistorParalelo4 != 0 && inputResistorParalelo3 != 0 && inputResistorParalelo2 != 0 && inputResistorParalelo1 != 0){ resistenciaParaleloEquivalente = 1/(1/(inputResistorParalelo1) + 1/(inputResistorParalelo2) + 1/(inputResistorParalelo3) + 1/(inputResistorParalelo4) + 1/(inputResistorParalelo5) + 1/(inputResistorParalelo6) + 1/(inputResistorParalelo7)) }
    else if(inputResistorParalelo10 == 0 && inputResistorParalelo9 == 0 && inputResistorParalelo8 == 0 && inputResistorParalelo7 == 0 && inputResistorParalelo6 != 0 && inputResistorParalelo5 != 0 && inputResistorParalelo4 != 0 && inputResistorParalelo3 != 0 && inputResistorParalelo2 != 0 && inputResistorParalelo1 != 0){ resistenciaParaleloEquivalente = 1/(1/(inputResistorParalelo1) + 1/(inputResistorParalelo2) + 1/(inputResistorParalelo3) + 1/(inputResistorParalelo4) + 1/(inputResistorParalelo5) + 1/(inputResistorParalelo6)) }
    else if(inputResistorParalelo10 == 0 && inputResistorParalelo9 == 0 && inputResistorParalelo8 == 0 && inputResistorParalelo7 == 0 && inputResistorParalelo6 == 0 && inputResistorParalelo5 != 0 && inputResistorParalelo4 != 0 && inputResistorParalelo3 != 0 && inputResistorParalelo2 != 0 && inputResistorParalelo1 != 0){ resistenciaParaleloEquivalente = 1/(1/(inputResistorParalelo1) + 1/(inputResistorParalelo2) + 1/(inputResistorParalelo3) + 1/(inputResistorParalelo4) + 1/(inputResistorParalelo5)) }
    else if(inputResistorParalelo10 == 0 && inputResistorParalelo9 == 0 && inputResistorParalelo8 == 0 && inputResistorParalelo7 == 0 && inputResistorParalelo6 == 0 && inputResistorParalelo5 == 0 && inputResistorParalelo4 != 0 && inputResistorParalelo3 != 0 && inputResistorParalelo2 != 0 && inputResistorParalelo1 != 0){ resistenciaParaleloEquivalente = 1/(1/(inputResistorParalelo1) + 1/(inputResistorParalelo2) + 1/(inputResistorParalelo3) + 1/(inputResistorParalelo4)) }
    else if(inputResistorParalelo10 == 0 && inputResistorParalelo9 == 0 && inputResistorParalelo8 == 0 && inputResistorParalelo7 == 0 && inputResistorParalelo6 == 0 && inputResistorParalelo5 == 0 && inputResistorParalelo4 == 0 && inputResistorParalelo3 != 0 && inputResistorParalelo2 != 0 && inputResistorParalelo1 != 0){ resistenciaParaleloEquivalente = 1/(1/(inputResistorParalelo1) + 1/(inputResistorParalelo2) + 1/(inputResistorParalelo3)) }
    else if(inputResistorParalelo10 == 0 && inputResistorParalelo9 == 0 && inputResistorParalelo8 == 0 && inputResistorParalelo7 == 0 && inputResistorParalelo6 == 0 && inputResistorParalelo5 == 0 && inputResistorParalelo4 == 0 && inputResistorParalelo3 == 0 && inputResistorParalelo2 != 0 && inputResistorParalelo1 != 0){ resistenciaParaleloEquivalente = 1/(1/(inputResistorParalelo1) + 1/(inputResistorParalelo2)) }
    else if(inputResistorParalelo10 == 0 && inputResistorParalelo9 == 0 && inputResistorParalelo8 == 0 && inputResistorParalelo7 == 0 && inputResistorParalelo6 == 0 && inputResistorParalelo5 == 0 && inputResistorParalelo4 == 0 && inputResistorParalelo3 == 0 && inputResistorParalelo2 == 0 && inputResistorParalelo1 != 0){ resistenciaParaleloEquivalente = 1/(1/(inputResistorParalelo1)) }
    else if(inputResistorParalelo10 == 0 && inputResistorParalelo9 == 0 && inputResistorParalelo8 == 0 && inputResistorParalelo7 == 0 && inputResistorParalelo6 == 0 && inputResistorParalelo5 == 0 && inputResistorParalelo4 == 0 && inputResistorParalelo3 == 0 && inputResistorParalelo2 == 0 && inputResistorParalelo1 == 0){ resistenciaParaleloEquivalente = 0 }


    /* ========== Impressão ========== */

     console.log("Resistencia Equivalente = " + resistenciaParaleloEquivalente)

     var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
          if (Math.floor(valor) !== valor)
              return valor.toString().split(".")[1].length || 0;
          return 0;
     }

     var _resistenciaParaleloEquivalente = parseFloat(resistenciaParaleloEquivalente)

     if(contarDecimais(_resistenciaParaleloEquivalente) >= 3) { 
          document.getElementById("resistenciaEquivalenteParalelo").innerHTML = "Resistência Equivalente = " + _resistenciaParaleloEquivalente.toFixed(3).replace(/\.?0+$/, '') + " Ω"
     } 
     else if(contarDecimais(_resistenciaParaleloEquivalente) == 2) { 
          document.getElementById("resistenciaEquivalenteParalelo").innerHTML = "Resistência Equivalente = " + _resistenciaParaleloEquivalente.toFixed(2).replace(/\.?0+$/, '') + " Ω"
     } 
     else if(contarDecimais(_resistenciaParaleloEquivalente) == 1) { 
          document.getElementById("resistenciaEquivalenteParalelo").innerHTML = "Resistência Equivalente = " + _resistenciaParaleloEquivalente.toFixed(1).replace(/\.?0+$/, '') + " Ω"
     } 
     else if(_resistenciaParaleloEquivalente == ""){
          document.getElementById("resistenciaEquivalenteParalelo").innerHTML = ""
     }
     else{
          document.getElementById("resistenciaEquivalenteParalelo").innerHTML = "Resistência Equivalente = " + _resistenciaParaleloEquivalente + " Ω"
     }
}

/* ======================== Associação Capacitores ========================  */ 

/* ============ Associação Capacitores em Série ============ */
function associarCapacitoresSerie(){
    
    /* ========== Associação HTML -> JS ========== */

    var _inputCapacitorSerie1  = document.getElementById("inputCapacitorSerie1").value
    var _inputCapacitorSerie2  = document.getElementById("inputCapacitorSerie2").value
    var _inputCapacitorSerie3  = document.getElementById("inputCapacitorSerie3").value
    var _inputCapacitorSerie4  = document.getElementById("inputCapacitorSerie4").value
    var _inputCapacitorSerie5  = document.getElementById("inputCapacitorSerie5").value
    var _inputCapacitorSerie6  = document.getElementById("inputCapacitorSerie6").value
    var _inputCapacitorSerie7  = document.getElementById("inputCapacitorSerie7").value
    var _inputCapacitorSerie8  = document.getElementById("inputCapacitorSerie8").value
    var _inputCapacitorSerie9  = document.getElementById("inputCapacitorSerie9").value
    var _inputCapacitorSerie10 = document.getElementById("inputCapacitorSerie10").value
    
    var inputCapacitorSerie1 =  parseInt(_inputCapacitorSerie1)
    var inputCapacitorSerie2 =  parseInt(_inputCapacitorSerie2)
    var inputCapacitorSerie3 =  parseInt(_inputCapacitorSerie3)
    var inputCapacitorSerie4 =  parseInt(_inputCapacitorSerie4)
    var inputCapacitorSerie5 =  parseInt(_inputCapacitorSerie5)
    var inputCapacitorSerie6 =  parseInt(_inputCapacitorSerie6)
    var inputCapacitorSerie7 =  parseInt(_inputCapacitorSerie7)
    var inputCapacitorSerie8 =  parseInt(_inputCapacitorSerie8)
    var inputCapacitorSerie9 =  parseInt(_inputCapacitorSerie9)
    var inputCapacitorSerie10 = parseInt(_inputCapacitorSerie10)

    var e1 = document.getElementById("unidadesCapacitoresSerie1")
    var unidadeCapacitorSerie1 = e1.options[e1.selectedIndex].text

    var e2 = document.getElementById("unidadesCapacitoresSerie2")
    var unidadeCapacitorSerie2 = e2.options[e2.selectedIndex].text

    var e3 = document.getElementById("unidadesCapacitoresSerie3")
    var unidadeCapacitorSerie3 = e3.options[e3.selectedIndex].text

    var e4 = document.getElementById("unidadesCapacitoresSerie4")
    var unidadeCapacitorSerie4 = e4.options[e4.selectedIndex].text

    var e5 = document.getElementById("unidadesCapacitoresSerie5")
    var unidadeCapacitorSerie5 = e5.options[e5.selectedIndex].text

    var e6 = document.getElementById("unidadesCapacitoresSerie6")
    var unidadeCapacitorSerie6 = e6.options[e6.selectedIndex].text

    var e7 = document.getElementById("unidadesCapacitoresSerie7")
    var unidadeCapacitorSerie7 = e7.options[e7.selectedIndex].text

    var e8 = document.getElementById("unidadesCapacitoresSerie8")
    var unidadeCapacitorSerie8 = e8.options[e8.selectedIndex].text

    var e9 = document.getElementById("unidadesCapacitoresSerie9")
    var unidadeCapacitorSerie9 = e9.options[e9.selectedIndex].text

    var e10 = document.getElementById("unidadesCapacitoresSerie10")
    var unidadeCapacitorSerie10 = e9.options[e9.selectedIndex].text

    /* ========== Conversão ========== */

         if(unidadeCapacitorSerie1 == "F (Farads)")      { inputCapacitorSerie1 = inputCapacitorSerie1 }
    else if(unidadeCapacitorSerie1 == "mF (milifarads)") { inputCapacitorSerie1 = inputCapacitorSerie1 * 1000 }
    else if(unidadeCapacitorSerie1 == "µF (microfarads)"){ inputCapacitorSerie1 = inputCapacitorSerie1 * 1000000 }
    else if(unidadeCapacitorSerie1 == "nF (nanofarads)") { inputCapacitorSerie1 = inputCapacitorSerie1 * 1000000000 }
    else if(unidadeCapacitorSerie1 == "pF (picofarads)") { inputCapacitorSerie1 = inputCapacitorSerie1 * 1000000000000 }

         if(unidadeCapacitorSerie2 == "F (Farads)")      { inputCapacitorSerie2 = inputCapacitorSerie2 }
    else if(unidadeCapacitorSerie2 == "mF (milifarads)") { inputCapacitorSerie2 = inputCapacitorSerie2 * 1000 }
    else if(unidadeCapacitorSerie2 == "µF (microfarads)"){ inputCapacitorSerie2 = inputCapacitorSerie2 * 1000000 }
    else if(unidadeCapacitorSerie2 == "nF (nanofarads)") { inputCapacitorSerie2 = inputCapacitorSerie2 * 1000000000 }
    else if(unidadeCapacitorSerie2 == "pF (picofarads)") { inputCapacitorSerie2 = inputCapacitorSerie2 * 1000000000000 }

         if(unidadeCapacitorSerie3 == "F (Farads)")      { inputCapacitorSerie3 = inputCapacitorSerie3 }
    else if(unidadeCapacitorSerie3 == "mF (milifarads)") { inputCapacitorSerie3 = inputCapacitorSerie3 * 1000 }
    else if(unidadeCapacitorSerie3 == "µF (microfarads)"){ inputCapacitorSerie3 = inputCapacitorSerie3 * 1000000 }
    else if(unidadeCapacitorSerie3 == "nF (nanofarads)") { inputCapacitorSerie3 = inputCapacitorSerie3 * 1000000000 }
    else if(unidadeCapacitorSerie3 == "pF (picofarads)") { inputCapacitorSerie3 = inputCapacitorSerie3 * 1000000000000 }

         if(unidadeCapacitorSerie4 == "F (Farads)")      { inputCapacitorSerie4 = inputCapacitorSerie4 }
    else if(unidadeCapacitorSerie4 == "mF (milifarads)") { inputCapacitorSerie4 = inputCapacitorSerie4 * 1000 }
    else if(unidadeCapacitorSerie4 == "µF (microfarads)"){ inputCapacitorSerie4 = inputCapacitorSerie4 * 1000000 }
    else if(unidadeCapacitorSerie4 == "nF (nanofarads)") { inputCapacitorSerie4 = inputCapacitorSerie4 * 1000000000 }
    else if(unidadeCapacitorSerie4 == "pF (picofarads)") { inputCapacitorSerie4 = inputCapacitorSerie4 * 1000000000000 }

         if(unidadeCapacitorSerie5 == "F (Farads)")      { inputCapacitorSerie5 = inputCapacitorSerie5 }
    else if(unidadeCapacitorSerie5 == "mF (milifarads)") { inputCapacitorSerie5 = inputCapacitorSerie5 * 1000 }
    else if(unidadeCapacitorSerie5 == "µF (microfarads)"){ inputCapacitorSerie5 = inputCapacitorSerie5 * 1000000 }
    else if(unidadeCapacitorSerie5 == "nF (nanofarads)") { inputCapacitorSerie5 = inputCapacitorSerie5 * 1000000000 }
    else if(unidadeCapacitorSerie5 == "pF (picofarads)") { inputCapacitorSerie5 = inputCapacitorSerie5 * 1000000000000 }

         if(unidadeCapacitorSerie6 == "F (Farads)")      { inputCapacitorSerie6 = inputCapacitorSerie6 }
    else if(unidadeCapacitorSerie6 == "mF (milifarads)") { inputCapacitorSerie6 = inputCapacitorSerie6 * 1000 }
    else if(unidadeCapacitorSerie6 == "µF (microfarads)"){ inputCapacitorSerie6 = inputCapacitorSerie6 * 1000000 }
    else if(unidadeCapacitorSerie6 == "nF (nanofarads)") { inputCapacitorSerie6 = inputCapacitorSerie6 * 1000000000 }
    else if(unidadeCapacitorSerie6 == "pF (picofarads)") { inputCapacitorSerie6 = inputCapacitorSerie6 * 1000000000000 }

         if(unidadeCapacitorSerie7 == "F (Farads)")      { inputCapacitorSerie7 = inputCapacitorSerie7 }
    else if(unidadeCapacitorSerie7 == "mF (milifarads)") { inputCapacitorSerie7 = inputCapacitorSerie7 * 1000 }
    else if(unidadeCapacitorSerie7 == "µF (microfarads)"){ inputCapacitorSerie7 = inputCapacitorSerie7 * 1000000 }
    else if(unidadeCapacitorSerie7 == "nF (nanofarads)") { inputCapacitorSerie7 = inputCapacitorSerie7 * 1000000000 }
    else if(unidadeCapacitorSerie7 == "pF (picofarads)") { inputCapacitorSerie7 = inputCapacitorSerie7 * 1000000000000 }

         if(unidadeCapacitorSerie8 == "F (Farads)")      { inputCapacitorSerie8 = inputCapacitorSerie8 }
    else if(unidadeCapacitorSerie8 == "mF (milifarads)") { inputCapacitorSerie8 = inputCapacitorSerie8 * 1000 }
    else if(unidadeCapacitorSerie8 == "µF (microfarads)"){ inputCapacitorSerie8 = inputCapacitorSerie8 * 1000000 }
    else if(unidadeCapacitorSerie8 == "nF (nanofarads)") { inputCapacitorSerie8 = inputCapacitorSerie8 * 1000000000 }
    else if(unidadeCapacitorSerie8 == "pF (picofarads)") { inputCapacitorSerie8 = inputCapacitorSerie8 * 1000000000000 }

         if(unidadeCapacitorSerie9 == "F (Farads)")      { inputCapacitorSerie9 = inputCapacitorSerie9 }
    else if(unidadeCapacitorSerie9 == "mF (milifarads)") { inputCapacitorSerie9 = inputCapacitorSerie9 * 1000 }
    else if(unidadeCapacitorSerie9 == "µF (microfarads)"){ inputCapacitorSerie9 = inputCapacitorSerie9 * 1000000 }
    else if(unidadeCapacitorSerie9 == "nF (nanofarads)") { inputCapacitorSerie9 = inputCapacitorSerie9 * 1000000000 }
    else if(unidadeCapacitorSerie9 == "pF (picofarads)") { inputCapacitorSerie9 = inputCapacitorSerie9 * 1000000000000 }

         if(unidadeCapacitorSerie10 == "F (Farads)")      { inputCapacitorSerie10 = inputCapacitorSerie10 }
    else if(unidadeCapacitorSerie10 == "mF (milifarads)") { inputCapacitorSerie10 = inputCapacitorSerie10 * 1000 }
    else if(unidadeCapacitorSerie10 == "µF (microfarads)"){ inputCapacitorSerie10 = inputCapacitorSerie10 * 1000000 }
    else if(unidadeCapacitorSerie10 == "nF (nanofarads)") { inputCapacitorSerie10 = inputCapacitorSerie10 * 1000000000 }
    else if(unidadeCapacitorSerie10 == "pF (picofarads)") { inputCapacitorSerie10 = inputCapacitorSerie10 * 1000000000000 }

    var capacitanciaSerieEquivalente = 0

         if(inputCapacitorSerie10 == 0 && inputCapacitorSerie9 != 0 && inputCapacitorSerie8 != 0 && inputCapacitorSerie7 != 0 && inputCapacitorSerie6 != 0 && inputCapacitorSerie5 != 0 && inputCapacitorSerie4 != 0 && inputCapacitorSerie3 != 0 && inputCapacitorSerie2 != 0 && inputCapacitorSerie1 != 0){ capacitanciaSerieEquivalente = 1/(1/(inputCapacitorSerie1) + 1/(inputCapacitorSerie2) + 1/(inputCapacitorSerie3) + 1/(inputCapacitorSerie4) + 1/(inputCapacitorSerie5) + 1/(inputCapacitorSerie6) + 1/(inputCapacitorSerie7) + 1/(inputCapacitorSerie8) + 1/(inputCapacitorSerie9)) }
    else if(inputCapacitorSerie10 == 0 && inputCapacitorSerie9 == 0 && inputCapacitorSerie8 != 0 && inputCapacitorSerie7 != 0 && inputCapacitorSerie6 != 0 && inputCapacitorSerie5 != 0 && inputCapacitorSerie4 != 0 && inputCapacitorSerie3 != 0 && inputCapacitorSerie2 != 0 && inputCapacitorSerie1 != 0){ capacitanciaSerieEquivalente = 1/(1/(inputCapacitorSerie1) + 1/(inputCapacitorSerie2) + 1/(inputCapacitorSerie3) + 1/(inputCapacitorSerie4) + 1/(inputCapacitorSerie5) + 1/(inputCapacitorSerie6) + 1/(inputCapacitorSerie7) + 1/(inputCapacitorSerie8)) }
    else if(inputCapacitorSerie10 == 0 && inputCapacitorSerie9 == 0 && inputCapacitorSerie8 == 0 && inputCapacitorSerie7 != 0 && inputCapacitorSerie6 != 0 && inputCapacitorSerie5 != 0 && inputCapacitorSerie4 != 0 && inputCapacitorSerie3 != 0 && inputCapacitorSerie2 != 0 && inputCapacitorSerie1 != 0){ capacitanciaSerieEquivalente = 1/(1/(inputCapacitorSerie1) + 1/(inputCapacitorSerie2) + 1/(inputCapacitorSerie3) + 1/(inputCapacitorSerie4) + 1/(inputCapacitorSerie5) + 1/(inputCapacitorSerie6) + 1/(inputCapacitorSerie7)) }
    else if(inputCapacitorSerie10 == 0 && inputCapacitorSerie9 == 0 && inputCapacitorSerie8 == 0 && inputCapacitorSerie7 == 0 && inputCapacitorSerie6 != 0 && inputCapacitorSerie5 != 0 && inputCapacitorSerie4 != 0 && inputCapacitorSerie3 != 0 && inputCapacitorSerie2 != 0 && inputCapacitorSerie1 != 0){ capacitanciaSerieEquivalente = 1/(1/(inputCapacitorSerie1) + 1/(inputCapacitorSerie2) + 1/(inputCapacitorSerie3) + 1/(inputCapacitorSerie4) + 1/(inputCapacitorSerie5) + 1/(inputCapacitorSerie6)) }
    else if(inputCapacitorSerie10 == 0 && inputCapacitorSerie9 == 0 && inputCapacitorSerie8 == 0 && inputCapacitorSerie7 == 0 && inputCapacitorSerie6 == 0 && inputCapacitorSerie5 != 0 && inputCapacitorSerie4 != 0 && inputCapacitorSerie3 != 0 && inputCapacitorSerie2 != 0 && inputCapacitorSerie1 != 0){ capacitanciaSerieEquivalente = 1/(1/(inputCapacitorSerie1) + 1/(inputCapacitorSerie2) + 1/(inputCapacitorSerie3) + 1/(inputCapacitorSerie4) + 1/(inputCapacitorSerie5)) }
    else if(inputCapacitorSerie10 == 0 && inputCapacitorSerie9 == 0 && inputCapacitorSerie8 == 0 && inputCapacitorSerie7 == 0 && inputCapacitorSerie6 == 0 && inputCapacitorSerie5 == 0 && inputCapacitorSerie4 != 0 && inputCapacitorSerie3 != 0 && inputCapacitorSerie2 != 0 && inputCapacitorSerie1 != 0){ capacitanciaSerieEquivalente = 1/(1/(inputCapacitorSerie1) + 1/(inputCapacitorSerie2) + 1/(inputCapacitorSerie3) + 1/(inputCapacitorSerie4)) }
    else if(inputCapacitorSerie10 == 0 && inputCapacitorSerie9 == 0 && inputCapacitorSerie8 == 0 && inputCapacitorSerie7 == 0 && inputCapacitorSerie6 == 0 && inputCapacitorSerie5 == 0 && inputCapacitorSerie4 == 0 && inputCapacitorSerie3 != 0 && inputCapacitorSerie2 != 0 && inputCapacitorSerie1 != 0){ capacitanciaSerieEquivalente = 1/(1/(inputCapacitorSerie1) + 1/(inputCapacitorSerie2) + 1/(inputCapacitorSerie3)) }
    else if(inputCapacitorSerie10 == 0 && inputCapacitorSerie9 == 0 && inputCapacitorSerie8 == 0 && inputCapacitorSerie7 == 0 && inputCapacitorSerie6 == 0 && inputCapacitorSerie5 == 0 && inputCapacitorSerie4 == 0 && inputCapacitorSerie3 == 0 && inputCapacitorSerie2 != 0 && inputCapacitorSerie1 != 0){ capacitanciaSerieEquivalente = 1/(1/(inputCapacitorSerie1) + 1/(inputCapacitorSerie2)) }
    else if(inputCapacitorSerie10 == 0 && inputCapacitorSerie9 == 0 && inputCapacitorSerie8 == 0 && inputCapacitorSerie7 == 0 && inputCapacitorSerie6 == 0 && inputCapacitorSerie5 == 0 && inputCapacitorSerie4 == 0 && inputCapacitorSerie3 == 0 && inputCapacitorSerie2 == 0 && inputCapacitorSerie1 != 0){ capacitanciaSerieEquivalente = 1/(1/(inputCapacitorSerie1)) }
    else if(inputCapacitorSerie10 == 0 && inputCapacitorSerie9 == 0 && inputCapacitorSerie8 == 0 && inputCapacitorSerie7 == 0 && inputCapacitorSerie6 == 0 && inputCapacitorSerie5 == 0 && inputCapacitorSerie4 == 0 && inputCapacitorSerie3 == 0 && inputCapacitorSerie2 == 0 && inputCapacitorSerie1 == 0){ capacitanciaSerieEquivalente = 0 }

    /* ========== Impressão ========== */

    console.log("Capacitância Equivalente = " + capacitanciaSerieEquivalente)

     var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
          if (Math.floor(valor) !== valor)
              return valor.toString().split(".")[1].length || 0;
          return 0;
     }

     var _capacitanciaSerieEquivalente = parseFloat(capacitanciaSerieEquivalente)

     if(contarDecimais(_capacitanciaSerieEquivalente) >= 3) { 
          document.getElementById("capacitanciaEquivalenteSerie").innerHTML = "Capacitância Equivalente = " + _capacitanciaSerieEquivalente.toFixed(3).replace(/\.?0+$/, '') + " F"
     } 
     else if(contarDecimais(_capacitanciaSerieEquivalente) == 2) { 
          document.getElementById("capacitanciaEquivalenteSerie").innerHTML = "Capacitância Equivalente = " + _capacitanciaSerieEquivalente.toFixed(2).replace(/\.?0+$/, '') + " F"
     } 
     else if(contarDecimais(_capacitanciaSerieEquivalente) == 1) { 
          document.getElementById("capacitanciaEquivalenteSerie").innerHTML = "Capacitância Equivalente = " + _capacitanciaSerieEquivalente.toFixed(1).replace(/\.?0+$/, '') + " F"
     } 
     else if(_capacitanciaEquivalenteSerie == ""){
          document.getElementById("capacitanciaEquivalenteSerie").innerHTML = ""
     }
     else{
          document.getElementById("capacitanciaEquivalenteSerie").innerHTML = "Capacitância Equivalente = " + _capacitanciaSerieEquivalente + " F"
     }
}

/* ============ Associação Capacitores em Paralelo ============ */
function associarCapacitoresParalelo(){

    /* ========== Associação HTML -> JS ========== */

    var _inputCapacitorParalelo1  = document.getElementById("inputCapacitorParalelo1").value
    var _inputCapacitorParalelo2  = document.getElementById("inputCapacitorParalelo2").value
    var _inputCapacitorParalelo3  = document.getElementById("inputCapacitorParalelo3").value
    var _inputCapacitorParalelo4  = document.getElementById("inputCapacitorParalelo4").value
    var _inputCapacitorParalelo5  = document.getElementById("inputCapacitorParalelo5").value
    var _inputCapacitorParalelo6  = document.getElementById("inputCapacitorParalelo6").value
    var _inputCapacitorParalelo7  = document.getElementById("inputCapacitorParalelo7").value
    var _inputCapacitorParalelo8  = document.getElementById("inputCapacitorParalelo8").value
    var _inputCapacitorParalelo9  = document.getElementById("inputCapacitorParalelo9").value
    var _inputCapacitorParalelo10 = document.getElementById("inputCapacitorParalelo10").value
    
    var inputCapacitorParalelo1 =  parseFloat(_inputCapacitorParalelo1)
    var inputCapacitorParalelo2 =  parseFloat(_inputCapacitorParalelo2)
    var inputCapacitorParalelo3 =  parseFloat(_inputCapacitorParalelo3)
    var inputCapacitorParalelo4 =  parseFloat(_inputCapacitorParalelo4)
    var inputCapacitorParalelo5 =  parseFloat(_inputCapacitorParalelo5)
    var inputCapacitorParalelo6 =  parseFloat(_inputCapacitorParalelo6)
    var inputCapacitorParalelo7 =  parseFloat(_inputCapacitorParalelo7)
    var inputCapacitorParalelo8 =  parseFloat(_inputCapacitorParalelo8)
    var inputCapacitorParalelo9 =  parseFloat(_inputCapacitorParalelo9)
    var inputCapacitorParalelo10 = parseFloat(_inputCapacitorParalelo10)

    var e1 = document.getElementById("unidadesCapacitoresParalelo1")
    var unidadeCapacitorParalelo1 = e1.options[e1.selectedIndex].text

    var e2 = document.getElementById("unidadesCapacitoresParalelo2")
    var unidadeCapacitorParalelo2 = e2.options[e2.selectedIndex].text

    var e3 = document.getElementById("unidadesCapacitoresParalelo3")
    var unidadeCapacitorParalelo3 = e3.options[e3.selectedIndex].text

    var e4 = document.getElementById("unidadesCapacitoresParalelo4")
    var unidadeCapacitorParalelo4 = e4.options[e4.selectedIndex].text

    var e5 = document.getElementById("unidadesCapacitoresParalelo5")
    var unidadeCapacitorParalelo5 = e5.options[e5.selectedIndex].text

    var e6 = document.getElementById("unidadesCapacitoresParalelo6")
    var unidadeCapacitorParalelo6 = e6.options[e6.selectedIndex].text

    var e7 = document.getElementById("unidadesCapacitoresParalelo7")
    var unidadeCapacitorParalelo7 = e7.options[e7.selectedIndex].text

    var e8 = document.getElementById("unidadesCapacitoresParalelo8")
    var unidadeCapacitorParalelo8 = e8.options[e8.selectedIndex].text

    var e9 = document.getElementById("unidadesCapacitoresParalelo9")
    var unidadeCapacitorParalelo9 = e9.options[e9.selectedIndex].text

    var e10 = document.getElementById("unidadesCapacitoresParalelo10")
    var unidadeCapacitorParalelo10 = e9.options[e9.selectedIndex].text

    /* ========== Conversão ========== */

         if(unidadeCapacitorParalelo1 == "F (Farads)")      { inputCapacitorParalelo1 = inputCapacitorParalelo1 }
    else if(unidadeCapacitorParalelo1 == "mF (milifarads)") { inputCapacitorParalelo1 = inputCapacitorParalelo1 * 1000 }
    else if(unidadeCapacitorParalelo1 == "µF (microfarads)"){ inputCapacitorParalelo1 = inputCapacitorParalelo1 * 1000000 }
    else if(unidadeCapacitorParalelo1 == "nF (nanofarads)") { inputCapacitorParalelo1 = inputCapacitorParalelo1 * 1000000000 }
    else if(unidadeCapacitorParalelo1 == "pF (picofarads)") { inputCapacitorParalelo1 = inputCapacitorParalelo1 * 1000000000000 }

         if(unidadeCapacitorParalelo2 == "F (Farads)")      { inputCapacitorParalelo2 = inputCapacitorParalelo2 }
    else if(unidadeCapacitorParalelo2 == "mF (milifarads)") { inputCapacitorParalelo2 = inputCapacitorParalelo2 * 1000 }
    else if(unidadeCapacitorParalelo2 == "µF (microfarads)"){ inputCapacitorParalelo2 = inputCapacitorParalelo2 * 1000000 }
    else if(unidadeCapacitorParalelo2 == "nF (nanofarads)") { inputCapacitorParalelo2 = inputCapacitorParalelo2 * 1000000000 }
    else if(unidadeCapacitorParalelo2 == "pF (picofarads)") { inputCapacitorParalelo2 = inputCapacitorParalelo2 * 1000000000000 }

         if(unidadeCapacitorParalelo3 == "F (Farads)")      { inputCapacitorParalelo3 = inputCapacitorParalelo3 }
    else if(unidadeCapacitorParalelo3 == "mF (milifarads)") { inputCapacitorParalelo3 = inputCapacitorParalelo3 * 1000 }
    else if(unidadeCapacitorParalelo3 == "µF (microfarads)"){ inputCapacitorParalelo3 = inputCapacitorParalelo3 * 1000000 }
    else if(unidadeCapacitorParalelo3 == "nF (nanofarads)") { inputCapacitorParalelo3 = inputCapacitorParalelo3 * 1000000000 }
    else if(unidadeCapacitorParalelo3 == "pF (picofarads)") { inputCapacitorParalelo3 = inputCapacitorParalelo3 * 1000000000000 }

         if(unidadeCapacitorParalelo4 == "F (Farads)")      { inputCapacitorParalelo4 = inputCapacitorParalelo4 }
    else if(unidadeCapacitorParalelo4 == "mF (milifarads)") { inputCapacitorParalelo4 = inputCapacitorParalelo4 * 1000 }
    else if(unidadeCapacitorParalelo4 == "µF (microfarads)"){ inputCapacitorParalelo4 = inputCapacitorParalelo4 * 1000000 }
    else if(unidadeCapacitorParalelo4 == "nF (nanofarads)") { inputCapacitorParalelo4 = inputCapacitorParalelo4 * 1000000000 }
    else if(unidadeCapacitorParalelo4 == "pF (picofarads)") { inputCapacitorParalelo4 = inputCapacitorParalelo4 * 1000000000000 }

         if(unidadeCapacitorParalelo5 == "F (Farads)")      { inputCapacitorParalelo5 = inputCapacitorParalelo5 }
    else if(unidadeCapacitorParalelo5 == "mF (milifarads)") { inputCapacitorParalelo5 = inputCapacitorParalelo5 * 1000 }
    else if(unidadeCapacitorParalelo5 == "µF (microfarads)"){ inputCapacitorParalelo5 = inputCapacitorParalelo5 * 1000000 }
    else if(unidadeCapacitorParalelo5 == "nF (nanofarads)") { inputCapacitorParalelo5 = inputCapacitorParalelo5 * 1000000000 }
    else if(unidadeCapacitorParalelo5 == "pF (picofarads)") { inputCapacitorParalelo5 = inputCapacitorParalelo5 * 1000000000000 }

         if(unidadeCapacitorParalelo6 == "F (Farads)")      { inputCapacitorParalelo6 = inputCapacitorParalelo6 }
    else if(unidadeCapacitorParalelo6 == "mF (milifarads)") { inputCapacitorParalelo6 = inputCapacitorParalelo6 * 1000 }
    else if(unidadeCapacitorParalelo6 == "µF (microfarads)"){ inputCapacitorParalelo6 = inputCapacitorParalelo6 * 1000000 }
    else if(unidadeCapacitorParalelo6 == "nF (nanofarads)") { inputCapacitorParalelo6 = inputCapacitorParalelo6 * 1000000000 }
    else if(unidadeCapacitorParalelo6 == "pF (picofarads)") { inputCapacitorParalelo6 = inputCapacitorParalelo6 * 1000000000000 }

         if(unidadeCapacitorParalelo7 == "F (Farads)")      { inputCapacitorParalelo7 = inputCapacitorParalelo7 }
    else if(unidadeCapacitorParalelo7 == "mF (milifarads)") { inputCapacitorParalelo7 = inputCapacitorParalelo7 * 1000 }
    else if(unidadeCapacitorParalelo7 == "µF (microfarads)"){ inputCapacitorParalelo7 = inputCapacitorParalelo7 * 1000000 }
    else if(unidadeCapacitorParalelo7 == "nF (nanofarads)") { inputCapacitorParalelo7 = inputCapacitorParalelo7 * 1000000000 }
    else if(unidadeCapacitorParalelo7 == "pF (picofarads)") { inputCapacitorParalelo7 = inputCapacitorParalelo7 * 1000000000000 }

         if(unidadeCapacitorParalelo8 == "F (Farads)")      { inputCapacitorParalelo8 = inputCapacitorParalelo8 }
    else if(unidadeCapacitorParalelo8 == "mF (milifarads)") { inputCapacitorParalelo8 = inputCapacitorParalelo8 * 1000 }
    else if(unidadeCapacitorParalelo8 == "µF (microfarads)"){ inputCapacitorParalelo8 = inputCapacitorParalelo8 * 1000000 }
    else if(unidadeCapacitorParalelo8 == "nF (nanofarads)") { inputCapacitorParalelo8 = inputCapacitorParalelo8 * 1000000000 }
    else if(unidadeCapacitorParalelo8 == "pF (picofarads)") { inputCapacitorParalelo8 = inputCapacitorParalelo8 * 1000000000000 }

         if(unidadeCapacitorParalelo9 == "F (Farads)")      { inputCapacitorParalelo9 = inputCapacitorParalelo9 }
    else if(unidadeCapacitorParalelo9 == "mF (milifarads)") { inputCapacitorParalelo9 = inputCapacitorParalelo9 * 1000 }
    else if(unidadeCapacitorParalelo9 == "µF (microfarads)"){ inputCapacitorParalelo9 = inputCapacitorParalelo9 * 1000000 }
    else if(unidadeCapacitorParalelo9 == "nF (nanofarads)") { inputCapacitorParalelo9 = inputCapacitorParalelo9 * 1000000000 }
    else if(unidadeCapacitorParalelo9 == "pF (picofarads)") { inputCapacitorParalelo9 = inputCapacitorParalelo9 * 1000000000000 }

         if(unidadeCapacitorParalelo10 == "F (Farads)")      { inputCapacitorParalelo10 = inputCapacitorParalelo10 }
    else if(unidadeCapacitorParalelo10 == "mF (milifarads)") { inputCapacitorParalelo10 = inputCapacitorParalelo10 * 1000 }
    else if(unidadeCapacitorParalelo10 == "µF (microfarads)"){ inputCapacitorParalelo10 = inputCapacitorParalelo10 * 1000000 }
    else if(unidadeCapacitorParalelo10 == "nF (nanofarads)") { inputCapacitorParalelo10 = inputCapacitorParalelo10 * 1000000000 }
    else if(unidadeCapacitorParalelo10 == "pF (picofarads)") { inputCapacitorParalelo10 = inputCapacitorParalelo10 * 1000000000000 }

    var capacitanciaParaleloEquivalente = (inputCapacitorParalelo1) + (inputCapacitorParalelo2) + (inputCapacitorParalelo3) + (inputCapacitorParalelo4) + (inputCapacitorParalelo5) + (inputCapacitorParalelo6) + (inputCapacitorParalelo7) + (inputCapacitorParalelo8) + (inputCapacitorParalelo9) + (inputCapacitorParalelo10)

    /* ========== Impressão ========== */

     console.log("Capacitância Equivalente = " + capacitanciaParaleloEquivalente)

     var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
          if (Math.floor(valor) !== valor)
              return valor.toString().split(".")[1].length || 0;
          return 0;
     }

     var _capacitanciaParaleloEquivalente = parseFloat(capacitanciaParaleloEquivalente)

     if(contarDecimais(_capacitanciaParaleloEquivalente) >= 3) { 
          document.getElementById("capacitanciaEquivalenteParalelo").innerHTML = "Capacitância Equivalente = " + _capacitanciaParaleloEquivalente.toFixed(3).replace(/\.?0+$/, '') + " F"
     } 
     else if(contarDecimais(_capacitanciaParaleloEquivalente) == 2) { 
          document.getElementById("capacitanciaEquivalenteParalelo").innerHTML = "Capacitância Equivalente = " + _capacitanciaParaleloEquivalente.toFixed(2).replace(/\.?0+$/, '') + " F"
     } 
     else if(contarDecimais(_capacitanciaParaleloEquivalente) == 1) { 
          document.getElementById("capacitanciaEquivalenteParalelo").innerHTML = "Capacitância Equivalente = " + _capacitanciaParaleloEquivalente.toFixed(1).replace(/\.?0+$/, '') + " F"
     } 
     else if(_capacitanciaParaleloEquivalente == ""){
          document.getElementById("capacitanciaEquivalenteParalelo").innerHTML = ""
     }
     else{
          document.getElementById("capacitanciaEquivalenteParalelo").innerHTML = "Capacitância Equivalente = " + _capacitanciaParaleloEquivalente + " F"
     }
}

/* ======================== Associação Indutores ========================  */

/* ============ Associação Indutores em Série ============ */
function associarIndutoresSerie(){

    /* ========== Associação HTML -> JS ========== */

    var _inputIndutorSerie1  = document.getElementById("inputIndutorSerie1").value
    var _inputIndutorSerie2  = document.getElementById("inputIndutorSerie2").value
    var _inputIndutorSerie3  = document.getElementById("inputIndutorSerie3").value
    var _inputIndutorSerie4  = document.getElementById("inputIndutorSerie4").value
    var _inputIndutorSerie5  = document.getElementById("inputIndutorSerie5").value
    var _inputIndutorSerie6  = document.getElementById("inputIndutorSerie6").value
    var _inputIndutorSerie7  = document.getElementById("inputIndutorSerie7").value
    var _inputIndutorSerie8  = document.getElementById("inputIndutorSerie8").value
    var _inputIndutorSerie9  = document.getElementById("inputIndutorSerie9").value
    var _inputIndutorSerie10 = document.getElementById("inputIndutorSerie10").value
    
    var inputIndutorSerie1 =  parseInt(_inputIndutorSerie1)
    var inputIndutorSerie2 =  parseInt(_inputIndutorSerie2)
    var inputIndutorSerie3 =  parseInt(_inputIndutorSerie3)
    var inputIndutorSerie4 =  parseInt(_inputIndutorSerie4)
    var inputIndutorSerie5 =  parseInt(_inputIndutorSerie5)
    var inputIndutorSerie6 =  parseInt(_inputIndutorSerie6)
    var inputIndutorSerie7 =  parseInt(_inputIndutorSerie7)
    var inputIndutorSerie8 =  parseInt(_inputIndutorSerie8)
    var inputIndutorSerie9 =  parseInt(_inputIndutorSerie9)
    var inputIndutorSerie10 = parseInt(_inputIndutorSerie10)

    var e1 = document.getElementById("unidadesIndutoresSerie1")
    var unidadeIndutorSerie1 = e1.options[e1.selectedIndex].text

    var e2 = document.getElementById("unidadesIndutoresSerie2")
    var unidadeIndutorSerie2 = e2.options[e2.selectedIndex].text

    var e3 = document.getElementById("unidadesIndutoresSerie3")
    var unidadeIndutorSerie3 = e3.options[e3.selectedIndex].text

    var e4 = document.getElementById("unidadesIndutoresSerie4")
    var unidadeIndutorSerie4 = e4.options[e4.selectedIndex].text

    var e5 = document.getElementById("unidadesIndutoresSerie5")
    var unidadeIndutorSerie5 = e5.options[e5.selectedIndex].text

    var e6 = document.getElementById("unidadesIndutoresSerie6")
    var unidadeIndutorSerie6 = e6.options[e6.selectedIndex].text

    var e7 = document.getElementById("unidadesIndutoresSerie7")
    var unidadeIndutorSerie7 = e7.options[e7.selectedIndex].text

    var e8 = document.getElementById("unidadesIndutoresSerie8")
    var unidadeIndutorSerie8 = e8.options[e8.selectedIndex].text

    var e9 = document.getElementById("unidadesIndutoresSerie9")
    var unidadeIndutorSerie9 = e9.options[e9.selectedIndex].text

    var e10 = document.getElementById("unidadesIndutoresSerie10")
    var unidadeIndutorSerie10 = e9.options[e9.selectedIndex].text

    /* ========== Conversão ========== */

         if(unidadeIndutorSerie1 == "H (Henry)")      { inputIndutorSerie1 = inputIndutorSerie1 }
    else if(unidadeIndutorSerie1 == "mH (milihenry)") { inputIndutorSerie1 = inputIndutorSerie1 * 1000 }
    else if(unidadeIndutorSerie1 == "µH (microhenry)"){ inputIndutorSerie1 = inputIndutorSerie1 * 1000000 }
    else if(unidadeIndutorSerie1 == "nH (nanohenry)") { inputIndutorSerie1 = inputIndutorSerie1 * 1000000000 }
    else if(unidadeIndutorSerie1 == "pH (picohenry)") { inputIndutorSerie1 = inputIndutorSerie1 * 1000000000000 }

         if(unidadeIndutorSerie2 == "H (Henry)")      { inputIndutorSerie2 = inputIndutorSerie2 }
    else if(unidadeIndutorSerie2 == "mH (milihenry)") { inputIndutorSerie2 = inputIndutorSerie2 * 1000 }
    else if(unidadeIndutorSerie2 == "µH (microhenry)"){ inputIndutorSerie2 = inputIndutorSerie2 * 1000000 }
    else if(unidadeIndutorSerie2 == "nH (nanohenry)") { inputIndutorSerie2 = inputIndutorSerie2 * 1000000000 }
    else if(unidadeIndutorSerie2 == "pH (picohenry)") { inputIndutorSerie2 = inputIndutorSerie2 * 1000000000000 }

         if(unidadeIndutorSerie3 == "H (Henry)")      { inputIndutorSerie3 = inputIndutorSerie3 }
    else if(unidadeIndutorSerie3 == "mH (milihenry)") { inputIndutorSerie3 = inputIndutorSerie3 * 1000 }
    else if(unidadeIndutorSerie3 == "µH (microhenry)"){ inputIndutorSerie3 = inputIndutorSerie3 * 1000000 }
    else if(unidadeIndutorSerie3 == "nH (nanohenry)") { inputIndutorSerie3 = inputIndutorSerie3 * 1000000000 }
    else if(unidadeIndutorSerie3 == "pH (picohenry)") { inputIndutorSerie3 = inputIndutorSerie3 * 1000000000000 }

         if(unidadeIndutorSerie4 == "H (Henry)")      { inputIndutorSerie4 = inputIndutorSerie4 }
    else if(unidadeIndutorSerie4 == "mH (milihenry)") { inputIndutorSerie4 = inputIndutorSerie4 * 1000 }
    else if(unidadeIndutorSerie4 == "µH (microhenry)"){ inputIndutorSerie4 = inputIndutorSerie4 * 1000000 }
    else if(unidadeIndutorSerie4 == "nH (nanohenry)") { inputIndutorSerie4 = inputIndutorSerie4 * 1000000000 }
    else if(unidadeIndutorSerie4 == "pH (picohenry)") { inputIndutorSerie4 = inputIndutorSerie4 * 1000000000000 }

         if(unidadeIndutorSerie5 == "H (Henry)")      { inputIndutorSerie5 = inputIndutorSerie5 }
    else if(unidadeIndutorSerie5 == "mH (milihenry)") { inputIndutorSerie5 = inputIndutorSerie5 * 1000 }
    else if(unidadeIndutorSerie5 == "µH (microhenry)"){ inputIndutorSerie5 = inputIndutorSerie5 * 1000000 }
    else if(unidadeIndutorSerie5 == "nH (nanohenry)") { inputIndutorSerie5 = inputIndutorSerie5 * 1000000000 }
    else if(unidadeIndutorSerie5 == "pH (picohenry)") { inputIndutorSerie5 = inputIndutorSerie5 * 1000000000000 }

         if(unidadeIndutorSerie6 == "H (Henry)")      { inputIndutorSerie6 = inputIndutorSerie6 }
    else if(unidadeIndutorSerie6 == "mH (milihenry)") { inputIndutorSerie6 = inputIndutorSerie6 * 1000 }
    else if(unidadeIndutorSerie6 == "µH (microhenry)"){ inputIndutorSerie6 = inputIndutorSerie6 * 1000000 }
    else if(unidadeIndutorSerie6 == "nH (nanohenry)") { inputIndutorSerie6 = inputIndutorSerie6 * 1000000000 }
    else if(unidadeIndutorSerie6 == "pH (picohenry)") { inputIndutorSerie6 = inputIndutorSerie6 * 1000000000000 }

         if(unidadeIndutorSerie7 == "H (Henry)")      { inputIndutorSerie7 = inputIndutorSerie7 }
    else if(unidadeIndutorSerie7 == "mH (milihenry)") { inputIndutorSerie7 = inputIndutorSerie7 * 1000 }
    else if(unidadeIndutorSerie7 == "µH (microhenry)"){ inputIndutorSerie7 = inputIndutorSerie7 * 1000000 }
    else if(unidadeIndutorSerie7 == "nH (nanohenry)") { inputIndutorSerie7 = inputIndutorSerie7 * 1000000000 }
    else if(unidadeIndutorSerie7 == "pH (picohenry)") { inputIndutorSerie7 = inputIndutorSerie7 * 1000000000000 }

         if(unidadeIndutorSerie8 == "H (Henry)")      { inputIndutorSerie8 = inputIndutorSerie8 }
    else if(unidadeIndutorSerie8 == "mH (milihenry)") { inputIndutorSerie8 = inputIndutorSerie8 * 1000 }
    else if(unidadeIndutorSerie8 == "µH (microhenry)"){ inputIndutorSerie8 = inputIndutorSerie8 * 1000000 }
    else if(unidadeIndutorSerie8 == "nH (nanohenry)") { inputIndutorSerie8 = inputIndutorSerie8 * 1000000000 }
    else if(unidadeIndutorSerie8 == "pH (picohenry)") { inputIndutorSerie8 = inputIndutorSerie8 * 1000000000000 }

         if(unidadeIndutorSerie9 == "H (Henry)")      { inputIndutorSerie9 = inputIndutorSerie9 }
    else if(unidadeIndutorSerie9 == "mH (milihenry)") { inputIndutorSerie9 = inputIndutorSerie9 * 1000 }
    else if(unidadeIndutorSerie9 == "µH (microhenry)"){ inputIndutorSerie9 = inputIndutorSerie9 * 1000000 }
    else if(unidadeIndutorSerie9 == "nH (nanohenry)") { inputIndutorSerie9 = inputIndutorSerie9 * 1000000000 }
    else if(unidadeIndutorSerie9 == "pH (picohenry)") { inputIndutorSerie9 = inputIndutorSerie9 * 1000000000000 }

         if(unidadeIndutorSerie10 == "H (Henry)")      { inputIndutorSerie10 = inputIndutorSerie10 }
    else if(unidadeIndutorSerie10 == "mH (milihenry)") { inputIndutorSerie10 = inputIndutorSerie10 * 1000 }
    else if(unidadeIndutorSerie10 == "µH (microhenry)"){ inputIndutorSerie10 = inputIndutorSerie10 * 1000000 }
    else if(unidadeIndutorSerie10 == "nH (nanohenry)") { inputIndutorSerie10 = inputIndutorSerie10 * 1000000000 }
    else if(unidadeIndutorSerie10 == "pH (picohenry)") { inputIndutorSerie10 = inputIndutorSerie10 * 1000000000000 }

    var indutanciaSerieEquivalente = (inputIndutorSerie1) + (inputIndutorSerie2) + (inputIndutorSerie3) + (inputIndutorSerie4) + (inputIndutorSerie5) + (inputIndutorSerie6) + (inputIndutorSerie7) + (inputIndutorSerie8) + (inputIndutorSerie9) + (inputIndutorSerie10)

    /* ========== Impressão ========== */

    console.log("Indutância Equivalente = " + indutanciaSerieEquivalente)

    document.getElementById("indutanciaEquivalenteSerie").innerHTML =  "Indutância Equivalente = " + indutanciaSerieEquivalente + " H"
}

/* ============ Associação Indutores em Paralelo ============ */
function associarIndutoresParalelo(){

    /* ========== Associação HTML -> JS ========== */

    var _inputIndutorParalelo1  = document.getElementById("inputIndutorParalelo1").value
    var _inputIndutorParalelo2  = document.getElementById("inputIndutorParalelo2").value
    var _inputIndutorParalelo3  = document.getElementById("inputIndutorParalelo3").value
    var _inputIndutorParalelo4  = document.getElementById("inputIndutorParalelo4").value
    var _inputIndutorParalelo5  = document.getElementById("inputIndutorParalelo5").value
    var _inputIndutorParalelo6  = document.getElementById("inputIndutorParalelo6").value
    var _inputIndutorParalelo7  = document.getElementById("inputIndutorParalelo7").value
    var _inputIndutorParalelo8  = document.getElementById("inputIndutorParalelo8").value
    var _inputIndutorParalelo9  = document.getElementById("inputIndutorParalelo9").value
    var _inputIndutorParalelo10 = document.getElementById("inputIndutorParalelo10").value
    
    var inputIndutorParalelo1 =  parseFloat(_inputIndutorParalelo1)
    var inputIndutorParalelo2 =  parseFloat(_inputIndutorParalelo2)
    var inputIndutorParalelo3 =  parseFloat(_inputIndutorParalelo3)
    var inputIndutorParalelo4 =  parseFloat(_inputIndutorParalelo4)
    var inputIndutorParalelo5 =  parseFloat(_inputIndutorParalelo5)
    var inputIndutorParalelo6 =  parseFloat(_inputIndutorParalelo6)
    var inputIndutorParalelo7 =  parseFloat(_inputIndutorParalelo7)
    var inputIndutorParalelo8 =  parseFloat(_inputIndutorParalelo8)
    var inputIndutorParalelo9 =  parseFloat(_inputIndutorParalelo9)
    var inputIndutorParalelo10 = parseFloat(_inputIndutorParalelo10)

    var e1 = document.getElementById("unidadesIndutoresParalelo1")
    var unidadeIndutorParalelo1 = e1.options[e1.selectedIndex].text

    var e2 = document.getElementById("unidadesIndutoresParalelo2")
    var unidadeIndutorParalelo2 = e2.options[e2.selectedIndex].text

    var e3 = document.getElementById("unidadesIndutoresParalelo3")
    var unidadeIndutorParalelo3 = e3.options[e3.selectedIndex].text

    var e4 = document.getElementById("unidadesIndutoresParalelo4")
    var unidadeIndutorParalelo4 = e4.options[e4.selectedIndex].text

    var e5 = document.getElementById("unidadesIndutoresParalelo5")
    var unidadeIndutorParalelo5 = e5.options[e5.selectedIndex].text

    var e6 = document.getElementById("unidadesIndutoresParalelo6")
    var unidadeIndutorParalelo6 = e6.options[e6.selectedIndex].text

    var e7 = document.getElementById("unidadesIndutoresParalelo7")
    var unidadeIndutorParalelo7 = e7.options[e7.selectedIndex].text

    var e8 = document.getElementById("unidadesIndutoresParalelo8")
    var unidadeIndutorParalelo8 = e8.options[e8.selectedIndex].text

    var e9 = document.getElementById("unidadesIndutoresParalelo9")
    var unidadeIndutorParalelo9 = e9.options[e9.selectedIndex].text

    var e10 = document.getElementById("unidadesIndutoresParalelo10")
    var unidadeIndutorParalelo10 = e9.options[e9.selectedIndex].text

    /* ========== Conversão ========== */

         if(unidadeIndutorParalelo1 == "H (Henry)")      { inputIndutorParalelo1 = inputIndutorParalelo1 }
    else if(unidadeIndutorParalelo1 == "mH (milihenry)") { inputIndutorParalelo1 = inputIndutorParalelo1 * 1000 }
    else if(unidadeIndutorParalelo1 == "µH (microhenry)"){ inputIndutorParalelo1 = inputIndutorParalelo1 * 1000000 }
    else if(unidadeIndutorParalelo1 == "nH (nanohenry)") { inputIndutorParalelo1 = inputIndutorParalelo1 * 1000000000 }
    else if(unidadeIndutorParalelo1 == "pH (picohenry)") { inputIndutorParalelo1 = inputIndutorParalelo1 * 1000000000000 }

         if(unidadeIndutorParalelo2 == "H (Henry)")      { inputIndutorParalelo2 = inputIndutorParalelo2 }
    else if(unidadeIndutorParalelo2 == "mH (milihenry)") { inputIndutorParalelo2 = inputIndutorParalelo2 * 1000 }
    else if(unidadeIndutorParalelo2 == "µH (microhenry)"){ inputIndutorParalelo2 = inputIndutorParalelo2 * 1000000 }
    else if(unidadeIndutorParalelo2 == "nH (nanohenry)") { inputIndutorParalelo2 = inputIndutorParalelo2 * 1000000000 }
    else if(unidadeIndutorParalelo2 == "pH (picohenry)") { inputIndutorParalelo2 = inputIndutorParalelo2 * 1000000000000 }

         if(unidadeIndutorParalelo3 == "H (Henry)")      { inputIndutorParalelo3 = inputIndutorParalelo3 }
    else if(unidadeIndutorParalelo3 == "mH (milihenry)") { inputIndutorParalelo3 = inputIndutorParalelo3 * 1000 }
    else if(unidadeIndutorParalelo3 == "µH (microhenry)"){ inputIndutorParalelo3 = inputIndutorParalelo3 * 1000000 }
    else if(unidadeIndutorParalelo3 == "nH (nanohenry)") { inputIndutorParalelo3 = inputIndutorParalelo3 * 1000000000 }
    else if(unidadeIndutorParalelo3 == "pH (picohenry)") { inputIndutorParalelo3 = inputIndutorParalelo3 * 1000000000000 }

         if(unidadeIndutorParalelo4 == "H (Henry)")      { inputIndutorParalelo4 = inputIndutorParalelo4 }
    else if(unidadeIndutorParalelo4 == "mH (milihenry)") { inputIndutorParalelo4 = inputIndutorParalelo4 * 1000 }
    else if(unidadeIndutorParalelo4 == "µH (microhenry)"){ inputIndutorParalelo4 = inputIndutorParalelo4 * 1000000 }
    else if(unidadeIndutorParalelo4 == "nH (nanohenry)") { inputIndutorParalelo4 = inputIndutorParalelo4 * 1000000000 }
    else if(unidadeIndutorParalelo4 == "pH (picohenry)") { inputIndutorParalelo4 = inputIndutorParalelo4 * 1000000000000 }

         if(unidadeIndutorParalelo5 == "H (Henry)")      { inputIndutorParalelo5 = inputIndutorParalelo5 }
    else if(unidadeIndutorParalelo5 == "mH (milihenry)") { inputIndutorParalelo5 = inputIndutorParalelo5 * 1000 }
    else if(unidadeIndutorParalelo5 == "µH (microhenry)"){ inputIndutorParalelo5 = inputIndutorParalelo5 * 1000000 }
    else if(unidadeIndutorParalelo5 == "nH (nanohenry)") { inputIndutorParalelo5 = inputIndutorParalelo5 * 1000000000 }
    else if(unidadeIndutorParalelo5 == "pH (picohenry)") { inputIndutorParalelo5 = inputIndutorParalelo5 * 1000000000000 }

         if(unidadeIndutorParalelo6 == "H (Henry)")      { inputIndutorParalelo6 = inputIndutorParalelo6 }
    else if(unidadeIndutorParalelo6 == "mH (milihenry)") { inputIndutorParalelo6 = inputIndutorParalelo6 * 1000 }
    else if(unidadeIndutorParalelo6 == "µH (microhenry)"){ inputIndutorParalelo6 = inputIndutorParalelo6 * 1000000 }
    else if(unidadeIndutorParalelo6 == "nH (nanohenry)") { inputIndutorParalelo6 = inputIndutorParalelo6 * 1000000000 }
    else if(unidadeIndutorParalelo6 == "pH (picohenry)") { inputIndutorParalelo6 = inputIndutorParalelo6 * 1000000000000 }

         if(unidadeIndutorParalelo7 == "H (Henry)")      { inputIndutorParalelo7 = inputIndutorParalelo7 }
    else if(unidadeIndutorParalelo7 == "mH (milihenry)") { inputIndutorParalelo7 = inputIndutorParalelo7 * 1000 }
    else if(unidadeIndutorParalelo7 == "µH (microhenry)"){ inputIndutorParalelo7 = inputIndutorParalelo7 * 1000000 }
    else if(unidadeIndutorParalelo7 == "nH (nanohenry)") { inputIndutorParalelo7 = inputIndutorParalelo7 * 1000000000 }
    else if(unidadeIndutorParalelo7 == "pH (picohenry)") { inputIndutorParalelo7 = inputIndutorParalelo7 * 1000000000000 }

         if(unidadeIndutorParalelo8 == "H (Henry)")      { inputIndutorParalelo8 = inputIndutorParalelo8 }
    else if(unidadeIndutorParalelo8 == "mH (milihenry)") { inputIndutorParalelo8 = inputIndutorParalelo8 * 1000 }
    else if(unidadeIndutorParalelo8 == "µH (microhenry)"){ inputIndutorParalelo8 = inputIndutorParalelo8 * 1000000 }
    else if(unidadeIndutorParalelo8 == "nH (nanohenry)") { inputIndutorParalelo8 = inputIndutorParalelo8 * 1000000000 }
    else if(unidadeIndutorParalelo8 == "pH (picohenry)") { inputIndutorParalelo8 = inputIndutorParalelo8 * 1000000000000 }

         if(unidadeIndutorParalelo9 == "H (Henry)")      { inputIndutorParalelo9 = inputIndutorParalelo9 }
    else if(unidadeIndutorParalelo9 == "mH (milihenry)") { inputIndutorParalelo9 = inputIndutorParalelo9 * 1000 }
    else if(unidadeIndutorParalelo9 == "µH (microhenry)"){ inputIndutorParalelo9 = inputIndutorParalelo9 * 1000000 }
    else if(unidadeIndutorParalelo9 == "nH (nanohenry)") { inputIndutorParalelo9 = inputIndutorParalelo9 * 1000000000 }
    else if(unidadeIndutorParalelo9 == "pH (picohenry)") { inputIndutorParalelo9 = inputIndutorParalelo9 * 1000000000000 }

         if(unidadeIndutorParalelo10 == "H (Henry)")      { inputIndutorParalelo10 = inputIndutorParalelo10 }
    else if(unidadeIndutorParalelo10 == "mH (milihenry)") { inputIndutorParalelo10 = inputIndutorParalelo10 * 1000 }
    else if(unidadeIndutorParalelo10 == "µH (microhenry)"){ inputIndutorParalelo10 = inputIndutorParalelo10 * 1000000 }
    else if(unidadeIndutorParalelo10 == "nH (nanohenry)") { inputIndutorParalelo10 = inputIndutorParalelo10 * 1000000000 }
    else if(unidadeIndutorParalelo10 == "pH (picohenry)") { inputIndutorParalelo10 = inputIndutorParalelo10 * 1000000000000 }

     var indutanciaParaleloEquivalente = 0

         if(inputIndutorParalelo10 == 0 && inputIndutorParalelo9 != 0 && inputIndutorParalelo8 != 0 && inputIndutorParalelo7 != 0 && inputIndutorParalelo6 != 0 && inputIndutorParalelo5 != 0 && inputIndutorParalelo4 != 0 && inputIndutorParalelo3 != 0 && inputIndutorParalelo2 != 0 && inputIndutorParalelo1 != 0){ indutanciaParaleloEquivalente = 1/(1/(inputIndutorParalelo1) + 1/(inputIndutorParalelo2) + 1/(inputIndutorParalelo3) + 1/(inputIndutorParalelo4) + 1/(inputIndutorParalelo5) + 1/(inputIndutorParalelo6) + 1/(inputIndutorParalelo7) + 1/(inputIndutorParalelo8) + 1/(inputIndutorParalelo9)) }
    else if(inputIndutorParalelo10 == 0 && inputIndutorParalelo9 == 0 && inputIndutorParalelo8 != 0 && inputIndutorParalelo7 != 0 && inputIndutorParalelo6 != 0 && inputIndutorParalelo5 != 0 && inputIndutorParalelo4 != 0 && inputIndutorParalelo3 != 0 && inputIndutorParalelo2 != 0 && inputIndutorParalelo1 != 0){ indutanciaParaleloEquivalente = 1/(1/(inputIndutorParalelo1) + 1/(inputIndutorParalelo2) + 1/(inputIndutorParalelo3) + 1/(inputIndutorParalelo4) + 1/(inputIndutorParalelo5) + 1/(inputIndutorParalelo6) + 1/(inputIndutorParalelo7) + 1/(inputIndutorParalelo8)) }
    else if(inputIndutorParalelo10 == 0 && inputIndutorParalelo9 == 0 && inputIndutorParalelo8 == 0 && inputIndutorParalelo7 != 0 && inputIndutorParalelo6 != 0 && inputIndutorParalelo5 != 0 && inputIndutorParalelo4 != 0 && inputIndutorParalelo3 != 0 && inputIndutorParalelo2 != 0 && inputIndutorParalelo1 != 0){ indutanciaParaleloEquivalente = 1/(1/(inputIndutorParalelo1) + 1/(inputIndutorParalelo2) + 1/(inputIndutorParalelo3) + 1/(inputIndutorParalelo4) + 1/(inputIndutorParalelo5) + 1/(inputIndutorParalelo6) + 1/(inputIndutorParalelo7)) }
    else if(inputIndutorParalelo10 == 0 && inputIndutorParalelo9 == 0 && inputIndutorParalelo8 == 0 && inputIndutorParalelo7 == 0 && inputIndutorParalelo6 != 0 && inputIndutorParalelo5 != 0 && inputIndutorParalelo4 != 0 && inputIndutorParalelo3 != 0 && inputIndutorParalelo2 != 0 && inputIndutorParalelo1 != 0){ indutanciaParaleloEquivalente = 1/(1/(inputIndutorParalelo1) + 1/(inputIndutorParalelo2) + 1/(inputIndutorParalelo3) + 1/(inputIndutorParalelo4) + 1/(inputIndutorParalelo5) + 1/(inputIndutorParalelo6)) }
    else if(inputIndutorParalelo10 == 0 && inputIndutorParalelo9 == 0 && inputIndutorParalelo8 == 0 && inputIndutorParalelo7 == 0 && inputIndutorParalelo6 == 0 && inputIndutorParalelo5 != 0 && inputIndutorParalelo4 != 0 && inputIndutorParalelo3 != 0 && inputIndutorParalelo2 != 0 && inputIndutorParalelo1 != 0){ indutanciaParaleloEquivalente = 1/(1/(inputIndutorParalelo1) + 1/(inputIndutorParalelo2) + 1/(inputIndutorParalelo3) + 1/(inputIndutorParalelo4) + 1/(inputIndutorParalelo5)) }
    else if(inputIndutorParalelo10 == 0 && inputIndutorParalelo9 == 0 && inputIndutorParalelo8 == 0 && inputIndutorParalelo7 == 0 && inputIndutorParalelo6 == 0 && inputIndutorParalelo5 == 0 && inputIndutorParalelo4 != 0 && inputIndutorParalelo3 != 0 && inputIndutorParalelo2 != 0 && inputIndutorParalelo1 != 0){ indutanciaParaleloEquivalente = 1/(1/(inputIndutorParalelo1) + 1/(inputIndutorParalelo2) + 1/(inputIndutorParalelo3) + 1/(inputIndutorParalelo4)) }
    else if(inputIndutorParalelo10 == 0 && inputIndutorParalelo9 == 0 && inputIndutorParalelo8 == 0 && inputIndutorParalelo7 == 0 && inputIndutorParalelo6 == 0 && inputIndutorParalelo5 == 0 && inputIndutorParalelo4 == 0 && inputIndutorParalelo3 != 0 && inputIndutorParalelo2 != 0 && inputIndutorParalelo1 != 0){ indutanciaParaleloEquivalente = 1/(1/(inputIndutorParalelo1) + 1/(inputIndutorParalelo2) + 1/(inputIndutorParalelo3)) }
    else if(inputIndutorParalelo10 == 0 && inputIndutorParalelo9 == 0 && inputIndutorParalelo8 == 0 && inputIndutorParalelo7 == 0 && inputIndutorParalelo6 == 0 && inputIndutorParalelo5 == 0 && inputIndutorParalelo4 == 0 && inputIndutorParalelo3 == 0 && inputIndutorParalelo2 != 0 && inputIndutorParalelo1 != 0){ indutanciaParaleloEquivalente = 1/(1/(inputIndutorParalelo1) + 1/(inputIndutorParalelo2)) }
    else if(inputIndutorParalelo10 == 0 && inputIndutorParalelo9 == 0 && inputIndutorParalelo8 == 0 && inputIndutorParalelo7 == 0 && inputIndutorParalelo6 == 0 && inputIndutorParalelo5 == 0 && inputIndutorParalelo4 == 0 && inputIndutorParalelo3 == 0 && inputIndutorParalelo2 == 0 && inputIndutorParalelo1 != 0){ indutanciaParaleloEquivalente = 1/(1/(inputIndutorParalelo1)) }
    else if(inputIndutorParalelo10 == 0 && inputIndutorParalelo9 == 0 && inputIndutorParalelo8 == 0 && inputIndutorParalelo7 == 0 && inputIndutorParalelo6 == 0 && inputIndutorParalelo5 == 0 && inputIndutorParalelo4 == 0 && inputIndutorParalelo3 == 0 && inputIndutorParalelo2 == 0 && inputIndutorParalelo1 == 0){ indutanciaParaleloEquivalente = 0 }


    /* ========== Impressão ========== */

     console.log("Indutância Equivalente = " + indutanciaParaleloEquivalente)

     var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
          if (Math.floor(valor) !== valor)
              return valor.toString().split(".")[1].length || 0;
          return 0;
     }

     var _indutanciaParaleloEquivalente = parseFloat(indutanciaParaleloEquivalente)

     if(contarDecimais(_indutanciaParaleloEquivalente) >= 3) { 
          document.getElementById("indutanciaEquivalenteParalelo").innerHTML = "Indutância Equivalente = " + _indutanciaParaleloEquivalente.toFixed(3).replace(/\.?0+$/, '') + " H"
     } 
     else if(contarDecimais(_indutanciaParaleloEquivalente) == 2) { 
          document.getElementById("indutanciaEquivalenteParalelo").innerHTML = "Indutância Equivalente = " + _indutanciaParaleloEquivalente.toFixed(2).replace(/\.?0+$/, '') + " H"
     } 
     else if(contarDecimais(_indutanciaParaleloEquivalente) == 1) { 
          document.getElementById("indutanciaEquivalenteParalelo").innerHTML = "Indutância Equivalente = " + _indutanciaParaleloEquivalente.toFixed(1).replace(/\.?0+$/, '') + " H"
     } 
     else if(_indutanciaParaleloEquivalente == ""){
          document.getElementById("indutanciaEquivalenteParalelo").innerHTML = ""
     }
     else{
          document.getElementById("indutanciaEquivalenteParalelo").innerHTML = "Indutância Equivalente = " + _indutanciaParaleloEquivalente + " H"
     }
}

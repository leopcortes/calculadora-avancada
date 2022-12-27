/* ============ Conversão Tempo ============ */

function converterTempo() {

    /* ========== Associação HTML -> JS ========== */

    var conversorTempo = document.getElementById("conversorTempo").value
    
    var e1 = document.getElementById("selecaoconversortempo")
    var textoconversortempo = e1.options[e1.selectedIndex].text
    
    var e2 = document.getElementById("selecaoconvertidotempo")
    var textoconvertidotempo = e2.options[e2.selectedIndex].text
    
    /* ========== Conversão ========== */

    /* ---------- Nanosegundo ---------- */
         if(textoconversortempo == "Nanosegundo" && textoconvertidotempo == "Nanosegundo") { convertidoTempo = conversorTempo } 
    else if(textoconversortempo == "Nanosegundo" && textoconvertidotempo == "Microsegundo"){ convertidoTempo = conversorTempo / 1000 }
    else if(textoconversortempo == "Nanosegundo" && textoconvertidotempo == "Milisegundo") { convertidoTempo = conversorTempo / 1000000 }
    else if(textoconversortempo == "Nanosegundo" && textoconvertidotempo == "Segundo")     { convertidoTempo = conversorTempo / 1000000000 }
    else if(textoconversortempo == "Nanosegundo" && textoconvertidotempo == "Minuto")      { convertidoTempo = "erro" }
    else if(textoconversortempo == "Nanosegundo" && textoconvertidotempo == "Hora")        { convertidoTempo = "erro" }
    else if(textoconversortempo == "Nanosegundo" && textoconvertidotempo == "Dia")         { convertidoTempo = "erro" }
    else if(textoconversortempo == "Nanosegundo" && textoconvertidotempo == "Semana")      { convertidoTempo = "erro" }
    else if(textoconversortempo == "Nanosegundo" && textoconvertidotempo == "Mes")         { convertidoTempo = "erro" }
    else if(textoconversortempo == "Nanosegundo" && textoconvertidotempo == "Ano")         { convertidoTempo = "erro" }
    
    /* ---------- Microsegundo ---------- */
         if(textoconversortempo == "Microsegundo" && textoconvertidotempo == "Nanosegundo") { convertidoTempo = conversorTempo * 1000 } 
    else if(textoconversortempo == "Microsegundo" && textoconvertidotempo == "Microsegundo"){ convertidoTempo = conversorTempo }
    else if(textoconversortempo == "Microsegundo" && textoconvertidotempo == "Milisegundo") { convertidoTempo = conversorTempo / 1000 }
    else if(textoconversortempo == "Microsegundo" && textoconvertidotempo == "Segundo")     { convertidoTempo = conversorTempo / 1000000 }
    else if(textoconversortempo == "Microsegundo" && textoconvertidotempo == "Minuto")      { convertidoTempo = conversorTempo / 60000000 }
    else if(textoconversortempo == "Microsegundo" && textoconvertidotempo == "Hora")        { convertidoTempo = "erro" }
    else if(textoconversortempo == "Microsegundo" && textoconvertidotempo == "Dia")         { convertidoTempo = "erro" }
    else if(textoconversortempo == "Microsegundo" && textoconvertidotempo == "Semana")      { convertidoTempo = "erro" }
    else if(textoconversortempo == "Microsegundo" && textoconvertidotempo == "Mes")         { convertidoTempo = "erro" }
    else if(textoconversortempo == "Microsegundo" && textoconvertidotempo == "Ano")         { convertidoTempo = "erro" }
    
    /* ---------- Milisegundo ---------- */
         if(textoconversortempo == "Milisegundo" && textoconvertidotempo == "Nanosegundo") { convertidoTempo = conversorTempo * 1000000 } 
    else if(textoconversortempo == "Milisegundo" && textoconvertidotempo == "Microsegundo"){ convertidoTempo = conversorTempo * 1000 }
    else if(textoconversortempo == "Milisegundo" && textoconvertidotempo == "Milisegundo") { convertidoTempo = conversorTempo }
    else if(textoconversortempo == "Milisegundo" && textoconvertidotempo == "Segundo")     { convertidoTempo = conversorTempo / 1000 }
    else if(textoconversortempo == "Milisegundo" && textoconvertidotempo == "Minuto")      { convertidoTempo = conversorTempo / 60000 }
    else if(textoconversortempo == "Milisegundo" && textoconvertidotempo == "Hora")        { convertidoTempo = conversorTempo / 3600000 }
    else if(textoconversortempo == "Milisegundo" && textoconvertidotempo == "Dia")         { convertidoTempo = "erro" }
    else if(textoconversortempo == "Milisegundo" && textoconvertidotempo == "Semana")      { convertidoTempo = "erro" }
    else if(textoconversortempo == "Milisegundo" && textoconvertidotempo == "Mes")         { convertidoTempo = "erro" }
    else if(textoconversortempo == "Milisegundo" && textoconvertidotempo == "Ano")         { convertidoTempo = "erro" }
    
    /* ---------- Segundo ---------- */
         if(textoconversortempo == "Segundo" && textoconvertidotempo == "Nanosegundo") { convertidoTempo = conversorTempo * 1000000000 } 
    else if(textoconversortempo == "Segundo" && textoconvertidotempo == "Microsegundo"){ convertidoTempo = conversorTempo * 1000000 }
    else if(textoconversortempo == "Segundo" && textoconvertidotempo == "Milisegundo") { convertidoTempo = conversorTempo * 1000 }
    else if(textoconversortempo == "Segundo" && textoconvertidotempo == "Segundo")     { convertidoTempo = conversorTempo }
    else if(textoconversortempo == "Segundo" && textoconvertidotempo == "Minuto")      { convertidoTempo = conversorTempo / 60 }
    else if(textoconversortempo == "Segundo" && textoconvertidotempo == "Hora")        { convertidoTempo = conversorTempo / 3600 }
    else if(textoconversortempo == "Segundo" && textoconvertidotempo == "Dia")         { convertidoTempo = conversorTempo / 86400 }
    else if(textoconversortempo == "Segundo" && textoconvertidotempo == "Semana")      { convertidoTempo = conversorTempo / 604800  }
    else if(textoconversortempo == "Segundo" && textoconvertidotempo == "Mes")         { convertidoTempo = "erro" }
    else if(textoconversortempo == "Segundo" && textoconvertidotempo == "Ano")         { convertidoTempo = "erro" }
    
    /* ---------- Minuto ---------- */
         if(textoconversortempo == "Minuto" && textoconvertidotempo == "Nanosegundo") { convertidoTempo = conversorTempo * 60000000000 } 
    else if(textoconversortempo == "Minuto" && textoconvertidotempo == "Microsegundo"){ convertidoTempo = conversorTempo * 60000000 }
    else if(textoconversortempo == "Minuto" && textoconvertidotempo == "Milisegundo") { convertidoTempo = conversorTempo * 60000 }
    else if(textoconversortempo == "Minuto" && textoconvertidotempo == "Segundo")     { convertidoTempo = conversorTempo * 60 }
    else if(textoconversortempo == "Minuto" && textoconvertidotempo == "Minuto")      { convertidoTempo = conversorTempo }
    else if(textoconversortempo == "Minuto" && textoconvertidotempo == "Hora")        { convertidoTempo = conversorTempo / 60}
    else if(textoconversortempo == "Minuto" && textoconvertidotempo == "Dia")         { convertidoTempo = conversorTempo / 1440 }
    else if(textoconversortempo == "Minuto" && textoconvertidotempo == "Semana")      { convertidoTempo = conversorTempo / 10080 }
    else if(textoconversortempo == "Minuto" && textoconvertidotempo == "Mes")         { convertidoTempo = conversorTempo / 43800 }
    else if(textoconversortempo == "Minuto" && textoconvertidotempo == "Ano")         { convertidoTempo = conversorTempo / 525600 }
    
    /* ---------- Hora ---------- */
         if(textoconversortempo == "Hora" && textoconvertidotempo == "Nanosegundo") { convertidoTempo = "erro" } 
    else if(textoconversortempo == "Hora" && textoconvertidotempo == "Microsegundo"){ convertidoTempo = conversorTempo * 3600000000 }
    else if(textoconversortempo == "Hora" && textoconvertidotempo == "Milisegundo") { convertidoTempo = conversorTempo * 3600000 }
    else if(textoconversortempo == "Hora" && textoconvertidotempo == "Segundo")     { convertidoTempo = conversorTempo * 3600 }
    else if(textoconversortempo == "Hora" && textoconvertidotempo == "Minuto")      { convertidoTempo = conversorTempo * 60 }
    else if(textoconversortempo == "Hora" && textoconvertidotempo == "Hora")        { convertidoTempo = conversorTempo }
    else if(textoconversortempo == "Hora" && textoconvertidotempo == "Dia")         { convertidoTempo = conversorTempo / 24 }
    else if(textoconversortempo == "Hora" && textoconvertidotempo == "Semana")      { convertidoTempo = conversorTempo / 168 }
    else if(textoconversortempo == "Hora" && textoconvertidotempo == "Mes")         { convertidoTempo = conversorTempo / 730 }
    else if(textoconversortempo == "Hora" && textoconvertidotempo == "Ano")         { convertidoTempo = conversorTempo / 8760 }
    
    /* ---------- Dia ---------- */
         if(textoconversortempo == "Dia" && textoconvertidotempo == "Nanosegundo") { convertidoTempo = "erro" } 
    else if(textoconversortempo == "Dia" && textoconvertidotempo == "Microsegundo"){ convertidoTempo = "erro" }
    else if(textoconversortempo == "Dia" && textoconvertidotempo == "Milisegundo") { convertidoTempo = conversorTempo * 86400000 }
    else if(textoconversortempo == "Dia" && textoconvertidotempo == "Segundo")     { convertidoTempo = conversorTempo * 86400 }
    else if(textoconversortempo == "Dia" && textoconvertidotempo == "Minuto")      { convertidoTempo = conversorTempo * 1440}
    else if(textoconversortempo == "Dia" && textoconvertidotempo == "Hora")        { convertidoTempo = conversorTempo * 24 }
    else if(textoconversortempo == "Dia" && textoconvertidotempo == "Dia")         { convertidoTempo = conversorTempo }
    else if(textoconversortempo == "Dia" && textoconvertidotempo == "Semana")      { convertidoTempo = conversorTempo / 7 }
    else if(textoconversortempo == "Dia" && textoconvertidotempo == "Mes")         { convertidoTempo = conversorTempo / 30 }
    else if(textoconversortempo == "Dia" && textoconvertidotempo == "Ano")         { convertidoTempo = conversorTempo / 365 }
    
    /* ---------- Semana ---------- */
         if(textoconversortempo == "Semana" && textoconvertidotempo == "Nanosegundo") { convertidoTempo = "erro" } 
    else if(textoconversortempo == "Semana" && textoconvertidotempo == "Microsegundo"){ convertidoTempo = "erro" }
    else if(textoconversortempo == "Semana" && textoconvertidotempo == "Milisegundo") { convertidoTempo = "erro" }
    else if(textoconversortempo == "Semana" && textoconvertidotempo == "Segundo")     { convertidoTempo = conversorTempo * 604800 }
    else if(textoconversortempo == "Semana" && textoconvertidotempo == "Minuto")      { convertidoTempo = conversorTempo * 10080 }
    else if(textoconversortempo == "Semana" && textoconvertidotempo == "Hora")        { convertidoTempo = conversorTempo * 168 }
    else if(textoconversortempo == "Semana" && textoconvertidotempo == "Dia")         { convertidoTempo = conversorTempo * 7 }
    else if(textoconversortempo == "Semana" && textoconvertidotempo == "Semana")      { convertidoTempo = conversorTempo }
    else if(textoconversortempo == "Semana" && textoconvertidotempo == "Mes")         { convertidoTempo = conversorTempo / 4.345 } 
    else if(textoconversortempo == "Semana" && textoconvertidotempo == "Ano")         { convertidoTempo = conversorTempo / 52 }
    
    /* ---------- Mês ---------- */
         if(textoconversortempo == "Mes" && textoconvertidotempo == "Nanosegundo") { convertidoTempo = "erro" } 
    else if(textoconversortempo == "Mes" && textoconvertidotempo == "Microsegundo"){ convertidoTempo = "erro" }
    else if(textoconversortempo == "Mes" && textoconvertidotempo == "Milisegundo") { convertidoTempo = "erro" }
    else if(textoconversortempo == "Mes" && textoconvertidotempo == "Segundo")     { convertidoTempo = "erro" }
    else if(textoconversortempo == "Mes" && textoconvertidotempo == "Minuto")      { convertidoTempo = conversorTempo * 43800 }
    else if(textoconversortempo == "Mes" && textoconvertidotempo == "Hora")        { convertidoTempo = conversorTempo * 730 }
    else if(textoconversortempo == "Mes" && textoconvertidotempo == "Dia")         { convertidoTempo = conversorTempo * 30 }
    else if(textoconversortempo == "Mes" && textoconvertidotempo == "Semana")      { convertidoTempo = conversorTempo * 4.345 }
    else if(textoconversortempo == "Mes" && textoconvertidotempo == "Mes")         { convertidoTempo = conversorTempo }
    else if(textoconversortempo == "Mes" && textoconvertidotempo == "Ano")         { convertidoTempo = conversorTempo / 12 }
    
    /* ---------- Ano ---------- */
         if(textoconversortempo == "Ano" && textoconvertidotempo == "Nanosegundo") { convertidoTempo = "erro" } 
    else if(textoconversortempo == "Ano" && textoconvertidotempo == "Microsegundo"){ convertidoTempo = "erro" }
    else if(textoconversortempo == "Ano" && textoconvertidotempo == "Milisegundo") { convertidoTempo = "erro" }
    else if(textoconversortempo == "Ano" && textoconvertidotempo == "Segundo")     { convertidoTempo = conversorTempo * 86400000 }
    else if(textoconversortempo == "Ano" && textoconvertidotempo == "Minuto")      { convertidoTempo = conversorTempo * 525600 }
    else if(textoconversortempo == "Ano" && textoconvertidotempo == "Hora")        { convertidoTempo = conversorTempo * 8760 }
    else if(textoconversortempo == "Ano" && textoconvertidotempo == "Dia")         { convertidoTempo = conversorTempo * 365 }
    else if(textoconversortempo == "Ano" && textoconvertidotempo == "Semana")      { convertidoTempo = conversorTempo * 52}
    else if(textoconversortempo == "Ano" && textoconvertidotempo == "Mes")         { convertidoTempo = conversorTempo * 12 }
    else if(textoconversortempo == "Ano" && textoconvertidotempo == "Ano")         { convertidoTempo = conversorTempo }

    /* ========== Impressão ========== */
    
    console.log(conversorTempo + " " + textoconversortempo + " = " + convertidoTempo + " " + textoconvertidotempo) // Imprimir no console para debugar
    
    var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
        if (Math.floor(valor) !== valor)
            return valor.toString().split(".")[1].length || 0;
        return 0;
    }
    console.log("numero de casas decimais = " + contarDecimais(valorconvertidotempo))
    
    if(convertidoTempo == "erro"){ 
        document.getElementById("convertidoTempo").innerHTML = convertidoTempo
    }
    else{
        var valorconvertidotempo = parseFloat(convertidoTempo)

        if(contarDecimais(valorconvertidotempo) == 9){
            document.getElementById("convertidoTempo").innerHTML = valorconvertidotempo.toFixed(9).replace(/\.?0+$/, '')
        }
        else if(contarDecimais(valorconvertidotempo) == 8) { 
            document.getElementById("convertidoTempo").innerHTML = valorconvertidotempo.toFixed(8).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidotempo) == 7) { 
            document.getElementById("convertidoTempo").innerHTML = valorconvertidotempo.toFixed(7).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidotempo) == 6) { 
            document.getElementById("convertidoTempo").innerHTML = valorconvertidotempo.toFixed(6).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidotempo) == 5) { 
            document.getElementById("convertidoTempo").innerHTML = valorconvertidotempo.toFixed(5).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidotempo) == 4) { 
            document.getElementById("convertidoTempo").innerHTML = valorconvertidotempo.toFixed(4).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidotempo) == 3) { 
            document.getElementById("convertidoTempo").innerHTML = valorconvertidotempo.toFixed(3).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidotempo) == 2) { 
            document.getElementById("convertidoTempo").innerHTML = valorconvertidotempo.toFixed(2).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidotempo) == 1) { 
            document.getElementById("convertidoTempo").innerHTML = valorconvertidotempo.toFixed(1).replace(/\.?0+$/, '') 
        } 
        else if(conversorTempo == ""){
            document.getElementById("convertidoTempo").innerHTML = ""
        }
        else{
            document.getElementById("convertidoTempo").innerHTML = valorconvertidotempo
        }
    }
}

/* ============ Conversão Velocidade ============ */

function converterVelocidade() {

    /* ========== Associação HTML -> JS ========== */

    var conversorVelocidade = document.getElementById("conversorVelocidade").value
    
    var e1 = document.getElementById("selecaoconversorvelocidade")
    var textoconversorvelocidade = e1.options[e1.selectedIndex].text
    
    var e2 = document.getElementById("selecaoconvertidovelocidade")
    var textoconvertidovelocidade = e2.options[e2.selectedIndex].text
    
    /* ========== Conversão ========== */

    /* ---------- mi/h ---------- */
         if(textoconversorvelocidade == "Milha por hora" && textoconvertidovelocidade == "Milha por hora")     { convertidoVelocidade = conversorVelocidade } 
    else if(textoconversorvelocidade == "Milha por hora" && textoconvertidovelocidade == "Pés por segundo")    { convertidoVelocidade = conversorVelocidade * 1.467 }
    else if(textoconversorvelocidade == "Milha por hora" && textoconvertidovelocidade == "Metro por segundo")  { convertidoVelocidade = conversorVelocidade / 2.237 }
    else if(textoconversorvelocidade == "Milha por hora" && textoconvertidovelocidade == "Quilômetro por hora"){ convertidoVelocidade = conversorVelocidade * 1.609 }
    else if(textoconversorvelocidade == "Milha por hora" && textoconvertidovelocidade == "No")                 { convertidoVelocidade = conversorVelocidade / 1.151 }
    
    /* ---------- p/s ---------- */
         if(textoconversorvelocidade == "Pés por segundo" && textoconvertidovelocidade == "Milha por hora")     { convertidoVelocidade = conversorVelocidade / 1.467 } 
    else if(textoconversorvelocidade == "Pés por segundo" && textoconvertidovelocidade == "Pés por segundo")    { convertidoVelocidade = conversorVelocidade }
    else if(textoconversorvelocidade == "Pés por segundo" && textoconvertidovelocidade == "Metro por segundo")  { convertidoVelocidade = conversorVelocidade / 3.281 }
    else if(textoconversorvelocidade == "Pés por segundo" && textoconvertidovelocidade == "Quilômetro por hora"){ convertidoVelocidade = conversorVelocidade * 1.097 }
    else if(textoconversorvelocidade == "Pés por segundo" && textoconvertidovelocidade == "No")                 { convertidoVelocidade = conversorVelocidade / 1.688 }
    
    /* ---------- m/s ---------- */
         if(textoconversorvelocidade == "Metro por segundo" && textoconvertidovelocidade == "Milha por hora")     { convertidoVelocidade = conversorVelocidade * 2.237 } 
    else if(textoconversorvelocidade == "Metro por segundo" && textoconvertidovelocidade == "Pés por segundo")    { convertidoVelocidade = conversorVelocidade * 3.281 }
    else if(textoconversorvelocidade == "Metro por segundo" && textoconvertidovelocidade == "Metro por segundo")  { convertidoVelocidade = conversorVelocidade }
    else if(textoconversorvelocidade == "Metro por segundo" && textoconvertidovelocidade == "Quilômetro por hora"){ convertidoVelocidade = conversorVelocidade * 3.6 }
    else if(textoconversorvelocidade == "Metro por segundo" && textoconvertidovelocidade == "No")                 { convertidoVelocidade = conversorVelocidade * 1.944 }
    
    /* ---------- km/h ---------- */
         if(textoconversorvelocidade == "Quilômetro por hora" && textoconvertidovelocidade == "Milha por hora")     { convertidoVelocidade = conversorVelocidade / 1.609 } 
    else if(textoconversorvelocidade == "Quilômetro por hora" && textoconvertidovelocidade == "Pés por segundo")    { convertidoVelocidade = conversorVelocidade * 1.097 }
    else if(textoconversorvelocidade == "Quilômetro por hora" && textoconvertidovelocidade == "Metro por segundo")  { convertidoVelocidade = conversorVelocidade / 3.6 }
    else if(textoconversorvelocidade == "Quilômetro por hora" && textoconvertidovelocidade == "Quilômetro por hora"){ convertidoVelocidade = conversorVelocidade }
    else if(textoconversorvelocidade == "Quilômetro por hora" && textoconvertidovelocidade == "No")                 { convertidoVelocidade = conversorVelocidade / 1.852 }
    
    /* ---------- nó ---------- */
         if(textoconversorvelocidade == "No" && textoconvertidovelocidade == "Milha por hora")     { convertidoVelocidade = conversorVelocidade * 1.151 } 
    else if(textoconversorvelocidade == "No" && textoconvertidovelocidade == "Pés por segundo")    { convertidoVelocidade = conversorVelocidade * 1.688 }
    else if(textoconversorvelocidade == "No" && textoconvertidovelocidade == "Metro por segundo")  { convertidoVelocidade = conversorVelocidade / 1.944 }
    else if(textoconversorvelocidade == "No" && textoconvertidovelocidade == "Quilômetro por hora"){ convertidoVelocidade = conversorVelocidade * 1.852}
    else if(textoconversorvelocidade == "No" && textoconvertidovelocidade == "No")                 { convertidoVelocidade = conversorVelocidade }

    /* ========== Impressão ========== */
    
    console.log(conversorVelocidade + " " + textoconversorvelocidade + " = " + convertidoVelocidade + " " + textoconvertidovelocidade) // Imprimir no console para debugar

    var valorconvertidovelocidade = parseFloat(convertidoVelocidade)

    var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
        if (Math.floor(valor) !== valor)
            return valor.toString().split(".")[1].length || 0;
        return 0;
    }
    console.log("numero de casas decimais = " + contarDecimais(valorconvertidovelocidade))
    
    if(typeof(valorconvertidovelocidade) == "string"){ 
        document.getElementById("convertidoVelocidade").innerHTML = convertidoVelocidade
    }
    else{
        if(contarDecimais(valorconvertidovelocidade) >= 9 ){
            document.getElementById("convertidoVelocidade").innerHTML = valorconvertidovelocidade.toFixed(9).replace(/\.?0+$/, '')
        }
        else if(contarDecimais(valorconvertidovelocidade) == 8) { 
            document.getElementById("convertidoVelocidade").innerHTML = valorconvertidovelocidade.toFixed(8).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovelocidade) == 7) { 
            document.getElementById("convertidoVelocidade").innerHTML = valorconvertidovelocidade.toFixed(7).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovelocidade) == 6) { 
            document.getElementById("convertidoVelocidade").innerHTML = valorconvertidovelocidade.toFixed(6).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovelocidade) == 5) { 
            document.getElementById("convertidoVelocidade").innerHTML = valorconvertidovelocidade.toFixed(5).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovelocidade) == 4) { 
            document.getElementById("convertidoVelocidade").innerHTML = valorconvertidovelocidade.toFixed(4).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovelocidade) == 3) { 
            document.getElementById("convertidoVelocidade").innerHTML = valorconvertidovelocidade.toFixed(3).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovelocidade) == 2) { 
            document.getElementById("convertidoVelocidade").innerHTML = valorconvertidovelocidade.toFixed(2).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovelocidade) == 1) { 
            document.getElementById("convertidoVelocidade").innerHTML = valorconvertidovelocidade.toFixed(1).replace(/\.?0+$/, '') 
        } 
        else if(conversorVelocidade == ""){
            document.getElementById("convertidoVelocidade").innerHTML = ""
        }
        else{
            document.getElementById("convertidoVelocidade").innerHTML = valorconvertidovelocidade
        }
    }
}

/* ============ Conversão Massa ============ */

function converterMassa() {

    /* ========== Associação HTML -> JS ========== */

    var conversorMassa = document.getElementById("conversorMassa").value
    
    var e1 = document.getElementById("selecaoconversormassa")
    var textoconversormassa = e1.options[e1.selectedIndex].text
    
    var e2 = document.getElementById("selecaoconvertidomassa")
    var textoconvertidomassa = e2.options[e2.selectedIndex].text
    
    /* ========== Conversão ========== */

    /* ---------- T ---------- */
        if(textoconversormassa == "Tonelada" && textoconvertidomassa == "Tonelada")  { convertidoMassa = conversorMassa } 
    else if(textoconversormassa == "Tonelada" && textoconvertidomassa == "Quilograma"){ convertidoMassa = conversorMassa * 1000 }
    else if(textoconversormassa == "Tonelada" && textoconvertidomassa == "Grama")     { convertidoMassa = conversorMassa * 1000000 }
    else if(textoconversormassa == "Tonelada" && textoconvertidomassa == "Miligrama") { convertidoMassa = conversorMassa * 1000000000 }
    else if(textoconversormassa == "Tonelada" && textoconvertidomassa == "Micrograma"){ convertidoMassa = conversorMassa * 1000000000000 }
    else if(textoconversormassa == "Tonelada" && textoconvertidomassa == "Stone")     { convertidoMassa = conversorMassa * 157.5}
    else if(textoconversormassa == "Tonelada" && textoconvertidomassa == "Libra")     { convertidoMassa = conversorMassa * 2204.62 }
    else if(textoconversormassa == "Tonelada" && textoconvertidomassa == "Onça")      { convertidoMassa = conversorMassa * 35270 }
    
    /* ---------- kg ---------- */
        if(textoconversormassa == "Quilograma" && textoconvertidomassa == "Tonelada")  { convertidoMassa = conversorMassa / 1000 } 
    else if(textoconversormassa == "Quilograma" && textoconvertidomassa == "Quilograma"){ convertidoMassa = conversorMassa }
    else if(textoconversormassa == "Quilograma" && textoconvertidomassa == "Grama")     { convertidoMassa = conversorMassa * 1000 }
    else if(textoconversormassa == "Quilograma" && textoconvertidomassa == "Miligrama") { convertidoMassa = conversorMassa * 1000000}
    else if(textoconversormassa == "Quilograma" && textoconvertidomassa == "Micrograma"){ convertidoMassa = conversorMassa * 1000000000 }
    else if(textoconversormassa == "Quilograma" && textoconvertidomassa == "Stone")     { convertidoMassa = conversorMassa / 6.35 }
    else if(textoconversormassa == "Quilograma" && textoconvertidomassa == "Libra")     { convertidoMassa = conversorMassa * 2.205}
    else if(textoconversormassa == "Quilograma" && textoconvertidomassa == "Onça")      { convertidoMassa = conversorMassa * 35.274}
    
    /* ---------- g ---------- */
        if(textoconversormassa == "Grama" && textoconvertidomassa == "Tonelada")  { convertidoMassa = conversorMassa / 1000000 } 
    else if(textoconversormassa == "Grama" && textoconvertidomassa == "Quilograma"){ convertidoMassa = conversorMassa / 1000 }
    else if(textoconversormassa == "Grama" && textoconvertidomassa == "Grama")     { convertidoMassa = conversorMassa }
    else if(textoconversormassa == "Grama" && textoconvertidomassa == "Miligrama") { convertidoMassa = conversorMassa * 1000 }
    else if(textoconversormassa == "Grama" && textoconvertidomassa == "Micrograma"){ convertidoMassa = conversorMassa * 1000000 }
    else if(textoconversormassa == "Grama" && textoconvertidomassa == "Stone")     { convertidoMassa = conversorMassa / 6350 }
    else if(textoconversormassa == "Grama" && textoconvertidomassa == "Libra")     { convertidoMassa = conversorMassa / 453.6 }
    else if(textoconversormassa == "Grama" && textoconvertidomassa == "Onça")      { convertidoMassa = conversorMassa / 28.35 }
    
    /* ---------- mg ---------- */
        if(textoconversormassa == "Miligrama" && textoconvertidomassa == "Tonelada")  { convertidoMassa = conversorMassa / 1000000000 } 
    else if(textoconversormassa == "Miligrama" && textoconvertidomassa == "Quilograma"){ convertidoMassa = conversorMassa / 1000000 }
    else if(textoconversormassa == "Miligrama" && textoconvertidomassa == "Grama")     { convertidoMassa = conversorMassa / 1000 }
    else if(textoconversormassa == "Miligrama" && textoconvertidomassa == "Miligrama") { convertidoMassa = conversorMassa }
    else if(textoconversormassa == "Miligrama" && textoconvertidomassa == "Micrograma"){ convertidoMassa = conversorMassa * 1000}
    else if(textoconversormassa == "Miligrama" && textoconvertidomassa == "Stone")     { convertidoMassa = conversorMassa / 6.35}
    else if(textoconversormassa == "Miligrama" && textoconvertidomassa == "Libra")     { convertidoMassa = conversorMassa / 453600 }
    else if(textoconversormassa == "Miligrama" && textoconvertidomassa == "Onça")      { convertidoMassa = conversorMassa / 28350 }
    
    /* ---------- µg ---------- */
        if(textoconversormassa == "Micrograma" && textoconvertidomassa == "Tonelada")  { convertidoMassa = conversorMassa / 1000000000000 } 
    else if(textoconversormassa == "Micrograma" && textoconvertidomassa == "Quilograma"){ convertidoMassa = conversorMassa / 1000000000 }
    else if(textoconversormassa == "Micrograma" && textoconvertidomassa == "Grama")     { convertidoMassa = conversorMassa / 1000000 }
    else if(textoconversormassa == "Micrograma" && textoconvertidomassa == "Miligrama") { convertidoMassa = conversorMassa / 1000}
    else if(textoconversormassa == "Micrograma" && textoconvertidomassa == "Micrograma"){ convertidoMassa = conversorMassa }
    else if(textoconversormassa == "Micrograma" && textoconvertidomassa == "Stone")     { convertidoMassa = conversorMassa / 6.35 }
    else if(textoconversormassa == "Micrograma" && textoconvertidomassa == "Libra")     { convertidoMassa = conversorMassa / 4.536 }
    else if(textoconversormassa == "Micrograma" && textoconvertidomassa == "Onça")      { convertidoMassa = conversorMassa / 2.835 }
    
    /* ---------- stone ---------- */
        if(textoconversormassa == "Stone" && textoconvertidomassa == "Tonelada")  { convertidoMassa = conversorMassa / 157.5 } 
    else if(textoconversormassa == "Stone" && textoconvertidomassa == "Quilograma"){ convertidoMassa = conversorMassa * 6.3529 }
    else if(textoconversormassa == "Stone" && textoconvertidomassa == "Grama")     { convertidoMassa = conversorMassa * 6350.29 }
    else if(textoconversormassa == "Stone" && textoconvertidomassa == "Miligrama") { convertidoMassa = conversorMassa * 6.35 }
    else if(textoconversormassa == "Stone" && textoconvertidomassa == "Micrograma"){ convertidoMassa = conversorMassa * 6.35 }
    else if(textoconversormassa == "Stone" && textoconvertidomassa == "Stone")     { convertidoMassa = conversorMassa }
    else if(textoconversormassa == "Stone" && textoconvertidomassa == "Libra")     { convertidoMassa = conversorMassa * 14 }
    else if(textoconversormassa == "Stone" && textoconvertidomassa == "Onça")      { convertidoMassa = conversorMassa * 224 }
    
    /* ---------- libra ---------- */
        if(textoconversormassa == "Libra" && textoconvertidomassa == "Tonelada")  { convertidoMassa = conversorMassa / 2205 } 
    else if(textoconversormassa == "Libra" && textoconvertidomassa == "Quilograma"){ convertidoMassa = conversorMassa / 2.205 }
    else if(textoconversormassa == "Libra" && textoconvertidomassa == "Grama")     { convertidoMassa = conversorMassa * 453.6 }
    else if(textoconversormassa == "Libra" && textoconvertidomassa == "Miligrama") { convertidoMassa = conversorMassa * 453600 }
    else if(textoconversormassa == "Libra" && textoconvertidomassa == "Micrograma"){ convertidoMassa = conversorMassa * 4.536 }
    else if(textoconversormassa == "Libra" && textoconvertidomassa == "Stone")     { convertidoMassa = conversorMassa / 14 }
    else if(textoconversormassa == "Libra" && textoconvertidomassa == "Libra")     { convertidoMassa = conversorMassa }
    else if(textoconversormassa == "Libra" && textoconvertidomassa == "Onça")      { convertidoMassa = conversorMassa * 16}
    
    /* ---------- onça ---------- */
        if(textoconversormassa == "Onça" && textoconvertidomassa == "Tonelada")  { convertidoMassa = conversorMassa / 35270} 
    else if(textoconversormassa == "Onça" && textoconvertidomassa == "Quilograma"){ convertidoMassa = conversorMassa / 35.274 }
    else if(textoconversormassa == "Onça" && textoconvertidomassa == "Grama")     { convertidoMassa = conversorMassa * 28.3495 }
    else if(textoconversormassa == "Onça" && textoconvertidomassa == "Miligrama") { convertidoMassa = conversorMassa * 28350}
    else if(textoconversormassa == "Onça" && textoconvertidomassa == "Micrograma"){ convertidoMassa = conversorMassa * 2.835 }
    else if(textoconversormassa == "Onça" && textoconvertidomassa == "Stone")     { convertidoMassa = conversorMassa / 224 }
    else if(textoconversormassa == "Onça" && textoconvertidomassa == "Libra")     { convertidoMassa = conversorMassa / 16 }
    else if(textoconversormassa == "Onça" && textoconvertidomassa == "Onça")      { convertidoMassa = conversorMassa }
    
    /* ========== Impressão ========== */
    
    console.log(conversorMassa + " " + textoconversormassa + " = " + convertidoMassa + " " + textoconvertidomassa) // Imprimir no console para debugar

    var valorconvertidomassa = parseFloat(convertidoMassa)

    var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
        if (Math.floor(valor) !== valor)
            return valor.toString().split(".")[1].length || 0;
        return 0;
    }
    console.log("numero de casas decimais = " + contarDecimais(valorconvertidomassa))
    
    if(typeof(valorconvertidomassa) == "string"){ 
        document.getElementById("convertidoMassa").innerHTML = convertidoMassa
    }
    else{
        if(contarDecimais(valorconvertidomassa) >= 9 ){
            document.getElementById("convertidoMassa").innerHTML = valorconvertidomassa.toFixed(9).replace(/\.?0+$/, '')
        }
        else if(contarDecimais(valorconvertidomassa) == 8) { 
            document.getElementById("convertidoMassa").innerHTML = valorconvertidomassa.toFixed(8).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidomassa) == 7) { 
            document.getElementById("convertidoMassa").innerHTML = valorconvertidomassa.toFixed(7).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidomassa) == 6) { 
            document.getElementById("convertidoMassa").innerHTML = valorconvertidomassa.toFixed(6).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidomassa) == 5) { 
            document.getElementById("convertidoMassa").innerHTML = valorconvertidomassa.toFixed(5).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidomassa) == 4) { 
            document.getElementById("convertidoMassa").innerHTML = valorconvertidomassa.toFixed(4).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidomassa) == 3) { 
            document.getElementById("convertidoMassa").innerHTML = valorconvertidomassa.toFixed(3).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidomassa) == 2) { 
            document.getElementById("convertidoMassa").innerHTML = valorconvertidomassa.toFixed(2).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidomassa) == 1) { 
            document.getElementById("convertidoMassa").innerHTML = valorconvertidomassa.toFixed(1).replace(/\.?0+$/, '') 
        } 
        else if(conversorMassa == ""){
            document.getElementById("convertidoMassa").innerHTML = ""
        }
        else{
            document.getElementById("convertidoMassa").innerHTML = valorconvertidomassa
        }
    }
}

/* ============ Conversão Comprimento ============ */

function converterComprimento() {

    /* ========== Associação HTML -> JS ========== */

    var conversorComprimento = document.getElementById("conversorComprimento").value
    
    var e1 = document.getElementById("selecaoconversorcomprimento")
    var textoconversorcomprimento = e1.options[e1.selectedIndex].text
    
    var e2 = document.getElementById("selecaoconvertidocomprimento")
    var textoconvertidocomprimento = e2.options[e2.selectedIndex].text
    
    /* ========== Conversão ========== */

    /* ---------- Km ---------- */
         if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento } 
    else if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento * 1000 }
    else if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento * 100000 }
    else if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = conversorComprimento * 100000000 }
    else if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = conversorComprimento * 100000000000 }
    else if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = conversorComprimento * 100000000000000 }
    else if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = conversorComprimento / 1.609 }
    else if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = conversorComprimento * 1093.61 }
    else if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = conversorComprimento * 3280.84 }
    else if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = conversorComprimento * 39370.1 }
    else if(textoconversorcomprimento == "Quilômetro" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = conversorComprimento / 1.852 }

    /* ---------- m ---------- */
         if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento / 1000 } 
    else if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento }
    else if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento * 100 }
    else if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = conversorComprimento * 1000 }
    else if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = conversorComprimento * 1000000 }
    else if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = conversorComprimento * 1000000000 }
    else if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = conversorComprimento / 1609 }
    else if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = conversorComprimento * 1.09361 }
    else if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = conversorComprimento * 3.28084 }
    else if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = conversorComprimento * 39.3701 }
    else if(textoconversorcomprimento == "Metro" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = conversorComprimento / 1852 }

    /* ---------- cm ---------- */
         if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento / 100000 } 
    else if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento / 100 }
    else if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento }
    else if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = conversorComprimento * 10 }
    else if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = conversorComprimento * 10000 }
    else if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = conversorComprimento * 10000000 }
    else if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = conversorComprimento / 160900 }
    else if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = conversorComprimento / 91.44 }
    else if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = conversorComprimento / 30.48 }
    else if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = conversorComprimento / 2.54 }
    else if(textoconversorcomprimento == "Centímetro" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = conversorComprimento / 185200}

    /* ---------- mm ---------- */
         if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento / 1000000 } 
    else if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento / 1000 }
    else if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento / 10 }
    else if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = conversorComprimento }
    else if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = conversorComprimento * 1000 }
    else if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = conversorComprimento * 1000000 }
    else if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = conversorComprimento / 914.4 }
    else if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = conversorComprimento / 304.8 }
    else if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = conversorComprimento / 25.4 }
    else if(textoconversorcomprimento == "Milímetro" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = "erro" }

    /* ---------- µm ---------- */
         if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento / 1000000000 } 
    else if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento / 1000000 }
    else if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento / 100000 }
    else if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = conversorComprimento / 1000 }
    else if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = conversorComprimento }
    else if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = conversorComprimento * 1000 }
    else if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = conversorComprimento / 914400 }
    else if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = conversorComprimento / 304800 }
    else if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = conversorComprimento / 25400 }
    else if(textoconversorcomprimento == "Micrômetro" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = "erro" }

    /* ---------- nm ---------- */
         if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento / 1000000000000 } 
    else if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento / 1000000000 }
    else if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento / 10000000 }
    else if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = conversorComprimento / 1000000 }
    else if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = conversorComprimento / 1000 }
    else if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = conversorComprimento }
    else if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Nanômetro" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = "erro" }

    /* ---------- mi ---------- */
         if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento * 1.609 } 
    else if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento * 1609.34 }
    else if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento * 160934 }
    else if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = conversorComprimento }
    else if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = conversorComprimento * 1760 }
    else if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = conversorComprimento * 5280 }
    else if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = conversorComprimento * 63360}
    else if(textoconversorcomprimento == "Milha" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = conversorComprimento / 1.151 }

    /* ---------- yd ---------- */
         if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento / 1094} 
    else if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento / 1.094 }
    else if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento * 91.44 }
    else if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = conversorComprimento * 914.4 }
    else if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = conversorComprimento * 914400}
    else if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = conversorComprimento }
    else if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = conversorComprimento * 3 }
    else if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = conversorComprimento * 36 }
    else if(textoconversorcomprimento == "Jarda" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = "erro" }

    /* ---------- ft ---------- */
         if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento / 3281 } 
    else if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento / 3.281 }
    else if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento * 30.48 }
    else if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = conversorComprimento * 304.8 }
    else if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = conversorComprimento * 304800 }
    else if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = conversorComprimento / 5280 }
    else if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = conversorComprimento / 3 }
    else if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = conversorComprimento }
    else if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = conversorComprimento * 12 }
    else if(textoconversorcomprimento == "Pé" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = conversorComprimento / 6076}

    /* ---------- pol ---------- */
         if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento / 39370} 
    else if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento / 39.37 }
    else if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento * 2.54 }
    else if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = conversorComprimento * 25.4 }
    else if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = conversorComprimento * 25400}
    else if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = conversorComprimento / 63360}
    else if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = conversorComprimento / 36 }
    else if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = conversorComprimento / 12 }
    else if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = conversorComprimento }
    else if(textoconversorcomprimento == "Polegada" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = conversorComprimento / 72910 }

    /* ---------- mima ---------- */
         if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Quilômetro")   { convertidoComprimento = conversorComprimento * 1.852 } 
    else if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Metro")        { convertidoComprimento = conversorComprimento * 1852}
    else if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Centímetro")   { convertidoComprimento = conversorComprimento * 185200}
    else if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Milímetro")    { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Micrômetro")   { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Nanômetro")    { convertidoComprimento = "erro" }
    else if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Milha")        { convertidoComprimento = conversorComprimento * 1.15078 }
    else if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Jarda")        { convertidoComprimento = conversorComprimento * 2025.37 }
    else if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Pé")           { convertidoComprimento = conversorComprimento * 6076.12 }
    else if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Polegada")     { convertidoComprimento = conversorComprimento * 72913.4 }
    else if(textoconversorcomprimento == "Milha náutica" && textoconvertidocomprimento == "Milha náutica"){ convertidoComprimento = conversorComprimento }
    
    /* ========== Impressão ========== */
    
    console.log(conversorComprimento + " " + textoconversorcomprimento + " = " + convertidoComprimento + " " + textoconvertidocomprimento) // Imprimir no console para debugar

    var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
        if (Math.floor(valor) !== valor)
            return valor.toString().split(".")[1].length || 0;
        return 0;
    }
    
    if(convertidoComprimento == "erro"){ 
        document.getElementById("convertidoComprimento").innerHTML = convertidoComprimento
    }
    else{
        var valorconvertidocomprimento = parseFloat(convertidoComprimento)

        if(contarDecimais(valorconvertidocomprimento) >= 9 ){
            document.getElementById("convertidoComprimento").innerHTML = valorconvertidocomprimento.toFixed(9).replace(/\.?0+$/, '')
        }
        else if(contarDecimais(valorconvertidocomprimento) == 8) { 
            document.getElementById("convertidoComprimento").innerHTML = valorconvertidocomprimento.toFixed(8).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidocomprimento) == 7) { 
            document.getElementById("convertidoComprimento").innerHTML = valorconvertidocomprimento.toFixed(7).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidocomprimento) == 6) { 
            document.getElementById("convertidoComprimento").innerHTML = valorconvertidocomprimento.toFixed(6).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidocomprimento) == 5) { 
            document.getElementById("convertidoComprimento").innerHTML = valorconvertidocomprimento.toFixed(5).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidocomprimento) == 4) { 
            document.getElementById("convertidoComprimento").innerHTML = valorconvertidocomprimento.toFixed(4).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidocomprimento) == 3) { 
            document.getElementById("convertidoComprimento").innerHTML = valorconvertidocomprimento.toFixed(3).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidocomprimento) == 2) { 
            document.getElementById("convertidoComprimento").innerHTML = valorconvertidocomprimento.toFixed(2).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidocomprimento) == 1) { 
            document.getElementById("convertidoComprimento").innerHTML = valorconvertidocomprimento.toFixed(1).replace(/\.?0+$/, '') 
        } 
        else if(conversorComprimento == ""){
            document.getElementById("convertidoComprimento").innerHTML = ""
        }
        else{
            document.getElementById("convertidoComprimento").innerHTML = valorconvertidocomprimento
        }
    }
}

/* ============ Conversão Dados ============ */

function converterDados() {

    /* ========== Associação HTML -> JS ========== */

    var conversorDados = document.getElementById("conversorDados").value
    
    var e1 = document.getElementById("selecaoconversordados")
    var textoconversordados = e1.options[e1.selectedIndex].text
    
    var e2 = document.getElementById("selecaoconvertidodados")
    var textoconvertidodados = e2.options[e2.selectedIndex].text
    
    /* ========== Conversão ========== */

    /* ---------- Bit ---------- */
         if(textoconversordados == "Bit" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados } 
    else if(textoconversordados == "Bit" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados / 4 }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados / 1024 / 1024 }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados / 8 }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados / 8 / 1024 }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024  }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024  }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 / 1024  }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 / 1024 / 1024  }
    else if(textoconversordados == "Bit" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024  }

    /* ---------- Nibble ---------- */
         if(textoconversordados == "Nibble" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 4 } 
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 4 / 1024 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 4 / 1024 / 1024 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 4 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados * 4 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados * 4 / 1024 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados * 4 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados / 2 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados / 2048 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Nibble" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 }

    /* ---------- Kilobit ---------- */
         if(textoconversordados == "Kilobit" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 1024 } 
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 1024 / 4 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados / 1024 / 1024 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados / 8 * 1024 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados / 8 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados / 8 / 1024 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Kilobit" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 / 1024 / 1024 }

    /* ---------- Megabit ---------- */
         if(textoconversordados == "Megabit" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 1024 * 1024 } 
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 1024 * 1024 / 4 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados / 1024 / 1024 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados / 8 * 1024 * 1024 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados / 8 * 1024 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados / 8 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 8 / 1024 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Megabit" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 / 1024 }

    /* ---------- Gigabit ---------- */
         if(textoconversordados == "Gigabit" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 1024 * 1024 * 1024 } 
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 1024 * 1024 * 1024 / 4}
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 1024 * 1024 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados / 1024 / 1024 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados / 8 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados / 8 * 1024 * 1024 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados / 8 * 1024 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 8 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 8 / 1024 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 8 / 1024 / 1024 }
    else if(textoconversordados == "Gigabit" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 8 / 1024 / 1024 / 1024 }

    /* ---------- Terabit ---------- */
         if(textoconversordados == "Terabit" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 } 
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 / 4 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 1024 * 1024 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados / 1024 / 1024 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados / 8 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados / 8 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados / 8 * 1024 * 1024 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 8 * 1024 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 8 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 8 / 1024 }
    else if(textoconversordados == "Terabit" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 8 / 1024 / 1024 }

    /* ---------- Petabit ---------- */
         if(textoconversordados == "Petabit" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 * 1024 } 
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 * 1024 / 4}
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 1024 * 1024 }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados / 8 * 1024 * 1024 * 1024 * 1024 * 1024 } 
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados / 8 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados / 8 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 8 * 1024 * 1024 }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 8 * 1024 }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 8 }
    else if(textoconversordados == "Petabit" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 8 / 1024 }

    /* ---------- Exabit ---------- */
         if(textoconversordados == "Exabit" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 } 
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 / 4 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados * 1024 * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados / 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados / 8 * 1024 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados / 8 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 8 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 8 * 1024 * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 8 * 1024 }
    else if(textoconversordados == "Exabit" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 8 }

    /* ---------- Byte ---------- */
         if(textoconversordados == "Byte" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 8 } 
    else if(textoconversordados == "Byte" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 2 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 8 / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 8 / 1024 / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 8 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados * 8 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados * 8 / 1024 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados * 8 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados / 1024 / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Byte" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 }

    /* ---------- Kilobyte ---------- */
         if(textoconversordados == "Kilobyte" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 8 * 1024 } 
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 2 * 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 8 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 8 / 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 8 / 1024 / 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados * 8 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados * 8 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados * 8 / 1024 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 1024 / 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Kilobyte" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 / 1024 }

    /* ---------- Megabyte ---------- */
         if(textoconversordados == "Megabyte" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 8 * 1024 * 1024 } 
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 2 * 1024 * 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 8 * 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 8 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 8 / 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados * 8 / 1024 / 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados * 8 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados * 8 / 1024 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados * 1024 * 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 1024 / 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Megabyte" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 1024 / 1024 / 1024 / 1024 }

    /* ---------- Gigabyte ---------- */
         if(textoconversordados == "Gigabyte" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 8 * 1024 * 1024 * 1024 } 
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 2 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 8 * 1024 * 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 8 * 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 8 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados * 8 / 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados * 8 / 1024 / 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados * 8 / 1024 / 1024 / 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados * 1024 * 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 1024 / 1024 }
    else if(textoconversordados == "Gigabyte" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 1024 / 1024 / 1024 }

    /* ---------- Terabyte ---------- */
         if(textoconversordados == "Terabyte" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 8 * 1024 * 1024 * 1024 * 1024 } 
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 2 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 8 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 8 * 1024 * 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 8 * 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados * 8 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados * 8 / 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados * 8 / 1024 / 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados * 1024 * 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados / 1024 }
    else if(textoconversordados == "Terabyte" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 1024 / 1024 }

    /* ---------- Petabyte ---------- */
         if(textoconversordados == "Petabyte" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 8 * 1024 * 1024 * 1024 * 1024 * 1024 } 
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 2 * 1024 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 8 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 8 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 8 * 1024 * 1024 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados * 8 * 1024 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados * 8 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados / 100 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados * 1024 * 1024 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados }
    else if(textoconversordados == "Petabyte" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados / 1024 }

    /* ---------- Exabyte ---------- */
         if(textoconversordados == "Exabyte" && textoconvertidodados == "Bit")     { convertidoDados = conversorDados * 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 } 
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Nibble")  { convertidoDados = conversorDados * 2 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Kilobit") { convertidoDados = conversorDados * 8 * 1024 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Megabit") { convertidoDados = conversorDados * 8 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Gigabit") { convertidoDados = conversorDados * 8 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Terabit") { convertidoDados = conversorDados * 8 * 1024 * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Petabit") { convertidoDados = conversorDados * 8 * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Exabit")  { convertidoDados = conversorDados * 8 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Byte")    { convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 * 1024 * 1024}
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Kilobyte"){ convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Megabyte"){ convertidoDados = conversorDados * 1024 * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Gigabyte"){ convertidoDados = conversorDados * 1024 * 1024 * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Terabyte"){ convertidoDados = conversorDados * 1024 * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Petabyte"){ convertidoDados = conversorDados * 1024 }
    else if(textoconversordados == "Exabyte" && textoconvertidodados == "Exabyte") { convertidoDados = conversorDados }
    
    /* ========== Impressão ========== */
    
    console.log(conversorDados + " " + textoconversordados + " = " + convertidoDados + " " + textoconvertidodados) // Imprimir no console para debugar

    var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
        if (Math.floor(valor) !== valor)
            return valor.toString().split(".")[1].length || 0;
        return 0;
    }
    
    if(convertidoDados == "erro"){ 
        document.getElementById("convertidoDados").innerHTML = convertidoDados
    }
    else{
        var valorconvertidodados = parseFloat(convertidoDados)

        if(contarDecimais(valorconvertidodados) > 9){
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados.toFixed(15).replace(/\.?0+$/, '')
        }
        else if(contarDecimais(valorconvertidodados) == 9){
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados.toFixed(9).replace(/\.?0+$/, '')
        }
        else if(contarDecimais(valorconvertidodados) == 8) { 
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados.toFixed(8).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidodados) == 7) { 
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados.toFixed(7).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidodados) == 6) { 
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados.toFixed(6).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidodados) == 5) { 
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados.toFixed(5).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidodados) == 4) {
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados.toFixed(4).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidodados) == 3) { 
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados.toFixed(3).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidodados) == 2) { 
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados.toFixed(2).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidodados) == 1) { 
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados.toFixed(1).replace(/\.?0+$/, '') 
        } 
        else if(convertidoDados == ""){
            document.getElementById("convertidoDados").innerHTML = ""
        }
        else{
            document.getElementById("convertidoDados").innerHTML = valorconvertidodados
        }
    }
}

/* ============ Conversão Temperatura ============ */

function converterTemperatura() {

    /* ========== Associação HTML -> JS ========== */

    var conversorTemperatura = document.getElementById("conversorTemperatura").value
    var convertidoTemperatura
    
    var e1 = document.getElementById("selecaoconversortemperatura")
    var textoconversortemperatura = e1.options[e1.selectedIndex].text
    
    var e2 = document.getElementById("selecaoconvertidotemperatura")
    var textoconvertidotemperatura = e2.options[e2.selectedIndex].text
    
    /* ========== Conversão ========== */

    /* ---------- °C ---------- */
         if(textoconversortemperatura == "Graus Celcius" && textoconvertidotemperatura == "Graus Celcius")   { convertidoTemperatura = conversorTemperatura } 
    else if(textoconversortemperatura == "Graus Celcius" && textoconvertidotemperatura == "Graus Fahrenheit"){ convertidoTemperatura = (conversorTemperatura * 9/5) + 32 }
    else if(textoconversortemperatura == "Graus Celcius" && textoconvertidotemperatura == "Kelvin")          { convertidoTemperatura = parseFloat(conversorTemperatura) + 273.15 } 

    /* ---------- °F ---------- */
         if(textoconversortemperatura == "Graus Fahrenheit" && textoconvertidotemperatura == "Graus Celcius")   { convertidoTemperatura = (conversorTemperatura - 32) * 5/9 } 
    else if(textoconversortemperatura == "Graus Fahrenheit" && textoconvertidotemperatura == "Graus Fahrenheit"){ convertidoTemperatura = conversorTemperatura }
    else if(textoconversortemperatura == "Graus Fahrenheit" && textoconvertidotemperatura == "Kelvin")          { convertidoTemperatura = (conversorTemperatura - 32) * 5/9 + 273.15 }

    /* ---------- K ---------- */
         if(textoconversortemperatura == "Kelvin" && textoconvertidotemperatura == "Graus Celcius")   { convertidoTemperatura = parseFloat(conversorTemperatura) - 273.15 } 
    else if(textoconversortemperatura == "Kelvin" && textoconvertidotemperatura == "Graus Fahrenheit"){ convertidoTemperatura = (parseFloat(conversorTemperatura) - 273.15) * 9/5 + 32 }
    else if(textoconversortemperatura == "Kelvin" && textoconvertidotemperatura == "Kelvin")          { convertidoTemperatura = conversorTemperatura }

    /* ========== Impressão ========== */
    
    console.log(conversorTemperatura + " " + textoconversortemperatura + " = " + convertidoTemperatura + " " + textoconvertidotemperatura) // Imprimir no console para debugar

    var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
        if (Math.floor(valor) !== valor)
            return valor.toString().split(".")[1].length || 0;
        return 0;
    }
    
    if(convertidoTemperatura == "erro"){ 
        document.getElementById("convertidoTemperatura").innerHTML = convertidoTemperatura
    }
    else{
        var valorconvertidotemperatura = parseFloat(convertidoTemperatura)

        if(contarDecimais(valorconvertidotemperatura) >= 2) { 
            document.getElementById("convertidoTemperatura").innerHTML = valorconvertidotemperatura.toFixed(2).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidotemperatura) == 1) { 
            document.getElementById("convertidoTemperatura").innerHTML = valorconvertidotemperatura.toFixed(1).replace(/\.?0+$/, '') 
        } 
        else if(convertidoTemperatura == ""){
            document.getElementById("convertidoTemperatura").innerHTML = ""
        }
        else{
            document.getElementById("convertidoTemperatura").innerHTML = valorconvertidotemperatura
        }
    }
}

/* ============ Conversão Volume ============ */

function converterVolume() {

    /* ========== Associação HTML -> JS ========== */

    var conversorVolume = document.getElementById("conversorVolume").value
    var convertidoVolume
    
    var e1 = document.getElementById("selecaoconversorvolume")
    var textoconversorvolume = e1.options[e1.selectedIndex].text
    
    var e2 = document.getElementById("selecaoconvertidovolume")
    var textoconvertidovolume = e2.options[e2.selectedIndex].text
    
    /* ========== Conversão ========== */

    /* ---------- L ---------- */
         if(textoconversorvolume == "Litro" && textoconvertidovolume == "Litro")          { convertidoVolume = conversorVolume } 
    else if(textoconversorvolume == "Litro" && textoconvertidovolume == "Mililitro")      { convertidoVolume = conversorVolume * 1000 }
    else if(textoconversorvolume == "Litro" && textoconvertidovolume == "Metro cúbico")   { convertidoVolume = conversorVolume / 1000 }
    else if(textoconversorvolume == "Litro" && textoconvertidovolume == "Pé cúbico")      { convertidoVolume = conversorVolume / 28.317 }
    else if(textoconversorvolume == "Litro" && textoconvertidovolume == "Polegada cúbica"){ convertidoVolume = conversorVolume * 61.0237 }
    else if(textoconversorvolume == "Litro" && textoconvertidovolume == "Onça líquida")   { convertidoVolume = conversorVolume * 33.814 }
    else if(textoconversorvolume == "Litro" && textoconvertidovolume == "Galão")          { convertidoVolume = conversorVolume / 3.785 }
    else if(textoconversorvolume == "Litro" && textoconvertidovolume == "Copo")           { convertidoVolume = conversorVolume * 4.16667 }
    else if(textoconversorvolume == "Litro" && textoconvertidovolume == "Colher de sopa") { convertidoVolume = conversorVolume * 67.628 }
    else if(textoconversorvolume == "Litro" && textoconvertidovolume == "Colher de chá")  { convertidoVolume = conversorVolume * 202.884 }

    /* ---------- ml ---------- */
         if(textoconversorvolume == "Mililitro" && textoconvertidovolume == "Litro")          { convertidoVolume = conversorVolume / 1000 } 
    else if(textoconversorvolume == "Mililitro" && textoconvertidovolume == "Mililitro")      { convertidoVolume = conversorVolume }
    else if(textoconversorvolume == "Mililitro" && textoconvertidovolume == "Metro cúbico")   { convertidoVolume = conversorVolume / 1000000 }
    else if(textoconversorvolume == "Mililitro" && textoconvertidovolume == "Pé cúbico")      { convertidoVolume = conversorVolume / 28320 }
    else if(textoconversorvolume == "Mililitro" && textoconvertidovolume == "Polegada cúbica"){ convertidoVolume = conversorVolume / 16.387 }
    else if(textoconversorvolume == "Mililitro" && textoconvertidovolume == "Onça líquida")   { convertidoVolume = conversorVolume / 29.574 }
    else if(textoconversorvolume == "Mililitro" && textoconvertidovolume == "Galão")          { convertidoVolume = conversorVolume / 3785 }
    else if(textoconversorvolume == "Mililitro" && textoconvertidovolume == "Copo")           { convertidoVolume = conversorVolume / 240 }
    else if(textoconversorvolume == "Mililitro" && textoconvertidovolume == "Colher de sopa") { convertidoVolume = conversorVolume / 14.787 }
    else if(textoconversorvolume == "Mililitro" && textoconvertidovolume == "Colher de chá")  { convertidoVolume = conversorVolume / 4.929 }

    /* ---------- m³ ---------- */
         if(textoconversorvolume == "Metro cúbico" && textoconvertidovolume == "Litro")          { convertidoVolume = conversorVolume * 1000 } 
    else if(textoconversorvolume == "Metro cúbico" && textoconvertidovolume == "Mililitro")      { convertidoVolume = conversorVolume * 1000000 }
    else if(textoconversorvolume == "Metro cúbico" && textoconvertidovolume == "Metro cúbico")   { convertidoVolume = conversorVolume }
    else if(textoconversorvolume == "Metro cúbico" && textoconvertidovolume == "Pé cúbico")      { convertidoVolume = conversorVolume * 35.3147 }
    else if(textoconversorvolume == "Metro cúbico" && textoconvertidovolume == "Polegada cúbica"){ convertidoVolume = conversorVolume * 61023.7 }
    else if(textoconversorvolume == "Metro cúbico" && textoconvertidovolume == "Onça líquida")   { convertidoVolume = conversorVolume * 33814 }
    else if(textoconversorvolume == "Metro cúbico" && textoconvertidovolume == "Galão")          { convertidoVolume = conversorVolume * 264.172 }
    else if(textoconversorvolume == "Metro cúbico" && textoconvertidovolume == "Copo")           { convertidoVolume = conversorVolume * 4166.67 }
    else if(textoconversorvolume == "Metro cúbico" && textoconvertidovolume == "Colher de sopa") { convertidoVolume = conversorVolume * 67628 }
    else if(textoconversorvolume == "Metro cúbico" && textoconvertidovolume == "Colher de chá")  { convertidoVolume = conversorVolume * 202884 }

    /* ---------- ft³ ---------- */
         if(textoconversorvolume == "Pé cúbico" && textoconvertidovolume == "Litro")          { convertidoVolume = conversorVolume * 28.3168 } 
    else if(textoconversorvolume == "Pé cúbico" && textoconvertidovolume == "Mililitro")      { convertidoVolume = conversorVolume * 28316.8 }
    else if(textoconversorvolume == "Pé cúbico" && textoconvertidovolume == "Metro cúbico")   { convertidoVolume = conversorVolume / 35.315 }
    else if(textoconversorvolume == "Pé cúbico" && textoconvertidovolume == "Pé cúbico")      { convertidoVolume = conversorVolume }
    else if(textoconversorvolume == "Pé cúbico" && textoconvertidovolume == "Polegada cúbica"){ convertidoVolume = conversorVolume * 1728 }
    else if(textoconversorvolume == "Pé cúbico" && textoconvertidovolume == "Onça líquida")   { convertidoVolume = conversorVolume * 957.506 }
    else if(textoconversorvolume == "Pé cúbico" && textoconvertidovolume == "Galão")          { convertidoVolume = conversorVolume * 7.48052 }
    else if(textoconversorvolume == "Pé cúbico" && textoconvertidovolume == "Copo")           { convertidoVolume = conversorVolume * 117.987 }
    else if(textoconversorvolume == "Pé cúbico" && textoconvertidovolume == "Colher de sopa") { convertidoVolume = conversorVolume * 1915.01 }
    else if(textoconversorvolume == "Pé cúbico" && textoconvertidovolume == "Colher de chá")  { convertidoVolume = conversorVolume * 5745.04 }

    /* ---------- in³ ---------- */
         if(textoconversorvolume == "Polegada cúbica" && textoconvertidovolume == "Litro")          { convertidoVolume = conversorVolume / 61.024 } 
    else if(textoconversorvolume == "Polegada cúbica" && textoconvertidovolume == "Mililitro")      { convertidoVolume = conversorVolume * 16.3871 }
    else if(textoconversorvolume == "Polegada cúbica" && textoconvertidovolume == "Metro cúbico")   { convertidoVolume = conversorVolume / 61020 }
    else if(textoconversorvolume == "Polegada cúbica" && textoconvertidovolume == "Pé cúbico")      { convertidoVolume = conversorVolume / 1728 }
    else if(textoconversorvolume == "Polegada cúbica" && textoconvertidovolume == "Polegada cúbica"){ convertidoVolume = conversorVolume }
    else if(textoconversorvolume == "Polegada cúbica" && textoconvertidovolume == "Onça líquida")   { convertidoVolume = conversorVolume / 1.805 }
    else if(textoconversorvolume == "Polegada cúbica" && textoconvertidovolume == "Galão")          { convertidoVolume = conversorVolume / 231 }
    else if(textoconversorvolume == "Polegada cúbica" && textoconvertidovolume == "Copo")           { convertidoVolume = conversorVolume / 14.646 }
    else if(textoconversorvolume == "Polegada cúbica" && textoconvertidovolume == "Colher de sopa") { convertidoVolume = conversorVolume * 1.10823 }
    else if(textoconversorvolume == "Polegada cúbica" && textoconvertidovolume == "Colher de chá")  { convertidoVolume = conversorVolume * 3.32468 }

    /* ---------- oz ---------- */
         if(textoconversorvolume == "Onça líquida" && textoconvertidovolume == "Litro")          { convertidoVolume = conversorVolume / 33.814 } 
    else if(textoconversorvolume == "Onça líquida" && textoconvertidovolume == "Mililitro")      { convertidoVolume = conversorVolume / 29.574 }
    else if(textoconversorvolume == "Onça líquida" && textoconvertidovolume == "Metro cúbico")   { convertidoVolume = conversorVolume / 33810 }
    else if(textoconversorvolume == "Onça líquida" && textoconvertidovolume == "Pé cúbico")      { convertidoVolume = conversorVolume / 957.5 }
    else if(textoconversorvolume == "Onça líquida" && textoconvertidovolume == "Polegada cúbica"){ convertidoVolume = conversorVolume * 1.80469 }
    else if(textoconversorvolume == "Onça líquida" && textoconvertidovolume == "Onça líquida")   { convertidoVolume = conversorVolume }
    else if(textoconversorvolume == "Onça líquida" && textoconvertidovolume == "Galão")          { convertidoVolume = conversorVolume / 128 }
    else if(textoconversorvolume == "Onça líquida" && textoconvertidovolume == "Copo")           { convertidoVolume = conversorVolume / 8.115 }
    else if(textoconversorvolume == "Onça líquida" && textoconvertidovolume == "Colher de sopa") { convertidoVolume = conversorVolume * 2 }
    else if(textoconversorvolume == "Onça líquida" && textoconvertidovolume == "Colher de chá")  { convertidoVolume = conversorVolume * 6 }

    /* ---------- gal ---------- */
         if(textoconversorvolume == "Galão" && textoconvertidovolume == "Litro")          { convertidoVolume = conversorVolume * 3.78541 } 
    else if(textoconversorvolume == "Galão" && textoconvertidovolume == "Mililitro")      { convertidoVolume = conversorVolume * 3785.41 }
    else if(textoconversorvolume == "Galão" && textoconvertidovolume == "Metro cúbico")   { convertidoVolume = conversorVolume / 264.2 }
    else if(textoconversorvolume == "Galão" && textoconvertidovolume == "Pé cúbico")      { convertidoVolume = conversorVolume / 7.48 }
    else if(textoconversorvolume == "Galão" && textoconvertidovolume == "Polegada cúbica"){ convertidoVolume = conversorVolume * 231 }
    else if(textoconversorvolume == "Galão" && textoconvertidovolume == "Onça líquida")   { convertidoVolume = conversorVolume * 128 }
    else if(textoconversorvolume == "Galão" && textoconvertidovolume == "Galão")          { convertidoVolume = conversorVolume }
    else if(textoconversorvolume == "Galão" && textoconvertidovolume == "Copo")           { convertidoVolume = conversorVolume * 15.7725 }
    else if(textoconversorvolume == "Galão" && textoconvertidovolume == "Colher de sopa") { convertidoVolume = conversorVolume * 256 }
    else if(textoconversorvolume == "Galão" && textoconvertidovolume == "Colher de chá")  { convertidoVolume = conversorVolume * 768 }

    /* ---------- cp ---------- */
         if(textoconversorvolume == "Copo" && textoconvertidovolume == "Litro")          { convertidoVolume = conversorVolume / 4.167 } 
    else if(textoconversorvolume == "Copo" && textoconvertidovolume == "Mililitro")      { convertidoVolume = conversorVolume * 240 }
    else if(textoconversorvolume == "Copo" && textoconvertidovolume == "Metro cúbico")   { convertidoVolume = conversorVolume / 4167 }
    else if(textoconversorvolume == "Copo" && textoconvertidovolume == "Pé cúbico")      { convertidoVolume = conversorVolume / 118 }
    else if(textoconversorvolume == "Copo" && textoconvertidovolume == "Polegada cúbica"){ convertidoVolume = conversorVolume * 14.6457 }
    else if(textoconversorvolume == "Copo" && textoconvertidovolume == "Onça líquida")   { convertidoVolume = conversorVolume * 8.11537 }
    else if(textoconversorvolume == "Copo" && textoconvertidovolume == "Galão")          { convertidoVolume = conversorVolume / 15.772 }
    else if(textoconversorvolume == "Copo" && textoconvertidovolume == "Copo")           { convertidoVolume = conversorVolume }
    else if(textoconversorvolume == "Copo" && textoconvertidovolume == "Colher de sopa") { convertidoVolume = conversorVolume * 16.2307 }
    else if(textoconversorvolume == "Copo" && textoconvertidovolume == "Colher de chá")  { convertidoVolume = conversorVolume * 48.6922 }

    /* ---------- csp ---------- */
         if(textoconversorvolume == "Colher de sopa" && textoconvertidovolume == "Litro")          { convertidoVolume = conversorVolume / 67.628 } 
    else if(textoconversorvolume == "Colher de sopa" && textoconvertidovolume == "Mililitro")      { convertidoVolume = conversorVolume * 14.7868 }
    else if(textoconversorvolume == "Colher de sopa" && textoconvertidovolume == "Metro cúbico")   { convertidoVolume = conversorVolume / 67630 }
    else if(textoconversorvolume == "Colher de sopa" && textoconvertidovolume == "Pé cúbico")      { convertidoVolume = conversorVolume / 1915 }
    else if(textoconversorvolume == "Colher de sopa" && textoconvertidovolume == "Polegada cúbica"){ convertidoVolume = conversorVolume / 1.108 }
    else if(textoconversorvolume == "Colher de sopa" && textoconvertidovolume == "Onça líquida")   { convertidoVolume = conversorVolume / 2 }
    else if(textoconversorvolume == "Colher de sopa" && textoconvertidovolume == "Galão")          { convertidoVolume = conversorVolume / 256 }
    else if(textoconversorvolume == "Colher de sopa" && textoconvertidovolume == "Copo")           { convertidoVolume = conversorVolume / 16.231 }
    else if(textoconversorvolume == "Colher de sopa" && textoconvertidovolume == "Colher de sopa") { convertidoVolume = conversorVolume }
    else if(textoconversorvolume == "Colher de sopa" && textoconvertidovolume == "Colher de chá")  { convertidoVolume = conversorVolume * 3 }

    /* ---------- ccf ---------- */
         if(textoconversorvolume == "Colher de chá" && textoconvertidovolume == "Litro")          { convertidoVolume = conversorVolume / 202.9 } 
    else if(textoconversorvolume == "Colher de chá" && textoconvertidovolume == "Mililitro")      { convertidoVolume = conversorVolume * 3.92892 }
    else if(textoconversorvolume == "Colher de chá" && textoconvertidovolume == "Metro cúbico")   { convertidoVolume = conversorVolume / 202900 }
    else if(textoconversorvolume == "Colher de chá" && textoconvertidovolume == "Pé cúbico")      { convertidoVolume = conversorVolume / 5745 }
    else if(textoconversorvolume == "Colher de chá" && textoconvertidovolume == "Polegada cúbica"){ convertidoVolume = conversorVolume / 3.325 }
    else if(textoconversorvolume == "Colher de chá" && textoconvertidovolume == "Onça líquida")   { convertidoVolume = conversorVolume / 6 }
    else if(textoconversorvolume == "Colher de chá" && textoconvertidovolume == "Galão")          { convertidoVolume = conversorVolume / 768 }
    else if(textoconversorvolume == "Colher de chá" && textoconvertidovolume == "Copo")           { convertidoVolume = conversorVolume / 48.692 }
    else if(textoconversorvolume == "Colher de chá" && textoconvertidovolume == "Colher de sopa") { convertidoVolume = conversorVolume / 3 }
    else if(textoconversorvolume == "Colher de chá" && textoconvertidovolume == "Colher de chá")  { convertidoVolume = conversorVolume }
    /* ========== Impressão ========== */
    
    console.log(conversorVolume + " " + textoconversorvolume + " = " + convertidoVolume + " " + textoconvertidovolume) // Imprimir no console para debugar

    var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
        if (Math.floor(valor) !== valor)
            return valor.toString().split(".")[1].length || 0;
        return 0;
    }
    
    if(convertidoVolume == "erro"){ 
        document.getElementById("convertidoVolume").innerHTML = convertidoVolume
    }
    else{
        var valorconvertidovolume = parseFloat(convertidoVolume)

        if(contarDecimais(valorconvertidovolume) >= 9){
            document.getElementById("convertidoVolume").innerHTML = valorconvertidovolume.toFixed(9).replace(/\.?0+$/, '')
        }
        else if(contarDecimais(valorconvertidovolume) == 8) { 
            document.getElementById("convertidoVolume").innerHTML = valorconvertidovolume.toFixed(8).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovolume) == 7) { 
            document.getElementById("convertidoVolume").innerHTML = valorconvertidovolume.toFixed(7).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovolume) == 6) { 
            document.getElementById("convertidoVolume").innerHTML = valorconvertidovolume.toFixed(6).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovolume) == 5) { 
            document.getElementById("convertidoVolume").innerHTML = valorconvertidovolume.toFixed(5).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovolume) == 4) {
            document.getElementById("convertidoVolume").innerHTML = valorconvertidovolume.toFixed(4).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovolume) == 3) { 
            document.getElementById("convertidoVolume").innerHTML = valorconvertidovolume.toFixed(3).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovolume) == 2) { 
            document.getElementById("convertidoVolume").innerHTML = valorconvertidovolume.toFixed(2).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidovolume) == 1) { 
            document.getElementById("convertidoVolume").innerHTML = valorconvertidovolume.toFixed(1).replace(/\.?0+$/, '') 
        } 
        else if(convertidoVolume == ""){
            document.getElementById("convertidoVolume").innerHTML = ""
        }
        else{
            document.getElementById("convertidoVolume").innerHTML = valorconvertidovolume
        }
    }
}

/* ============ Conversão Área ============ */

function converterArea() {

    /* ========== Associação HTML -> JS ========== */

    var conversorArea = document.getElementById("conversorArea").value
    var convertidoArea
    
    var e1 = document.getElementById("selecaoconversorarea")
    var textoconversorarea = e1.options[e1.selectedIndex].text
    
    var e2 = document.getElementById("selecaoconvertidoarea")
    var textoconvertidoarea = e2.options[e2.selectedIndex].text
    
    /* ========== Conversão ========== */

    /* ----------  ---------- */
         if(textoconversorarea == "Quilômetro quadrado" && textoconvertidoarea == "Quilômetro quadrado"){ convertidoArea = conversorArea } 
    else if(textoconversorarea == "Quilômetro quadrado" && textoconvertidoarea == "Metro quadrado")     { convertidoArea = conversorArea * 1000000 }
    else if(textoconversorarea == "Quilômetro quadrado" && textoconvertidoarea == "Milha quadrada")     { convertidoArea = conversorArea / 2.59 }
    else if(textoconversorarea == "Quilômetro quadrado" && textoconvertidoarea == "Pé quadrado")        { convertidoArea = conversorArea * 10763910 }
    else if(textoconversorarea == "Quilômetro quadrado" && textoconvertidoarea == "Polegada quadrada")  { convertidoArea = conversorArea * 1550003000 }
    else if(textoconversorarea == "Quilômetro quadrado" && textoconvertidoarea == "Hectare")            { convertidoArea = conversorArea * 100 }
    else if(textoconversorarea == "Quilômetro quadrado" && textoconvertidoarea == "Acre")               { convertidoArea = conversorArea * 247.105 }

    /* ----------  ---------- */
         if(textoconversorarea == "Metro quadrado" && textoconvertidoarea == "Quilômetro quadrado"){ convertidoArea = conversorArea / 1000000 } 
    else if(textoconversorarea == "Metro quadrado" && textoconvertidoarea == "Metro quadrado")     { convertidoArea = conversorArea }
    else if(textoconversorarea == "Metro quadrado" && textoconvertidoarea == "Milha quadrada")     { convertidoArea = conversorArea / 2590673.57 }
    else if(textoconversorarea == "Metro quadrado" && textoconvertidoarea == "Pé quadrado")        { convertidoArea = conversorArea * 10.7639 }
    else if(textoconversorarea == "Metro quadrado" && textoconvertidoarea == "Polegada quadrada")  { convertidoArea = conversorArea * 1550 }
    else if(textoconversorarea == "Metro quadrado" && textoconvertidoarea == "Hectare")            { convertidoArea = conversorArea / 10000 }
    else if(textoconversorarea == "Metro quadrado" && textoconvertidoarea == "Acre")               { convertidoArea = conversorArea / 4047}

    /* ----------  ---------- */
         if(textoconversorarea == "Milha quadrada" && textoconvertidoarea == "Quilômetro quadrado"){ convertidoArea = conversorArea * 2.58999 } 
    else if(textoconversorarea == "Milha quadrada" && textoconvertidoarea == "Metro quadrado")     { convertidoArea = conversorArea * 2589987.83 }
    else if(textoconversorarea == "Milha quadrada" && textoconvertidoarea == "Milha quadrada")     { convertidoArea = conversorArea }
    else if(textoconversorarea == "Milha quadrada" && textoconvertidoarea == "Pé quadrado")        { convertidoArea = conversorArea * 27878395.93 }
    else if(textoconversorarea == "Milha quadrada" && textoconvertidoarea == "Polegada quadrada")  { convertidoArea = conversorArea * 4010000000 }
    else if(textoconversorarea == "Milha quadrada" && textoconvertidoarea == "Hectare")            { convertidoArea = conversorArea * 258.999 }
    else if(textoconversorarea == "Milha quadrada" && textoconvertidoarea == "Acre")               { convertidoArea = conversorArea * 640 }

    /* ----------  ---------- */
         if(textoconversorarea == "Pé quadrado" && textoconvertidoarea == "Quilômetro quadrado"){ convertidoArea = conversorArea / 10764262.64 } 
    else if(textoconversorarea == "Pé quadrado" && textoconvertidoarea == "Metro quadrado")     { convertidoArea = conversorArea / 10.764 }
    else if(textoconversorarea == "Pé quadrado" && textoconvertidoarea == "Milha quadrada")     { convertidoArea = conversorArea / 27855153.20 }
    else if(textoconversorarea == "Pé quadrado" && textoconvertidoarea == "Pé quadrado")        { convertidoArea = conversorArea }
    else if(textoconversorarea == "Pé quadrado" && textoconvertidoarea == "Polegada quadrada")  { convertidoArea = conversorArea * 144 }
    else if(textoconversorarea == "Pé quadrado" && textoconvertidoarea == "Hectare")            { convertidoArea = conversorArea / 107600 }
    else if(textoconversorarea == "Pé quadrado" && textoconvertidoarea == "Acre")               { convertidoArea = conversorArea / 43560}

    /* ----------  ---------- */
         if(textoconversorarea == "Polegada quadrada" && textoconvertidoarea == "Quilômetro quadrado"){ convertidoArea = conversorArea / 1550387596.89 } 
    else if(textoconversorarea == "Polegada quadrada" && textoconvertidoarea == "Metro quadrado")     { convertidoArea = conversorArea / 1550.38 }
    else if(textoconversorarea == "Polegada quadrada" && textoconvertidoarea == "Milha quadrada")     { convertidoArea = conversorArea / 4016064257.02 }
    else if(textoconversorarea == "Polegada quadrada" && textoconvertidoarea == "Pé quadrado")        { convertidoArea = conversorArea / 144 }
    else if(textoconversorarea == "Polegada quadrada" && textoconvertidoarea == "Polegada quadrada")  { convertidoArea = conversorArea }
    else if(textoconversorarea == "Polegada quadrada" && textoconvertidoarea == "Hectare")            { convertidoArea = conversorArea / 15503875.96 }
    else if(textoconversorarea == "Polegada quadrada" && textoconvertidoarea == "Acre")               { convertidoArea = conversorArea / 6289308.17 }

    /* ----------  ---------- */
         if(textoconversorarea == "Hectare" && textoconvertidoarea == "Quilômetro quadrado"){ convertidoArea = conversorArea / 100 } 
    else if(textoconversorarea == "Hectare" && textoconvertidoarea == "Metro quadrado")     { convertidoArea = conversorArea * 10000 }
    else if(textoconversorarea == "Hectare" && textoconvertidoarea == "Milha quadrada")     { convertidoArea = conversorArea / 259 }
    else if(textoconversorarea == "Hectare" && textoconvertidoarea == "Pé quadrado")        { convertidoArea = conversorArea * 107639 }
    else if(textoconversorarea == "Hectare" && textoconvertidoarea == "Polegada quadrada")  { convertidoArea = conversorArea * 15500030 }
    else if(textoconversorarea == "Hectare" && textoconvertidoarea == "Hectare")            { convertidoArea = conversorArea }
    else if(textoconversorarea == "Hectare" && textoconvertidoarea == "Acre")               { convertidoArea = conversorArea * 2.47105 }

    /* ----------  ---------- */
         if(textoconversorarea == "Acre" && textoconvertidoarea == "Quilômetro quadrado"){ convertidoArea = conversorArea / 247.1 } 
    else if(textoconversorarea == "Acre" && textoconvertidoarea == "Metro quadrado")     { convertidoArea = conversorArea * 4046.86 }
    else if(textoconversorarea == "Acre" && textoconvertidoarea == "Milha quadrada")     { convertidoArea = conversorArea / 640 }
    else if(textoconversorarea == "Acre" && textoconvertidoarea == "Pé quadrado")        { convertidoArea = conversorArea * 43560 }
    else if(textoconversorarea == "Acre" && textoconvertidoarea == "Polegada quadrada")  { convertidoArea = conversorArea * 6272636.59 }
    else if(textoconversorarea == "Acre" && textoconvertidoarea == "Hectare")            { convertidoArea = conversorArea / 2.47105 }
    else if(textoconversorarea == "Acre" && textoconvertidoarea == "Acre")               { convertidoArea = conversorArea }

    /* ========== Impressão ========== */
    
    console.log(conversorArea + " " + textoconversorarea + " = " + convertidoArea + " " + textoconvertidoarea) // Imprimir no console para debugar

    var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
        if (Math.floor(valor) !== valor)
            return valor.toString().split(".")[1].length || 0;
        return 0;
    }
    
    if(convertidoArea == "erro"){ 
        document.getElementById("convertidoArea").innerHTML = convertidoArea
    }
    else{
        var valorconvertidoarea = parseFloat(convertidoArea)

        if(contarDecimais(valorconvertidoarea) >= 9){
            document.getElementById("convertidoArea").innerHTML = valorconvertidoarea.toFixed(9).replace(/\.?0+$/, '')
        }
        else if(contarDecimais(valorconvertidoarea) == 8) { 
            document.getElementById("convertidoArea").innerHTML = valorconvertidoarea.toFixed(8).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidoarea) == 7) { 
            document.getElementById("convertidoArea").innerHTML = valorconvertidoarea.toFixed(7).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidoarea) == 6) { 
            document.getElementById("convertidoArea").innerHTML = valorconvertidoarea.toFixed(6).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidoarea) == 5) { 
            document.getElementById("convertidoArea").innerHTML = valorconvertidoarea.toFixed(5).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidoarea) == 4) {
            document.getElementById("convertidoArea").innerHTML = valorconvertidoarea.toFixed(4).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidoarea) == 3) { 
            document.getElementById("convertidoArea").innerHTML = valorconvertidoarea.toFixed(3).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidoarea) == 2) { 
            document.getElementById("convertidoArea").innerHTML = valorconvertidoarea.toFixed(2).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidoarea) == 1) { 
            document.getElementById("convertidoArea").innerHTML = valorconvertidoarea.toFixed(1).replace(/\.?0+$/, '') 
        } 
        else if(convertidoArea == ""){
            document.getElementById("convertidoArea").innerHTML = ""
        }
        else{
            document.getElementById("convertidoArea").innerHTML = valorconvertidoarea
        }
    }
}

/* ============ Conversão Pressão ============ */

function converterPressao() {

    /* ========== Associação HTML -> JS ========== */

    var conversorPressao = document.getElementById("conversorPressao").value
    var convertidoPressao
    
    var e1 = document.getElementById("selecaoconversorpressao")
    var textoconversorpressao = e1.options[e1.selectedIndex].text
    
    var e2 = document.getElementById("selecaoconvertidopressao")
    var textoconvertidopressao = e2.options[e2.selectedIndex].text
    
    /* ========== Conversão ========== */

    /* ---------- Atmosfera ---------- */
         if(textoconversorpressao == "Atmosfera" && textoconvertidopressao == "Atmosfera"){ convertidoPressao = conversorPressao } 
    else if(textoconversorpressao == "Atmosfera" && textoconvertidopressao == "Bar")      { convertidoPressao = conversorPressao * 1.01325 }
    else if(textoconversorpressao == "Atmosfera" && textoconvertidopressao == "Pascal")   { convertidoPressao = conversorPressao * 101300 }
    else if(textoconversorpressao == "Atmosfera" && textoconvertidopressao == "Psi")      { convertidoPressao = conversorPressao * 14.6959 }
    else if(textoconversorpressao == "Atmosfera" && textoconvertidopressao == "Torr")     { convertidoPressao = conversorPressao * 760 }

    /* ---------- Bar ---------- */
         if(textoconversorpressao == "Bar" && textoconvertidopressao == "Atmosfera"){ convertidoPressao = conversorPressao / 1.01325 } 
    else if(textoconversorpressao == "Bar" && textoconvertidopressao == "Bar")      { convertidoPressao = conversorPressao }
    else if(textoconversorpressao == "Bar" && textoconvertidopressao == "Pascal")   { convertidoPressao = conversorPressao * 100000 }
    else if(textoconversorpressao == "Bar" && textoconvertidopressao == "Psi")      { convertidoPressao = conversorPressao * 14.5038 }
    else if(textoconversorpressao == "Bar" && textoconvertidopressao == "Torr")     { convertidoPressao = conversorPressao * 750.062 }

    /* ---------- Pascal ---------- */
         if(textoconversorpressao == "Pascal" && textoconvertidopressao == "Atmosfera"){ convertidoPressao = conversorPressao / 101300 } 
    else if(textoconversorpressao == "Pascal" && textoconvertidopressao == "Bar")      { convertidoPressao = conversorPressao / 100000}
    else if(textoconversorpressao == "Pascal" && textoconvertidopressao == "Pascal")   { convertidoPressao = conversorPressao }
    else if(textoconversorpressao == "Pascal" && textoconvertidopressao == "Psi")      { convertidoPressao = conversorPressao / 6895 }
    else if(textoconversorpressao == "Pascal" && textoconvertidopressao == "Torr")     { convertidoPressao = conversorPressao / 133.322 }

    /* ---------- Psi ---------- */
         if(textoconversorpressao == "Psi" && textoconvertidopressao == "Atmosfera"){ convertidoPressao = conversorPressao / 14.696 } 
    else if(textoconversorpressao == "Psi" && textoconvertidopressao == "Bar")      { convertidoPressao = conversorPressao / 14.504 }
    else if(textoconversorpressao == "Psi" && textoconvertidopressao == "Pascal")   { convertidoPressao = conversorPressao * 6894.76 }
    else if(textoconversorpressao == "Psi" && textoconvertidopressao == "Psi")      { convertidoPressao = conversorPressao }
    else if(textoconversorpressao == "Psi" && textoconvertidopressao == "Torr")     { convertidoPressao = conversorPressao * 51.7149 }

    /* ---------- Torr ---------- */
         if(textoconversorpressao == "Torr" && textoconvertidopressao == "Atmosfera"){ convertidoPressao = conversorPressao / 760 } 
    else if(textoconversorpressao == "Torr" && textoconvertidopressao == "Bar")      { convertidoPressao = conversorPressao / 750.1 }
    else if(textoconversorpressao == "Torr" && textoconvertidopressao == "Pascal")   { convertidoPressao = conversorPressao * 133.322}
    else if(textoconversorpressao == "Torr" && textoconvertidopressao == "Psi")      { convertidoPressao = conversorPressao / 51.715 }
    else if(textoconversorpressao == "Torr" && textoconvertidopressao == "Torr")     { convertidoPressao = conversorPressao }

    /* ========== Impressão ========== */
    
    console.log(conversorPressao + " " + textoconversorpressao + " = " + convertidoPressao + " " + textoconvertidopressao) // Imprimir no console para debugar

    var contarDecimais = function(valor) { // Função para contar o numero de casas decimais
        if (Math.floor(valor) !== valor)
            return valor.toString().split(".")[1].length || 0;
        return 0;
    }
    
    if(convertidoPressao == "erro"){ 
        document.getElementById("convertidoPressao").innerHTML = convertidoPressao
    }
    else{
        var valorconvertidopressao = parseFloat(convertidoPressao)

        if(contarDecimais(valorconvertidopressao) >= 9){
            document.getElementById("convertidoPressao").innerHTML = valorconvertidopressao.toFixed(9).replace(/\.?0+$/, '')
        }
        else if(contarDecimais(valorconvertidopressao) == 8) { 
            document.getElementById("convertidoPressao").innerHTML = valorconvertidopressao.toFixed(8).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidopressao) == 7) { 
            document.getElementById("convertidoPressao").innerHTML = valorconvertidopressao.toFixed(7).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidopressao) == 6) { 
            document.getElementById("convertidoPressao").innerHTML = valorconvertidopressao.toFixed(6).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidopressao) == 5) { 
            document.getElementById("convertidoPressao").innerHTML = valorconvertidopressao.toFixed(5).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidopressao) == 4) {
            document.getElementById("convertidoPressao").innerHTML = valorconvertidopressao.toFixed(4).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidopressao) == 3) { 
            document.getElementById("convertidoPressao").innerHTML = valorconvertidopressao.toFixed(3).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidopressao) == 2) { 
            document.getElementById("convertidoPressao").innerHTML = valorconvertidopressao.toFixed(2).replace(/\.?0+$/, '') 
        } 
        else if(contarDecimais(valorconvertidopressao) == 1) { 
            document.getElementById("convertidoPressao").innerHTML = valorconvertidopressao.toFixed(1).replace(/\.?0+$/, '') 
        } 
        else if(convertidoPressao == ""){
            document.getElementById("convertidoPressao").innerHTML = ""
        }
        else{
            document.getElementById("convertidoPressao").innerHTML = valorconvertidopressao
        }
    }
}
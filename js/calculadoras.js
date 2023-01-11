/* =========== Calculadora SIGAA =========== */

function calcularSigaa(){
    if (varformterminal != ""){
        var varformterminal = document.getElementById("formterminal").value;
         
        var codigo = varformterminal;
        var modo  = "dia";
        var dias  = ["","Domingo","Segunda-feira","Terça-feira","Quarta-Feira","Quinta-feira","Sexta-feira","Sábado"];
        var manha = ["","8am - 9:55am","8:55am - 9:50am","10am - 10:50am","10:55am - 11:50am","12am - 12:55am","",""];
        var tarde = ["","12:55am - 13:50","14h - 14:55","14:55 - 15:50","16h - 16:55","16:55 - 17:50","18h - 18:50","18:55 - 19:50"];
        var noite = ["","19h - 19:50","19:50 - 20:40","20:50 - 21:40","21:40 - 22:30","","",""];
        var semana   = [false,false,false,false,false,false,false,false];
        var horarios = [false,false,false,false,false,false,false,false];
        
        for (var posicao = 0; posicao < codigo.length; posicao++){
            if (codigo[posicao] == "m" || codigo[posicao] == "M"){
                modo = "manha";
            }
            else if (codigo[posicao] == "t" || codigo[posicao] == "T"){
                modo = "tarde";
            }
            else if (codigo[posicao] == "n" || codigo[posicao] == "N"){
                modo = "noite";
            }
            else if (modo == "dia"){
                if      (codigo[posicao] == "1" ){
                    semana[1] = true;
                }
                else if (codigo[posicao] == "2" ){
                    semana[2] = true;
                }
                else if (codigo[posicao] == "3" ){
                    semana[3] = true;
                }
                else if (codigo[posicao] == "4" ){
                    semana[4] = true;
                }
                else if (codigo[posicao] == "5" ){
                    semana[5] = true;
                }
                else if (codigo[posicao] == "6" ){
                    semana[6] = true;
                }
                else if (codigo[posicao] == "7" ){
                    semana[7] = true;
                }
            }
            else if (modo == "manha" || modo == "tarde" || modo == "noite"){
                if      (codigo[posicao] == "1" ){
                    horarios[1] = true;
                }
                else if (codigo[posicao] == "2" ){
                    horarios[2] = true;
                }
                else if (codigo[posicao] == "3" ){
                    horarios[3] = true;
                }
                else if (codigo[posicao] == "4" ){
                    horarios[4] = true;
                }
                else if (codigo[posicao] == "5" ){
                    horarios[5] = true;
                }
                else if (codigo[posicao] == "6" ){
                    horarios[6] = true;
                }
                else if (codigo[posicao] == "7" ){
                    horarios[7] = true;
                }
            }
            
        }
         
        var resl_semana = "";
        for (var dia = 1; dia <= 7; dia++){
            if (semana[dia] == true){
                resl_semana = resl_semana + dias[dia] + "\n";
            }
        }
        
        var resl_horaio = "";
        if (modo == "manha"){
            for (var horario_codigo = 1; horario_codigo <= 7; horario_codigo++){
                if (horarios[horario_codigo] == true && manha[horario_codigo] != ""){
                    resl_horaio = resl_horaio + manha[horario_codigo] + "\n";
                }
            }
        }
        if (modo == "tarde"){
            for (var horario_codigo = 1; horario_codigo <= 7; horario_codigo++){
                if (horarios[horario_codigo] == true && tarde[horario_codigo] != ""){
                    resl_horaio = resl_horaio + tarde[horario_codigo] + "\n";
              }
            }
         }
        if (modo == "noite"){
            for (var horario_codigo = 1; horario_codigo <= 7; horario_codigo++){
                if (horarios[horario_codigo] == true && noite[horario_codigo] != ""){
                    resl_horaio = resl_horaio + noite[horario_codigo] + "\n";
                } 
            }
        }   
        
        var turno = "";
        if (modo == "manha"){
            turno = "Manhã";
        }
        else if (modo == "tarde"){
            turno = "Tarde";
        }
        else if (modo == "noite"){
            turno = "Noite";
        }
        
        var resultado = "Código: " + codigo + "\n" + "Turno: " + turno + "\n" + "\n" + "Dias da semana: " + "\n" + resl_semana + "\n" + "Horário: " + "\n"  + resl_horaio;
        
        document.getElementById("terminal").innerHTML = resultado;
        }
        if (varformterminal == ""){
            document.getElementById("terminal").innerHTML = "Código de horário SIGAA em branco!";
        }
        
        $(document).on("keydown", "form", function(event) { 
            return event.key != "Enter";
        });
}

/* =========== Calculadora Sistemas =========== */

function vetor() {
    this.length = vetor.arguments.length
    for (var i = 0; i < this.length; i++)
    this[i+1] = vetor.arguments[i]
}

function calcularSistema() {

    /* ========== Associação HTML -> JS ========== */

    var eq1_A = parseFloat(document.getElementById("eq1_A").value)
    var eq1_B = parseFloat(document.getElementById("eq1_B").value)
    var eq1_C = parseFloat(document.getElementById("eq1_C").value)
    var eq1_D = parseFloat(document.getElementById("eq1_D").value)
    var eq2_A = parseFloat(document.getElementById("eq2_A").value)
    var eq2_B = parseFloat(document.getElementById("eq2_B").value)
    var eq2_C = parseFloat(document.getElementById("eq2_C").value)
    var eq2_D = parseFloat(document.getElementById("eq2_D").value)
    var eq3_A = parseFloat(document.getElementById("eq3_A").value)
    var eq3_B = parseFloat(document.getElementById("eq3_B").value)
    var eq3_C = parseFloat(document.getElementById("eq3_C").value)
    var eq3_D = parseFloat(document.getElementById("eq3_D").value)

    /* ========== Cálculo ========== */
    
    var linhas = 0
    if(eq1_A != 0 || eq1_B != 0 || eq1_C != 0){ linhas++ }
    if(eq2_A != 0 || eq2_B != 0 || eq2_C != 0){ linhas++ }
    if(eq3_A != 0 || eq3_B != 0 || eq3_C != 0){ linhas++ }

    if(linhas == 0){ // Tudo vazio
        document.getElementById("respostaSistema").innerHTML = "x = " + 0 + "; y = " + 0 + "; z = " + 0
    }
    else{
        var eq1 = new vetor(parseFloat(eq1_A, 10), parseFloat(eq1_B, 10), parseFloat(eq1_C, 10), parseFloat(eq1_D, 10))
        var	eq2 = new vetor(parseFloat(eq2_A, 10), parseFloat(eq2_B, 10), parseFloat(eq2_C, 10), parseFloat(eq2_D, 10))
        var eq3 = new vetor(parseFloat(eq3_A, 10), parseFloat(eq3_B, 10), parseFloat(eq3_C, 10), parseFloat(eq3_D, 10))
    
        var t1 = eq1
        var t2 = eq2
        var t3 = eq3
        
        if (eq1[1] == 0) { 
            document.getElementById("respostaSistema").innerHTML = "x = " + eq1[4] + "; y = " + eq2[4] + "; z = " + eq3[4] + ";"
        }
        if (eq1[1] != 0) {
            var temp = eq1[1]
            for(var i=1; i<=4; i++){ 
                eq1[i] = eq1[i] / temp 
            }
        }
        
        var temp = -eq2[1]
        for(var i=1; i<=4; i++) {
            eq2[i] = eq2[i] + (eq1[i] * temp) 
        }

        var temp = -eq3[1]
        for(var i=1; i<=4; i++) {
            eq3[i] = eq3[i] + (eq1[i] * temp) 
        }
        
        if(eq2[2] == 0) {
            for(var i=2; i<=4; i++) {
                var temp = eq2[i]
                eq2[i] = eq3[i]
                eq3[i] = temp 
            }
        }
        if(eq2[2] != 0 ) {
            var temp = eq2[2]
            eq2[2] = eq2[2] / temp
            eq2[3] = eq2[3] / temp
            eq2[4] = eq2[4] / temp
        
            var temp = -eq3[2]
            for(var i=2; i<=4; i++) {
                eq3[i] = eq3[i] + (eq2[i] * temp) 
            }
        
            var temp = -eq1[2]
            for(var i=2; i<=4; i++) {
                eq1[i] = eq1[i] + (eq2[i] * temp) 
            }
        }
        
        if(eq3[3] != 0) {
            var temp = eq3[3]
            eq3[3] = eq3[3] / temp
            eq3[4] = eq3[4] / temp
        
            var temp = -eq2[3]
            eq2[3] = eq2[3] + (eq3[3] * temp)
            eq2[4] = eq2[4] + (eq3[4] * temp)
        
            var temp = -eq1[3]
            eq1[3] = eq1[3] + (eq3[3] * temp)
            eq1[4] = eq1[4] + (eq3[4] * temp)
        }
        
        if(t1[1] * eq1[4] + t1[2] * eq2[4] + t1[3] * eq3[4] != t1[4]){ 
            document.getElementById("respostaSistema").innerHTML = "O sistema não tem solução ou tem solução infinita"
        }
        if(t2[1] * eq1[4] + t2[2] * eq2[4] + t2[3] * eq3[4] != t2[4]){ 
            document.getElementById("respostaSistema").innerHTML = "O sistema não tem solução ou tem solução infinita"
        }
        if(t3[1] * eq1[4] + t3[2] * eq2[4] + t3[3] * eq3[4] != t3[4]){ 
            document.getElementById("respostaSistema").innerHTML = "O sistema não tem solução ou tem solução infinita"
        }
        
        /* ========== Impressão ========== */

        document.getElementById("respostaSistema").innerHTML = " x = " + eq1[4].toFixed(2).replace(/\.?0+$/, '') + ";  y = " + eq2[4].toFixed(2).replace(/\.?0+$/, '') + ";  z = " + eq3[4].toFixed(2).replace(/\.?0+$/, '') + ";"
    }

    /* ========== Impressão no console ========== */

    console.log("linhas = " + linhas)
    console.log("eq1_A = " + eq1_A + "; eq1_B = " + eq1_B + "; eq1_C = " + eq1_C + "; eq1_D = " + eq1_D + "\neq2_A = " + eq2_A + "; eq2_B = " + eq2_B + "; eq2_C = " + eq2_C + "; eq2_D = " + eq2_D + "\neq3_A = " + eq3_A + "; eq3_B = " + eq3_B + "; eq3_C = " + eq3_C + "; eq3_D = " + eq3_D)
    console.log("X final = " + eq1[4] + "; Y final = " + eq2[4] + "; Z final = " + eq3[4])
}

/* =========== Calculadora IMC =========== */

function calcularIMC() {
    
    /* ========== Associação HTML -> JS ========== */

    var altura = document.getElementById("alturaimc").value
    var peso = document.getElementById("pesoimc").value

    /* ========== Cálculo ========== */

    var imccalculado = 0
    var imcclassificacao = ""

    if(altura == "" || peso == "") {
        document.getElementById("imccalculado").innerHTML = "ERRO"
        document.getElementById("imcclassificacao").innerHTML = "ERRO"
    } else {
        altura = parseFloat(altura)
        peso = parseFloat(peso)

        imccalculado = (peso)/(altura * altura)

        if(imccalculado < 18.5){
            imcclassificacao = "MAGREZA"
            document.getElementById("imcclassificacao").innerHTML = imcclassificacao
        } else if(imccalculado >= 18.5 && imccalculado <= 24.9) {
            imcclassificacao = "NORMAL"
            document.getElementById("imcclassificacao").innerHTML = imcclassificacao
        } else if(imccalculado >= 25 && imccalculado <= 29.9) {
            imcclassificacao = "SOBREPESO"
            document.getElementById("imcclassificacao").innerHTML = imcclassificacao
        } else if(imccalculado >= 30 && imccalculado <= 39.9) {
            imcclassificacao = "OBESIDADE"
            document.getElementById("imcclassificacao").innerHTML = imcclassificacao
        } else if(imccalculado > 40) {
            imcclassificacao = "OBESIDADE GRAVE"
            document.getElementById("imcclassificacao").innerHTML = imcclassificacao
        } else {
            document.getElementById("imcclassificacao").innerHTML = "ERRO"
        }
        document.getElementById("imccalculado").innerHTML = imccalculado.toFixed(1)
    }

    /* ========== Impressão ========== */

    console.log("imccalculado = " + imccalculado + " (" + typeof imccalculado + ")")
    console.log("imcclassificacao = " + imcclassificacao + " (" + typeof imcclassificacao + ")")
}

function apagarIMC() {
    document.getElementById('alturaimc').value = ''
    document.getElementById('pesoimc').value = ''
}

/* =========== Calculadora Código de Cores Resistores =========== */

function calcularCodigoCores(){

    /* ========== Associação HTML -> JS ========== */

    var e1 = document.getElementById("selecaofaixa1")
    var selecaofaixa1 = e1.options[e1.selectedIndex].text

    var e2 = document.getElementById("selecaofaixa2")
    var selecaofaixa2 = e2.options[e2.selectedIndex].text

    var e3 = document.getElementById("selecaofaixa3")
    var selecaofaixa3 = e3.options[e3.selectedIndex].text

    var e4 = document.getElementById("selecaofaixa4")
    var selecaofaixa4 = e4.options[e4.selectedIndex].text

    var valor1 = ''
    var valor2 = ''
    var valor3 = 0
    var valor4 = ''

    if(selecaofaixa1 == "Preto (0)"){ 
        valor1 = '0'
        document.getElementById("band-one").style.backgroundColor = "black"
    }
    else if(selecaofaixa1 == "Marrom (1)"){ 
        valor1 = '1'
        document.getElementById("band-one").style.backgroundColor = "#964B00"
    }
    else if(selecaofaixa1 == "Vermelho (2)"){ 
        valor1 = '2'
        document.getElementById("band-one").style.backgroundColor = "red"
    }
    else if(selecaofaixa1 == "Laranja (3)"){ 
        valor1 = '3'
        document.getElementById("band-one").style.backgroundColor = "orange"
    }
    else if(selecaofaixa1 == "Amarelo (4)"){ 
        valor1 = '4'
        document.getElementById("band-one").style.backgroundColor = "yellow"
    }
    else if(selecaofaixa1 == "Verde (5)"){ 
        valor1 = '5'
        document.getElementById("band-one").style.backgroundColor = "green"
    }
    else if(selecaofaixa1 == "Azul (6)"){ 
        valor1 = '6'
        document.getElementById("band-one").style.backgroundColor = "blue"
    }
    else if(selecaofaixa1 == "Roxo (7)"){ 
        valor1 = '7'
        document.getElementById("band-one").style.backgroundColor = "purple"
    }
    else if(selecaofaixa1 == "Cinza (8)"){ 
        valor1 = '8'
        document.getElementById("band-one").style.backgroundColor = "gray"
    }
    else if(selecaofaixa1 == "Branco (9)"){ 
        valor1 = '9'
        document.getElementById("band-one").style.backgroundColor = "white"
    }
    else { 
        valor1 = '' 
        document.getElementById("band-one").style.backgroundColor = "#dbbc7b"
    }

    if(selecaofaixa2 == "Preto (0)"){ 
        valor2 = '0'
        document.getElementById("band-two").style.backgroundColor = "black"
    }
    else if(selecaofaixa2 == "Marrom (1)"){ 
        valor2 = '1'
        document.getElementById("band-two").style.backgroundColor = "#964B00"
    }
    else if(selecaofaixa2 == "Vermelho (2)"){ 
        valor2 = '2'
        document.getElementById("band-two").style.backgroundColor = "red"
    }
    else if(selecaofaixa2 == "Laranja (3)"){ 
        valor2 = '3'
        document.getElementById("band-two").style.backgroundColor = "orange"
    }
    else if(selecaofaixa2 == "Amarelo (4)"){ 
        valor2 = '4'
        document.getElementById("band-two").style.backgroundColor = "yellow"
    }
    else if(selecaofaixa2 == "Verde (5)"){ 
        valor2 = '5'
        document.getElementById("band-two").style.backgroundColor = "green"
    }
    else if(selecaofaixa2 == "Azul (6)"){ 
        valor2 = '6'
        document.getElementById("band-two").style.backgroundColor = "blue"
    }
    else if(selecaofaixa2 == "Roxo (7)"){ 
        valor2 = '7'
        document.getElementById("band-two").style.backgroundColor = "purple"
    }
    else if(selecaofaixa2 == "Cinza (8)"){ 
        valor2 = '8'
        document.getElementById("band-two").style.backgroundColor = "gray"
    }
    else if(selecaofaixa2 == "Branco (9)"){ 
        valor2 = '9'
        document.getElementById("band-two").style.backgroundColor = "white"
    }
    else { 
        valor2 = '' 
        document.getElementById("band-two").style.backgroundColor = "#dbbc7b"
    }
    
    if(selecaofaixa3 == "Prata (0.01 Ω)"){ 
        valor3 = 0.01
        document.getElementById("band-multiplier").style.backgroundColor = "#A8A9AD"
    }
    else if(selecaofaixa3 == "Ouro (0.1 Ω)"){ 
        valor3 = 0.1
        document.getElementById("band-multiplier").style.backgroundColor = "gold"
    }
    else if(selecaofaixa3 == "Preto (1 Ω)"){ 
        valor3 = 1 
        document.getElementById("band-multiplier").style.backgroundColor = "black"
    }
    else if(selecaofaixa3 == "Marrom (10 Ω)"){ 
        valor3 = 10 
        document.getElementById("band-multiplier").style.backgroundColor = "#964B00"
    }
    else if(selecaofaixa3 == "Vermelho (100 Ω)"){ 
        valor3 = 100 
        document.getElementById("band-multiplier").style.backgroundColor = "red"
    }
    else if(selecaofaixa3 == "Laranja (1K Ω)"){ 
        valor3 = 1000 
        document.getElementById("band-multiplier").style.backgroundColor = "orange"
    }
    else if(selecaofaixa3 == "Amarelo (10K Ω)"){ 
        valor3 = 10000 
        document.getElementById("band-multiplier").style.backgroundColor = "yellow"
    }
    else if(selecaofaixa3 == "Verde (100K Ω)"){ 
        valor3 = 100000 
        document.getElementById("band-multiplier").style.backgroundColor = "green"
    }
    else if(selecaofaixa3 == "Azul (1M Ω)"){ 
        valor3 = 1000000 
        document.getElementById("band-multiplier").style.backgroundColor = "blue"
    }
    else if(selecaofaixa3 == "Roxo (10M Ω)"){ 
        valor3 = 10000000 
        document.getElementById("band-multiplier").style.backgroundColor = "purple"
    }
    else { 
        valor3 = '' 
        document.getElementById("band-multiplier").style.backgroundColor = "#dbbc7b"
    }
    
    if(selecaofaixa4 == "Prata (± 10%)")  { 
        valor4 = ' ± 10%' 
        document.getElementById("band-tolerance").style.backgroundColor = "#A8A9AD"
    }
    else if(selecaofaixa4 == "Ouro (± 5%)")    { 
        valor4 = ' ± 5%' 
        document.getElementById("band-tolerance").style.backgroundColor = "gold"
    }
    else if(selecaofaixa4 == "Marrom (± 1%)")  { 
        valor4 = ' ± 1%' 
        document.getElementById("band-tolerance").style.backgroundColor = "#964B00"
    }
    else if(selecaofaixa4 == "Vermelho (± 2%)"){ 
        valor4 = ' ± 2%' 
        document.getElementById("band-tolerance").style.backgroundColor = "red"
    }
    else if(selecaofaixa4 == "Verde (± 0.5%)") { 
        valor4 = ' ± 0.5%' 
        document.getElementById("band-tolerance").style.backgroundColor = "green"
    }
    else if(selecaofaixa4 == "Azul (± 0.25%)") { 
        valor4 = ' ± 0.25%' 
        document.getElementById("band-tolerance").style.backgroundColor = "blue"
    }
    else if(selecaofaixa4 == "Roxo (± 0.1%)")  { 
        valor4 = ' ± 0.1%' 
        document.getElementById("band-tolerance").style.backgroundColor = "purple"
    }
    else {
        valor4 = '' 
        document.getElementById("band-tolerance").style.backgroundColor = "#dbbc7b"
    }

    /* ========== Cálculo e Impressão ========== */

    if(valor1 == '' || valor2 == '' || valor3 == 0 || valor4 == '') {
        document.getElementById("valorResistor").innerHTML = "Resistor de 0 Ω"
    } else {
        document.getElementById("valorResistor").innerHTML = "Resistor de " + (parseFloat(valor1 + valor2) * valor3).toFixed(3).replace(/\.?0+$/, '')  + " Ω" + valor4
    }

}
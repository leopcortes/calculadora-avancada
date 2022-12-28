/* =========== Calculadora SIGAA =========== */

function calcularSigaa(){
    if (varformterminal != ""){
        var varformterminal = document.getElementById("formterminal").value;
         
        var codigo = varformterminal;
        var modo  = "dia";
        var dias  = ["","Domingo","Segunda-feira","Terça-feira","Quarta-Feira","Quinta-feira","Sexta-feira","Sábado"];
        var manha = ["","8am - 8:55am","8:55am - 9:50am","10am - 10:50am","10:55am - 11:50am","12am - 12:55am","",""];
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

/* =========== Calculadora Científica =========== */

function calculadoraCientifica(){

}

/* =========== Calculadora Sistemas =========== */

function vetor() {
    this.length = vetor.arguments.length
    for (var i = 0; i < this.length; i++)
    this[i+1] = vetor.arguments[i]
}

function calcularSistema(){

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

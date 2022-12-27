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



/* =========== Calculadora Sistemas =========== */

function calcularSistema(){

    /* ========== Associação HTML -> JS ========== */

    var _eq1_X = document.getElementById("eq1_X").value
    var _eq1_Y = document.getElementById("eq1_Y").value
    var _eq1_Z = document.getElementById("eq1_Z").value
    var _eq1_A = document.getElementById("eq1_A").value
    var _eq2_X = document.getElementById("eq2_X").value
    var _eq2_Y = document.getElementById("eq2_Y").value
    var _eq2_Z = document.getElementById("eq2_Z").value
    var _eq2_A = document.getElementById("eq2_A").value
    var _eq3_X = document.getElementById("eq3_X").value
    var _eq3_Y = document.getElementById("eq3_Y").value
    var _eq3_Z = document.getElementById("eq3_Z").value
    var _eq3_A = document.getElementById("eq3_A").value

    var eq1_X = parseFloat(_eq1_X)
    var eq1_Y = parseFloat(_eq1_Y)
    var eq1_Z = parseFloat(_eq1_Z)
    var eq1_A = parseFloat(_eq1_A)
    var eq2_X = parseFloat(_eq2_X)
    var eq2_Y = parseFloat(_eq2_Y)
    var eq2_Z = parseFloat(_eq2_Z)
    var eq2_A = parseFloat(_eq2_A)
    var eq3_X = parseFloat(_eq3_X)
    var eq3_Y = parseFloat(_eq3_Y)
    var eq3_Z = parseFloat(_eq3_Z)
    var eq3_A = parseFloat(_eq3_A)

    /* ========== Cálculo ========== */
    
    var linhas = 0
    var colunas = 0

    var X_final = 0
    var Y_final = 0
    var Z_final = 0
    var A_final = 0
    
    if(eq1_X != 0 || eq1_Y != 0 || eq1_Z != 0){ linhas++ }
    if(eq2_X != 0 || eq2_Y != 0 || eq2_Z != 0){ linhas++ }
    if(eq3_X != 0 || eq3_Y != 0 || eq3_Z != 0){ linhas++ }

    if(linhas == 0){ // Tudo vazio
        colunas = 0

        X_final = 0
        Y_final = 0
        Z_final = 0
        A_final = 0
    }
    else if(linhas == 1){ // 1 linha
        if(eq1_X != 0){ colunas++ }
        if(eq1_Y != 0){ colunas++ }
        if(eq1_Z != 0){ colunas++ }

        if(colunas == 1){ // 1 linha e 1 coluna
            X_final = eq1_X 
            Y_final = eq1_Y 
            Z_final = eq1_Z
            A_final = eq1_A 
        }
        else if(colunas == 2){ // 1 linha e 2 colunas
            X_final = eq1_X 
            Y_final = eq1_Y 
            Z_final = eq1_Z
            A_final = eq1_A 
        }
        else if(colunas == 3){ // 1 linha e 3 colunas
            X_final = eq1_X 
            Y_final = eq1_Y 
            Z_final = eq1_Z
            A_final = eq1_A 
        }
    }
    else if(linhas == 2){ // 2 linhas
        if(eq1_X != 0 || eq2_X != 0){ colunas++ }
        if(eq1_Y != 0 || eq2_Y != 0){ colunas++ }
        if(eq1_Z != 0 || eq2_Z != 0){ colunas++ }

        if(colunas == 1){ // 2 linhas e 1 coluna
            X_final = eq1_X + eq2_X
            Y_final = eq1_Y + eq2_Y
            Z_final = eq1_Z + eq2_Z
            A_final = eq1_A + eq2_A 
        }
        else if(colunas == 2){ // 2 linhas e 2 colunas
            Y_final = ((eq2_A * eq1_X) - (eq2_X * eq1_A)) / ((eq1_X * eq2_Y) - (eq2_X * eq1_Y))
            X_final = (eq1_A - (eq1_Y * Y_final)) / eq1_X
            Z_final = 0
            A_final = 0
        }
        else if(colunas == 3){ // 2 linhas e 3 colunas
            X_final = "erro!"
            Y_final = "erro!"
            Z_final = "erro!"
            A_final = "erro!"
        }
    }
    else if(linhas == 3){
        if(eq1_X != 0 || eq2_X != 0 || eq3_X != 0){ colunas++ }
        if(eq1_Y != 0 || eq2_Y != 0 || eq3_Y != 0){ colunas++ }
        if(eq1_Z != 0 || eq2_Z != 0 || eq3_Z != 0){ colunas++ }

        if(colunas == 1){ // 3 linhas e 1 coluna
            X_final = eq1_X + eq2_X + eq3_X 
            Y_final = eq1_Y + eq2_Y + eq3_Y 
            Z_final = eq1_Z + eq2_Z + eq3_Z 
            A_final = eq1_A + eq2_A + eq3_A
        }
        else if(colunas == 2){ // 3 linhas e 2 colunas

        }
        else if(colunas == 3){ // 3 linhas e 3 colunas

        }
    }

    /* ========== Impressão ========== */

    console.log("linhas = " + linhas + "; colunas = " + colunas)
    console.log("eq1_X = " + eq1_X + "; eq1_Y = " + eq1_Y + "; eq1_Z = " + eq1_Z + "; eq1_A = " + eq1_A + "\neq2_X = " + eq2_X + "; eq2_Y = " + eq2_Y + "; eq2_Z = " + eq2_Z + "; eq2_A = " + eq2_A + "\neq3_X = " + eq3_X + "; eq3_Y = " + eq3_Y + "; eq3_Z = " + eq3_Z + "; eq3_A = " + eq3_A)
    console.log("X_final = " + X_final + "; Y_final = " + Y_final + "; Z_final = " + Z_final + "; A_final = " + A_final)

    console.log("respostaSistemaX = " + respostaSistemaX + "\nrespostaSistemaY = " + respostaSistemaY + "\nrespostaSistemaZ = " + respostaSistemaZ + "\nrespostaSistemaA = " + respostaSistemaA)

    if(typeof X_final == "string"){ // Quando 2 linhas e 3 colunas
        document.getElementById("respostaSistema").innerHTML = "x = erro!" + "; y = erro!" + "; z = erro!"
    }
    else{
        var respostaSistemaX = parseFloat(X_final)
        var respostaSistemaY = parseFloat(Y_final)
        var respostaSistemaZ = parseFloat(Z_final)
        var respostaSistemaA = parseFloat(A_final)
    
        document.getElementById("respostaSistema").innerHTML = "x = " + respostaSistemaX + "; y = " + respostaSistemaY + "; z = " + respostaSistemaZ
    }
}

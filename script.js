var textoSeparado = "";

function criptografarTexto() {
    var texto = document.getElementById("digitar").value;
    textoSeparado = texto;
    var criptografado = "";
    for (var i = 0; i < texto.length; i++) {
        var letra = texto.charAt(i);
        criptografado += criptografarLetra(letra);
    }
    document.getElementById("fieldset").textContent = criptografado;
    document.getElementById("digitar").value = "";
}


function descriptografarTexto() {
    var descriptografado = "";
    for (var i = 0; i < textoSeparado.length; i += 2) {
        var letrasCriptografadas = textoSeparado.substring(i, i + 2);
        descriptografado += descriptografarLetra(letrasCriptografadas);
    }
    var asideTexto = document.getElementById("aside__texto");
    asideTexto.innerHTML = "<b>" + descriptografado + "</b>"; // Exibir o texto descriptografado em negrito
    document.getElementById("botao_copiar").style.display = "block"; // Tornar o botão de copiar visível
    document.getElementById("aside").innerHTML = ""; // Limpar todo o conteúdo do aside
}


function criptografarLetra(letra) {
    switch (letra) {
        case 'a': return 'ai';
        case 'e': return 'entx';
        case 'i': return 'imx';
        case 'o': return 'obx';
        case 'u': return 'ufx';
        default: return letra;
    }
}

function descriptografarLetra(letrasCriptografadas) {
    switch (letrasCriptografadas) {
        case 'ai': return 'a';
        case 'entx': return 'e';
        case 'imx': return 'i';
        case 'obx': return 'o';
        case 'ufx': return 'u';
        default: return letrasCriptografadas;
    }
}

function copiarTexto() {
    var texto = document.getElementById("aside__texto").textContent;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado para a área de transferência!");
    }, function(err) {
        console.error('Falha ao copiar texto: ', err);
    });
}



/*var textoSeparado = "";

function criptografarTexto() {
    var texto = document.getElementById("digitar").value;
    textoSeparado = texto;
    var criptografado = "";
    for (var i = 0; i < texto.length; i++) {
        var letra = texto.charAt(i);
        criptografado += criptografarLetra(letra);
    }
    document.getElementById("fieldset").textContent = criptografado;
    document.getElementById("digitar").value = "";
}



function descriptografarTexto() {
    var descriptografado = "";
    for (var i = 0; i < textoSeparado.length; i += 2) {
        var letrasCriptografadas = textoSeparado.substring(i, i + 2);
        descriptografado += descriptografarLetra(letrasCriptografadas);
    }
    var asideTexto = document.getElementById("aside__texto");
    asideTexto.innerHTML = "<b>" + descriptografado + "</b>"; // Exibir o texto descriptografado em negrito
    document.getElementById("botao_copiar").style.display = "block"; // Tornar o botão de copiar visível
    document.getElementById("aside").innerHTML = ""; // Apagar todo o conteúdo do aside
}


function criptografarLetra(letra) {
    switch (letra) {
        case 'a': return 'ai';
        case 'e': return 'entx';
        case 'i': return 'imx';
        case 'o': return 'obx';
        case 'u': return 'ufx';
        default: return letra;
    }
}

function descriptografarLetra(letrasCriptografadas) {
    switch (letrasCriptografadas) {
        case 'ai': return 'a';
        case 'entx': return 'e';
        case 'imx': return 'i';
        case 'obx': return 'o';
        case 'ufx': return 'u';
        default: return letrasCriptografadas;
    }
}

function copiarTexto() {
    var texto = document.getElementById("aside__texto").textContent;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado para a área de transferência!");
    }, function(err) {
        console.error('Falha ao copiar texto: ', err);
    });
}
*/










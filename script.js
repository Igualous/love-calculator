function verificarNomes() {
    // Obter os valores dos campos de entrada
    let nome1= document.getElementById("nome1").value;
    let nome2 = document.getElementById("nome2").value;

    // Verificar se os nomes específicos foram inseridos
    if (nome1 === "Eduarda" && nome2 === "Igor") {
        // Se os nomes específicos foram inseridos, atualizar o conteúdo do HTML
        document.getElementById("resultado").innerHTML = "200%!";
        document.getElementById("instructions").innerHTML = "Parabéns! Você achou sua alma gêmea!";
       
        let audio = new Audio('musica.mp3');
        audio.play();  
    } else if (nome1 === "Igor" && nome2 === "Eduarda") {
        document.getElementById("resultado").innerHTML = "200%!";
        document.getElementById("instructions").innerHTML = "Parabéns! Você achou sua alma gêmea!";
       
        let audio = new Audio('musica.mp3');
        audio.play();
    } else if  (nome1 === "eduarda" && nome2 === "igor") {
        document.getElementById("resultado").innerHTML = "200%!";
        document.getElementById("instructions").innerHTML = "Parabéns! Você achou sua alma gêmea!";
       
        let audio = new Audio('musica.mp3');
        audio.play();
    } else if  (nome1 === "igor" && nome2 === "eduarda") {
        document.getElementById("resultado").innerHTML = "200%!";
        document.getElementById("instructions").innerHTML = "Parabéns! Você achou sua alma gêmea!";
       
        let audio = new Audio('musica.mp3');
        audio.play();
    } else if (!nome1 || !nome2) {
        document.getElementById("instructions").innerHTML = "Por favor, forneça os dois nomes";
    }
    else {
        // Se os nomes específicos não foram inseridos, limpar o conteúdo do HTML
        document.getElementById("resultado").innerHTML = "0%";
        document.getElementById("instructions").innerHTML = "Vish, com esse(a) aí vai ser difícil :( <br/> Que tal tentar outro nome?";
    }
}

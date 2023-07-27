var nomes = [];
var senhas =[];
var contador = 0;

var continuar = true

while (continuar) {
    var opcao = prompt("Escola uma opção: 1- Cadastro ; 2- Login ; 3- Encerrar");
    switch (opcao) {
        case "1":
            nomes[contador] = prompt("Insira um nome");
            senhas[contador] = prompt("Insira uma senha");
            contador++
            break;
        case "2":
            var nomeLogin = prompt("Insira seu nome");
            var senhaLogin = prompt("Insira sua senha");
            for (var index = 0; index < nomes.length; index++) {
                if (nomeLogin == nomes[index]) {
                    if (senhaLogin == senhas[index]) {
                        console.log("Login feito com sucesso!");
                        index = nomes.length;
                    }
                } else if (index == nomes.length - 1) {
                  console.log("Nome ou senha incorretos.");
                }
            }
            break;
        case "3":
            var nomesSup = [];
            var senhasSup = [];
            var contadorSup = 0;
            var nomeExcluir = prompt("Insira o nome que deseja excluir");
            for (var i = 0; i < nomes.length; i++) {
                if(nomeExcluir == nomes[i]) {
                    console.log("Usuário excluido.")
                } else {
                    nomesSup[contadorSup] = nomes[i]
                    senhasSup[contadorSup] = senhas[i]
                    contadorSup++
                }    
            }
            nomes = nomesSup
            senhas = senhasSup
            break;
   
        default: 
          continuar = false
          break;
    }
}


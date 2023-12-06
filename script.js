import input from 'readline-sync';

console.log("Ano novo está chegando\n");

//Dados de Mariah Carey
const nome = "Mariah Carey"; // nome
let idadeMariah = 54; // idade
const dataAtual = new Date(); // peguei a data atual do sistema
const anoAtual = dataAtual.getFullYear(); // peguei somente o ano atual
const anoDeNascimento = anoAtual - idadeMariah;

console.log(`O ano de nascimento de ${nome} é: ${anoDeNascimento} \n`);

let quartaFeira = true
console.log(`A variável quarta feira tem o valor ${quartaFeira} e é do tipo ${typeof quartaFeira}\n`);

//Dados pessoais
let IdadePEssoal = 16;

if(IdadePEssoal >= 18){
    console.log("Você poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey\n");
} else{
    console.log( "Sinto muito, mas assistirá da tv globo\n");
}

let mesNascimento = input.question("Informe o mes em que voce nasceu:\n");

if( mesNascimento === "Junho" || 
    mesNascimento === "Agosto" || 
    mesNascimento === "Dezembro" ){
    console.log("Uma ou mais opções estão corretas\n")
} else{
    console.log(`Algo de errado não está certo, o mês digitado foi o mês de ${mesNascimento}\n`);
}









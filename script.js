var nome = "GIOVANNA NOVELLI";
// string fica em aspas duplas

var notaPrimeiroBimestre = 8.25;
var notaSegundoBimestre = 9;
var notaTerceiroBimestre = 7.56;
var notaQuartoBimestre = 10;
var notaFinal =
  (notaPrimeiroBimestre +
    notaSegundoBimestre +
    notaTerceiroBimestre +
    notaQuartoBimestre) /
  4;

var notaFixada = notaFinal.toFixed(1);

console.log("Bem vindx " + nome);
console.log(notaFixada);

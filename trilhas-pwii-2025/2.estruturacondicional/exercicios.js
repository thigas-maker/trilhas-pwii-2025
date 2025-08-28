//1
/*let x=9;

if(x==1){
    console.log("Segunda-feira");
}
else if(x==2){
    console.log("Terça-feira");
}
else if (x == 3){
    console.log("Quarta-feira");
}
else if(x == 4){
    console.log("Quinta-feira");
}
else if(x == 5){
    console.log("Sexta-feira");
}
else if(x == 6){
    console.log("Sábado");
}
else if (x==7){
    console.log("Domingo");
}
else{
    console.log("Dia não reconhecido");
}*/


//2
/*let nota=11;

if (nota >= 6 && nota <=10){
    console.log("Você esta aprovado");
}
else if ( nota >=4 && nota <=6){
    console.log("Você esta de recuperação");
}
else if (nota < 4){
    console.log("Você esta reprovado");
}
else{
    console.log("Nota inválida");
}*/


//3
let opcao=3;
let x=2;
let y=2;
switch (opcao){
    case 1:
        console.log("Somando dois números: ", x+y);
        break;
    case 2:
        console.log("Subtraindo dois números", x-y);
        break;
    case 3:
        console.log("Multiplicando dois números", x*y);
        break;
    default:
        console.log("Opção inválida");
}
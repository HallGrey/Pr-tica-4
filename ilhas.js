let saque = Number(prompt('Digite quanto deseja sacar: GC$'));
let notasCinqueta = 0;
let notasDez = 0;
let notasCinco = 0;
let notasUm = 0;

while (saque){
    if (saque >= 50){
        saque = saque - 50
        notasCinqueta++
    }else if (saque >= 10){
        saque = saque - 10
        notasDez++
    }else if (saque >= 5){
        saque = saque - 5
        notasCinco++
    }else if (saque >= 1){
        saque = saque - 1
        notasUm++
    }else{
        alert("Número digitado não suportado, digite um número inteiro");
        break
    }
}

document.write(`GC$ 50 -> ${notasCinqueta}<br>`);
document.write(`GC$ 10 -> ${notasDez}<br>`);
document.write(`GC$ 05 -> ${notasCinco}<br>`);
document.write(`GC$ 01 -> ${notasUm}<br>`);
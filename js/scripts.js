function exe0(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    // mostra o resultado
     alert(`A média das notas é ${media.toFixed(1)}`)
}





function pesquisaSatisfacao(){
    let nota // guarda as notas do participante
    let conta = 1 // vai contar de 1 a 10
    let contaSatisfeitos = 0 // temos 0 satisfeitos inicialmente
    let contaInsatisfeitos = 0 // temos 0 insatisfeitos inicialmente
    let soma = 0
    while (conta <= 10){
        nota = Number(prompt(`Informe a nota do participante ${conta}`))
        if (nota < 0 || nota > 10 || isNaN(nota)){
            alert(`Nota inválida`)
            continue // volta para o início do loop
        }
        else if (nota >= 8){
            contaSatisfeitos++ // contaSatisfeitos = contaSatisfeitos + 1
        }
        else if (nota < 5){
            contaInsatisfeitos++ // contaInsatisfeitos = contaInsatisfeitos + 1
        }
        soma = soma + nota
        conta++ // conta = conta + 1 (incrementa conta)
    }
    alert(`Satisfeitos ${contaSatisfeitos} Insatisfeitos ${contaInsatisfeitos}`)
    let media = soma / 10
    alert(`A média é ${media.toFixed(1)}`)
}


function exe1(){
    let a,b,c,d, i, aux    // aux = auxiliar 
    let grupo =1
    while(grupo<=5){
    a= Number(prompt("informe o valor de a "))
    b= Number(prompt("informe o valor de b "))
    c= Number(prompt("informe o valor de c "))
    d= Number(prompt("informe o valor de d "))
    i=0

    while(i<=3){
        
        if(a>b){
            aux =a; a=b; b=aux
        }

        if(b>c){
            aux = b; b=c; c=aux
        }
        if(c>d){
            aux=c; c=d; d=aux
        }
        
        i++
    

    }
    alert (`ordem crescente: ${a} ${b} ${c} ${d} `)
    alert (`ordem decrescente: ${d} ${c} ${b} ${a} `)

    grupo++
    }
}
function exe2(){
    let preco = 5.0
    let quant = 120 
    let lucro 
    let despesa =200
    let aux =""
    while(preco>= 1.0){
        lucro = (preco* quant)- despesa
        aux= aux + "\n"+ ( $(preco) - $(quant) - $(despesa) - $(lucro))
        quant =quant +25
        preco = preco - 0.5
    }
    alert( aux)
}
























function exe3(){
    let conta, idade, soma, porcentagem 

    let f1=0 
    let f2=0
    let f3=0 
    let f4=0
    let f5 = 0 
    conta = 0;


    while(conta<=8){
        let idade = parseInt(window.prompt('Digite uma idade '))
        if(idade < 0 || isNaN(idade) || idade >120){
            alert( 'idade invalida')
            continue;
        }
        
        else if( idade <=15 ){
            conta++
        }
        else if(idade >15 && idade <=30){
            f2++
        }
        else if ( idade > 30 && idade <=45){
            f3++
        }
        else if( idade > 45 && idade <= 60){
            f4++
        }
        else if ( idade >60 ){
            f5++
        }
    }
    soma= f1+f2 +f3 +f4 +f5
    porcentagem = (f1/soma)*100;
    alert("porcentagem relação F1:", porcentagem , "%");
    porcentagem = (f5/ soma)* 100;
    alert( "porcentagem relação F5: ", porcentagem, "%")
}
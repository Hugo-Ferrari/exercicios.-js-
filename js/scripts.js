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
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
    //--------------------------------------------------------------------------------------------------------------------------------------------------------
}
function exe2(){
    let preco = 5.0
    let quant = 120 
    let despesa =200
    let lucro, MaiorLucro = 0
    let aux =""

    while(preco>= 1.0){
        lucro = (preco* quant)- despesa
        if(lucro > MaiorLucro){
            MaiorLucro = lucro
        }
        aux= aux + "\n"+ ( `${preco} - ${quant} - ${despesa} - ${lucro}`)
        quant =quant +25
        preco = preco - 0.5
    }
    alert( aux)
    alert(MaiorLucro )
}
//------------------------------------------------------------------------------------------------------------------------------
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

function exe4(){
    let num=0
    let tab=0 
    

    alert("escreva um numero para ser feito a tabuada");
    num= parseInt(window.prompt("digite um número")) 
    for(let i=0; i<=10; i++){
        tab= num*i
        
        console.log(`${num} X ${i} = ${tab}`)
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function exe5(){
    
    let tab = 0

    for(let num =0; num<=10; num++){
        for(let i= 0; i<=10; i++){
            
             tab= num*  i 
            
             console.log(`${num} X ${i} = ${tab}`)
            }
        console.log(`\n`)  
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------

function exe6(){
    let total=0,i
    let valorV =0, valorP =0 

    for(i=0; i<15; i++){
    let codigo = window.prompt("digite sua forma de pagamento (v para avista e p para prazo) ");
    let valor = parseFloat(window.prompt("digite o valor da compra"));
    if(codigo == "v"){
        valorV= valor+ valorV
        

    }
    else if(codigo == "p"){
        valorP = valor+ valorP
        
    }
    else{
        alert("codigo invalido, por favor tente de novo!!")
        i--;
    }
}
    total= valorP+valorV
    alert(`O valor total das compras à vista foi de: R$ ${valorV}`);
alert(`O valor total de compras a prazo foi de: R$ ${valorP}`);
alert(`O total das compras efetuadas foi de: R$ ${total}`);


}

function exe7(){
    let idade50=0, altura10e15=0, quantA=0, peso40=0, porcentagem,media, i

     

    for(i=0;i<5;i++){
        let idade = parseInt(window.prompt("digite a sua idade"));
        let peso = parseInt(window.prompt("digite o seu peso"))
        let altura = parseInt( window.prompt("digite a sua altura "))

        if(idade>50){
            idade50++
        }
        if(idade<20 && idade>10){
            altura10e15= altura10e15+altura 
            quantA++
        }
        if(peso<=40){
            peso40++
        }
    }
    if (quantA > 0) {
    media = altura10e15 / quantA;
    } 
    else {
    media = 0;
    }
    media= altura10e15/quantA
    porcentagem = (peso40/i)*100
    
    alert(`a qauntidade de pessoas com idade superior a 50 é de: ${idade50}`);
    alert(`a media das alturas de pessoas entre 10 e 20 anos é de: ${media}`);
    alert(`a porcentagem de pessoas com peso menor que 40 kg é de ${porcentagem} %`);
}
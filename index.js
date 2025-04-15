function cores(){

    let resistencia = document.getElementById('in').value;
    let tolerancia = document.getElementById('tol');
    let numero_Separado = [];
    for(let i = 0; i < resistencia.length; i++){
        console.log(resistencia[i])
        numero_Separado.push(resistencia[i])
    }
    if(resistencia.length == 3){
        if(numero_Separado[2] != 0){
            alert('faça isso no resistor de precisão');
        }
    }
    let numero_concat = resistencia[0] + resistencia[1];
    let multiplicador = resistencia / numero_concat;

    let cor1 = document.getElementById('cor1');
    let cor2 = document.getElementById('cor2');
    let cor3 = document.getElementById('cor3');

    if(numero_Separado[0] <= 0){
        alert('Resistência inválida');
    }

    if(resistencia <= 500){
        tolerancia.style.backgroundColor = 'gold';
    }else if(resistencia >500 && resistencia <=100000){
        tolerancia.style.backgroundColor = 'silver';
    }else if(resistencia > 100000){
        tolerancia.style.backgroundColor = 'burlywood'
    }

    switch(multiplicador){

        case 1:
            console.log('preto')
            cor3.style.backgroundColor = 'black'
        break;

        case 10:
            console.log('marrom')
            cor3.style.backgroundColor = 'rgb(99, 67, 22)'
        break;

        case 100:
            console.log('vermelho')
            cor3.style.backgroundColor = 'red'
        break;

        case 1000:
            console.log('laranja')
            cor3.style.backgroundColor = 'orange'
        break;

        case 10000:
            console.log('amarelo')
            cor3.style.backgroundColor = 'yellow'
        break;

        case 100000:
            console.log('verde')
            cor3.style.backgroundColor = 'green'
        break;

        case 1000000:
            console.log('azul')
            cor3.style.backgroundColor = 'blue'
        break;

        case 10000000:
            console.log('violeta')
            cor3.style.backgroundColor = 'purple'
        break;
    }

    switch(numero_Separado[0]){

        case '1':
            console.log("marrom")
            cor1.style.backgroundColor = 'rgb(99, 67, 22)'
        break;

        case '2':
            console.log("vermelho")
            cor1.style.backgroundColor = 'red'
        break;

        case '3':
            console.log("laranja")
            cor1.style.backgroundColor = 'orange'
        break;

        case '4':
            console.log("amarelo")
            cor1.style.backgroundColor = 'yellow'
        break;

        case '5':
            console.log("verde")
            cor1.style.backgroundColor = 'green'
        break;

        case '6':
            console.log("azul")
            cor1.style.backgroundColor = 'blue'
        break;

        case '7':
            console.log("violeta")
            cor1.style.backgroundColor = 'purple'
        break;

        case '8':
            console.log("cinza")
            cor1.style.backgroundColor = 'gray'
        break;

        case '9':
            console.log("branco")
            cor1.style.backgroundColor = 'white'
        break;
    }

    switch(numero_Separado[1]){

        case '0':
            console.log('preto')
            cor2.style.backgroundColor = 'black'
        break;

        case '1':
            console.log("rgb(99, 67, 22)")
            cor2.style.backgroundColor = 'rgb(99, 67, 22)'
        break;

        case '2':
            console.log("vermelho")
            cor2.style.backgroundColor = 'red'
        break;

        case '3':
            console.log("laranja")
            cor2.style.backgroundColor = 'orange'
        break;

        case '4':
            console.log("amarelo")
            cor2.style.backgroundColor = 'yellow'
        break;

        case '5':
            console.log("verde")
            cor2.style.backgroundColor = 'green'
        break;

        case '6':
            console.log("azul")
            cor2.style.backgroundColor = 'blue'
        break;

        case '7':
            console.log("violeta")
            cor2.style.backgroundColor = 'purple'
        break;

        case '8':
            console.log("cinza")
            cor2.style.backgroundColor = 'gray'
        break;

        case '9':
            console.log("branco")
            cor2.style.backgroundColor = 'white'
        break;
    }

    
}

function cor2(){
    let resistencia = document.getElementById('resist2').value;
    let numero_Separado = [];
    let tolerancia = document.getElementById('tol2');
    for(let i = 0; i < resistencia.length; i++){
        numero_Separado.push(resistencia[i])
    }
    if(numero_Separado[0] <= 0){
        alert('Resistência inválida');
    }
    let numero_concat = numero_Separado[0] + numero_Separado[1] + numero_Separado[2];
    let multiplicador = resistencia / numero_concat;

    let cor11 = document.getElementById('cor11');
    let cor22 = document.getElementById('cor22');
    let cor33 = document.getElementById('cor33');
    let mult = document.getElementById('cormult');
    let cortol = document.getElementById('tol');

    if(numero_Separado[2] == undefined){
        numero_Separado[2] = "0";
        numero_concat = numero_Separado[0] + numero_Separado[1] + numero_Separado[2];
        multiplicador = resistencia / numero_concat;
    }

    if(resistencia <= 500){
        tolerancia.style.backgroundColor = 'gold';
    }else if(resistencia >500 && resistencia <=100000){
        tolerancia.style.backgroundColor = 'silver';
    }else if(resistencia > 100000){
        tolerancia.style.backgroundColor = 'burlywood'
    }

    switch(numero_Separado[0]){

        case '1':
            console.log("marrom")
            cor11.style.backgroundColor = 'rgb(99, 67, 22)'
        break;

        case '2':
            console.log("vermelho")
            cor11.style.backgroundColor = 'red'
        break;

        case '3':
            console.log("laranja")
            cor11.style.backgroundColor = 'orange'
        break;

        case '4':
            console.log("amarelo")
            cor11.style.backgroundColor = 'yellow'
        break;

        case '5':
            console.log("verde")
            cor11.style.backgroundColor = 'green'
        break;

        case '6':
            console.log("azul")
            cor11.style.backgroundColor = 'blue'
        break;

        case '7':
            console.log("violeta")
            cor11.style.backgroundColor = 'purple'
        break;

        case '8':
            console.log("cinza")
            cor11.style.backgroundColor = 'gray'
        break;

        case '9':
            console.log("branco")
            cor11.style.backgroundColor = 'white'
        break;
    }

    switch(numero_Separado[1]){

        case '0':
            console.log('preto')
            cor22.style.backgroundColor = 'black'
        break;

        case '1':
            console.log("rgb(99, 67, 22)")
            cor22.style.backgroundColor = 'rgb(99, 67, 22)'
        break;

        case '2':
            console.log("vermelho")
            cor22.style.backgroundColor = 'red'
        break;

        case '3':
            console.log("laranja")
            cor22.style.backgroundColor = 'orange'
        break;

        case '4':
            console.log("amarelo")
            cor22.style.backgroundColor = 'yellow'
        break;

        case '5':
            console.log("verde")
            cor22.style.backgroundColor = 'green'
        break;

        case '6':
            console.log("azul")
            cor22.style.backgroundColor = 'blue'
        break;

        case '7':
            console.log("violeta")
            cor22.style.backgroundColor = 'purple'
        break;

        case '8':
            console.log("cinza")
            cor22.style.backgroundColor = 'gray'
        break;

        case '9':
            console.log("branco")
            cor22.style.backgroundColor = 'white'
        break;
    }
    switch(numero_Separado[2]){
        case '0':
            console.log('preto')
            cor33.style.backgroundColor = 'black'
        break;

        case '1':
            console.log("rgb(99, 67, 22)")
            cor33.style.backgroundColor = 'rgb(99, 67, 22)'
        break;

        case '2':
            console.log("vermelho")
            cor33.style.backgroundColor = 'red'
        break;

        case '3':
            console.log("laranja")
            cor33.style.backgroundColor = 'orange'
        break;

        case '4':
            console.log("amarelo")
            cor33.style.backgroundColor = 'yellow'
        break;

        case '5':
            console.log("verde")
            cor33.style.backgroundColor = 'green'
        break;

        case '6':
            console.log("azul")
            cor33.style.backgroundColor = 'blue'
        break;

        case '7':
            console.log("violeta")
            cor33.style.backgroundColor = 'purple'
        break;

        case '8':
            console.log("cinza")
            cor33.style.backgroundColor = 'gray'
        break;

        case '9':
            console.log("branco")
            cor33.style.backgroundColor = 'white'
        break;
    }
    switch(multiplicador){
        case 0.1:
            console.log('gold')
            mult.style.backgroundColor = 'gold'
        break
        case 0.01:
            console.log('silver')
            mult.style.backgroundColor = 'silver'
        break
        case 1:
            console.log('preto')
            mult.style.backgroundColor = 'black'
        break;
        case 10:
            console.log('marrom')
            mult.style.backgroundColor = 'rgb(99, 67, 22)'
        break;
        case 100:
            console.log('vermelho')
            mult.style.backgroundColor = 'red'
        break;
        case 1000:
            console.log('laranja')
            mult.style.backgroundColor = 'orange'
        break;
        case 10000:
            console.log('amarelo')
            mult.style.backgroundColor = 'yellow'
        break;
        case 100000:
            console.log('verde')
            mult.style.backgroundColor = 'green'
        break;
        case 1000000:
            console.log('azul')
            mult.style.backgroundColor = 'blue'
        break;
        case 10000000:
            console.log('violeta')
            mult.style.backgroundColor = 'purple'
        break;
    }  



   
}






// if(numero_Separado[1] == undefined){
//     numero_Separado[1] = 0
// }
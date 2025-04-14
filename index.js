function cores(){

    let resistencia = document.getElementById('in').value;
    let tolerancia = document.getElementById('intol').value;
    let numero_Separado = [];
    for(let i = 0; i < resistencia.length; i++){
        console.log(resistencia[i])
        numero_Separado.push(resistencia[i])
    }
    let numero_concat = resistencia[0] + resistencia[1];
    let multiplicador = resistencia / numero_concat;

    let cor1 = document.getElementById('cor1');
    let cor2 = document.getElementById('cor2');
    let cor3 = document.getElementById('cor3');
    let cortol = document.getElementById('tol');

    

    
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

    switch(tolerancia){
        case '1':
            console.log("rgb(99, 67, 22)")
            cortol.style.backgroundColor = 'rgb(99, 67, 22)'
        break;

        case '2':
            console.log('vermelho')
            cortol.style.backgroundColor = 'red'
        break;

        case '5':
            console.log('ouro')
            cortol.style.backgroundColor = 'gold'
        break;

        case '10':
            console.log('prata')
            cortol.style.backgroundColor = 'silver'
        break;

        case '20':
            console.log('null')
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
    let resistencia = '11'
    let tolerancia = '5'
    let numero_Separado = [];
    for(let i = 0; i < resistencia.length; i++){
        numero_Separado.push(resistencia[i])
    }
    let numero_concat = numero_Separado[0] + numero_Separado[1] + numero_Separado[2];
    let multiplicador = resistencia / numero_concat;

    console.log(numero_Separado[2]);

    if(numero_Separado[2] == undefined){
        numero_Separado[2] = 0;
        let numero_concat = numero_Separado[0] + numero_Separado[1] + numero_Separado[2];
        console.log('1')
    }else{
        console.log("2")
    }

    console.log(numero_concat)
    // switch(multiplicador){
    //     case 0.1:
    //         console.log('gold')
    //     break
    //     case 0.01:
    //         console.log('silver')
    //     break
    //     case 1:
    //         console.log('preto')
            
    //     break;
    //     case 10:
    //         console.log('marrom')
            
    //     break;
    //     case 100:
    //         console.log('vermelho')
            
    //     break;
    //     case 1000:
    //         console.log('laranja')
            
    //     break;
    //     case 10000:
    //         console.log('amarelo')
           
    //     break;
    //     case 100000:
    //         console.log('verde')
           
    //     break;
    //     case 1000000:
    //         console.log('azul')
            
    //     break;
    //     case 10000000:
    //         console.log('violeta')
            
    //     break;
    // }
    // switch(numero_Separado[0]){

    //     case '1':
    //         console.log('amarelo')
    //     break

    // }
    // switch(numero_Separado[1]){
    //     case '1':
    //         console.log('verde')
    //     break
    // }
    // switch(numero_Separado[2]){
    //     case '0':
    //         console.log('preto')
    //     break
    //     case '1':
    //         console.log('azul')
    //     break
    // }
   



    // let cor1 = document.getElementById('cor1');
    // let cor2 = document.getElementById('cor2');
    // let cor3 = document.getElementById('cor3');
    // let cortol = document.getElementById('tol');
}

cor2();




// if(numero_Separado[1] == undefined){
//     numero_Separado[1] = 0
// }
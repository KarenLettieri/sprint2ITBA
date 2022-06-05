const nombre = document.getElementById('nombre')
const monto = document.getElementById('monto')
const miDiv = document.getElementById('respuesta')
const total = document.getElementById('total')
const cada = document.getElementById('cadaUno')

let cont = 0;

const yaPagaron = []

function buscar(str){
    let i = 0;
    let objetoBuscado = undefined;

    while(i < yaPagaron.length && objetoBuscado == undefined){

        if(yaPagaron[i].name == str){
    
            objetoBuscado = yaPagaron[i]
        }else{
            i++
        }
    }
    
    return objetoBuscado;
}

function existencia(str){
    let rta = false
    let i = 0;
    if(yaPagaron.length != 0){

        if(buscar(str) != undefined){
    
            rta = true;
        }
    }

    return rta;
}

function buscarIndex(str){
    let i = 0;
    let objetoBuscado = undefined;

    while(i < yaPagaron.length && objetoBuscado == undefined){
        if(yaPagaron[i].name == str){
            objetoBuscado = yaPagaron[i]
        }else{
            i++
        }
    }

    if(objetoBuscado != undefined){
        return i;
    }else{
        return -1
    }
}

function modificar(){
    let i = 0;
    let todo = 0;
    while(i < yaPagaron.length){
        
        todo += parseInt(yaPagaron[i].money)
        i++;
    } 

    total.innerText = `Total: $${todo}`

    let division = todo / yaPagaron.length

    cada.innerText = `Cada uno debería pagar:  $${division.toFixed(2)}`

}

function sumarPlata(){
    if(existencia(nombre.value)){
        if(buscarIndex(nombre.value) != -1){
            let index = buscarIndex(nombre.value);
           
            document.getElementById(index).innerText = `${yaPagaron[index].name}: $${yaPagaron[index].money += parseInt(monto.value)}`
        }
    }else{

        yaPagaron.push({name: nombre.value, money: parseInt(monto.value)})
        let newElemt = document.createElement('h3')
        newElemt.setAttribute('id', cont)
        cont++
        newElemt.innerText = `${nombre.value}: $${monto.value}`
        miDiv.append(newElemt)
    }
    if(yaPagaron.length != 0){
        
        modificar()
    }
}
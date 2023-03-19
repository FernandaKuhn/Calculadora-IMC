function calcularIMC() {
    
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let img = document.getElementById('img')

    let imc = peso / (altura * altura).toFixed(2)
    
    if (imc >= 0 && imc < 18.5) {
        img.src = 'img/magreza.png'
        document.body.style.background = '#FFFF00';
    }
    else if (imc >= 18.6 && imc < 24.9) {
        img.src = 'img/normal.png'
        document.body.style.background = '#00FF7F';
    }
    else if (imc >= 25 && imc < 30) {
        img.src = 'img/sobre.png'
        document.body.style.background = '#BC8F8F';
    }
    else if (imc >= 30.1 && imc < 40) {
        img.src = 'img/obes.png'
        document.body.style.background = '#CD5C5C';
    }
    else if (imc >= 40.1 && imc < 99) {
        img.src = 'img/mrb.png'
        document.body.style.background = '#FF0000';
    }
    else {
        imc
    }
}

let button = document.getElementById('button')
button.addEventListener('click', calcularIMC)
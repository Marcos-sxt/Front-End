let nome = window.document.getElementById('nome')

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')


let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '30%'
email.style.width = '30%'
assunto.style.width = '30%'


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome é inválido, o nome de ter mais de 2 catacteres'
        txtNome.style.color = 'red'
        nomeOk = false      
    } else {
        txtNome.innerHTML = 'Nome é válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulario foi enviado com sucesso")
    }else{
        alert("Preencha o formulario corretamente antes de enviar")
    }
}



const botao = document.querySelector('#formulario button')
const input = document.querySelector('#formulario input')
const validarLink = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/i;
const imgQrcode = document.querySelector('.imagem-qrcode img')
const container = document.querySelector('.container')
const error = document.querySelector('#formulario p')



// FUNÇÃO
function gerarQrcode(){
    const valorInput = input.value
    
    if(!valorInput){
        error.innerHTML = 'Insira URL'
        error.classList.add('error-email')
        input.classList.add('error')
        return
    }
    if(!validarLink.test(valorInput)){
        error.innerHTML = 'URL invalida'
        error.classList.add('error-email')
        input.classList.add('error')
        return
    }

    imgQrcode.setAttribute('src', ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valorInput}`)

    botao.innerHTML = 'Gerando Qr Code...'

    imgQrcode.addEventListener('load',()=>{
        container.classList.add('ativo')
        botao.innerHTML = 'Qr Code gerado!'
        botao.classList.add('ativo-botao')
        error.innerHTML = 'ex: https://www.google.com.br'
        error.classList.remove('error-email')
        input.classList.remove('error')
    })
}



// EVENTOS
botao.addEventListener('click',(e)=>{
    e.preventDefault()
    gerarQrcode()
})


input.addEventListener('keydown',(e)=>{
    if(e.code === 'Enter'){
        gerarQrcode()
    }
})


input.addEventListener('keyup',()=>{
    if(!input.value){
        container.classList.remove('ativo')
        botao.innerHTML = 'Gerar Qr code'
        botao.classList.remove('ativo-botao')
    }
})
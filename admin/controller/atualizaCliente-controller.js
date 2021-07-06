import { clienteService } from "../service/cliente-service.js"

(async() =>{ //transformamos todo o código numa função auto-executável

const pegaURL = new URL(window.location) 

const id = pegaURL.searchParams.get('id') //pega o param "id" da URL

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

const dados = await clienteService.detalhaCliente(id)
inputNome.value = dados.nome
inputEmail.value = dados.email


const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async(event)=>{
    event.preventDefault()
    await clienteService.atualizaCliente(id, nome.value, email.value)
    window.location.href = "../telas/edicao_concluida.html"
})

}) ()



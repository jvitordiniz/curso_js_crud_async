import { clienteService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')

addEventListener('submit' , async (event) => {
    event.preventDefault()
    try{
        const nome = event.target.querySelector('[data-nome]').value
        const email = event.target.querySelector('[data-email]').value
        await clienteService.cadastraCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html'
    }           
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
        
    }
 
})
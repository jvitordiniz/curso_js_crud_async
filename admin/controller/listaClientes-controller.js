import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {

    const linhaNovoCliente = document.createElement('tr') /*criar nova linha com cliente */
    const conteudo = `
                    <td class="td" data-td>${nome}</td>
                    <td>${email}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                        </ul>
                    </td>`

    linhaNovoCliente.innerHTML = conteudo //coloca o "conteudo" <td> dentro da nova linha 
    linhaNovoCliente.dataset.id = id //a linha no html recebe um atributo que é o id do cliente
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]') //querySelector percorre o DOM a procura do elemento data-tabela

tabela.addEventListener('click', async (event) => {
    let ehBotaoDeletar = event.target.className === 'botao-simples botao-simples--excluir'
    if (ehBotaoDeletar) {
        try {
            const linhaCliente = event.target.closest('[data-id]') //data-id é um datattributes da <tr>
            let id = linhaCliente.dataset.id
            await clienteService.deletaCliente(id) //deleta da API
            linhaCliente.remove() //remove da <table>
        }
        catch (erro) {
            console.log(erro)
            window.location.href = "../telas/erro.html"
        }
    }
})

const render = async () => {
    try {


        const listaClientes = await clienteService.listaClientes()//se a promise vinda por meio do await for resolvida com sucesso, então
        listaClientes.forEach(elemento => {
            if(elemento.tipo === 1){
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id)) //adiciona filho (tabela) ao tbody 
            }
        })
    } 
    catch (erro) {
        console.log(erro)
        window.location.href = "../telas/erro.html"
    }
}

render()
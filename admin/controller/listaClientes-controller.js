import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email) => {

    const linhaNovoCliente = document.createElement('tr') /*criar nova linha com cliente */
    const conteudo = `
                    <td class="td" data-td>${nome}</td>
                    <td>${email}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../telas/edita_cliente.html?id=" class="botao-simples botao-simples--editar">Editar</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                        </ul>
                    </td>`

    linhaNovoCliente.innerHTML = conteudo //coloca o "conteudo" <td> dentro da nova linha 
    return linhaNovoCliente
}

const tabela = document.querySelector ('[data-tabela]') //querySelector percorre o DOM a procura do elemento data-tabela

clienteService.listaClientes()
.then(data =>{ //se a promise vinda pela fetch for resolvida com sucesso, então
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email)) //adiciona filho (tabela) ao tbody 
})})

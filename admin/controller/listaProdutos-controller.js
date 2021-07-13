import { produtoService } from '../service/produto-service.js'

const criaNovaLinha = (produto, preco, descricao, id) => {

    const linhaNovoProduto = document.createElement('tr') /*criar nova linha com cliente */
    const conteudo = `
                    <td class="td" data-td>${produto}</td>
                    <td>${preco}</td>
                    <td>${descricao}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../telas/edita_produto.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                        </ul>
                    </td>`

    linhaNovoProduto.innerHTML = conteudo //coloca o "conteudo" <td> dentro da nova linha 
    linhaNovoProduto.dataset.id = id //a linha no html recebe um atributo que é o id do cliente
    return linhaNovoProduto
}



const tabela = document.querySelector('[data-tabela]') //querySelector percorre o DOM a procura do elemento data-tabela

tabela.addEventListener('click', async (event) => {
    let ehBotaoDeletar = event.target.className === 'botao-simples botao-simples--excluir'
    if (ehBotaoDeletar) {
        try {
            const linhaProduto = event.target.closest('[data-id]') //data-id é um datattributes da <tr>
            let id = linhaProduto.dataset.id
            await cliente
            linhaProduto.remove() //remove da <table>
        }
        catch (erro) {
            console.log(erro)
            window.location.href = "../telas/erro.html"
        }
    }
})

const render = async () => {
    try {


        const listaProdutos = await produtoService.listaProdutos()//se a promise vinda por meio do await for resolvida com sucesso, então
        listaProdutos.forEach(elemento => {
            if(elemento.tipo === 2) {
            tabela.appendChild(criaNovaLinha(elemento.produto, elemento.preco, elemento.descricao, elemento.id)) //adiciona filho (tabela) ao tbody 
            }
        })
    } 
    catch (erro) {
        console.log(erro)
       // window.location.href = "../telas/erro.html"
    }
}

render()
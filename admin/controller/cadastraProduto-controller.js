import { produtoService } from '../service/produto-service.js'

const formulario = document.querySelector('[cad-produto-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const produto = evento.target.querySelector('[nome-produto]').value
    const preco = evento.target.querySelector('[preco-produto]').value
    const descProduto = evento.target.querySelector('[desc-produto]').value

    await produtoService.cadastraProduto(produto, preco, descProduto)
    window.location.href = '../telas/cadastro_concluido.html'
  }
  catch (erro) {
    console.log(erro)
   // window.location.href = "../telas/erro.html"
  }
})
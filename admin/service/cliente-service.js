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

//*****Abaixo é aberta a comunicação ajax (aplicação x API) assíncrona para alimentar a tbody*****
//uso da promise ausenta a necessidae de vários XMLRequests 

const listaClientes = () =>{
    const promise = new Promise((resolve, reject)=>{
        const http = new XMLHttpRequest()  
        http.open('GET', 'http://localhost:3000/profile') // (1º modo de request , 2º endereço a enviar a requisição)
        http.onload = () => { 
            if(http.status >= 400){ //
                reject(JSON.parse(http.response))
            }else{
                resolve(JSON.parse(http.response))
            }
        }
        http.send()
    })
    //console.log(promise)
    return promise
}

listaClientes()
.then(data =>{ //se a promise for resolvida com sucesso, então
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email)) //adiciona filho (tabela) ao tbody 
})
})


const listaProdutos = () => {
    return fetch(`http://localhost:3000/profile`)//fetch tem o "get" automático
    .then(resposta=>{
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os produtos')
    }) 
}

const detalhaProduto = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }  
        throw new Error('Não foi possível detalhar os produtos')
    })
}

const cadastraProduto = (produto, preco, descricao) =>{
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            produto: produto,
            preco: preco,
            descricao: descricao,
            tipo: 2
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar o produto')
    })
}

const atualizaProduto = (id, produto, preco, descricao) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            produto: produto, 
            preco: preco,
            descricao : descricao,
            tipo: 2
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}


export const produtoService = {
    detalhaProduto,
    listaProdutos,
    cadastraProduto,
    atualizaProduto

}
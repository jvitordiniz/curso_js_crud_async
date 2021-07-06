//*****Abaixo é aberta a comunicação ajax (aplicação x API) assíncrona para alimentar a tbody*****
//***** A fetch substituiu a promise e o http
//***** Comunicação entre aplicação e servidor deve ser convertida em texto (uso do JSON.stringify no body da requisição) 
//comando para subir o json-server: json-server --watch db.json   
//caso ocorra erro de CORS execute o comando: browser-sync start --server --file . --host --port 5000 -startPath admin/telas/lista_cliente.html

const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)//fetch tem o "get" automático
    .then(resposta=>{
        return resposta.json()
    }) 
}

const cadastraCliente = (nome, email) =>{
    return fetch(`http://localhost:3000/profile`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json' //tipo de conteúdo enviado
        },
        body: JSON.stringify({ //dados enviados pelo form
            nome: nome, 
            email: email
        })
    }) 
    .then (resposta =>{
        return resposta.body
    })
}

const deletaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{ //id passado no endereço da request
        method: 'DELETE'
    })
}

const detalhaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`) //id passado no endereço da request
    .then (resposta =>{
        return resposta.json()
    })  
}

const atualizaCliente = (id, nome, email) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then (resposta =>{
        return resposta.json()
    })

}

export const clienteService = {
    listaClientes,
    cadastraCliente,
    deletaCliente,
    detalhaCliente,
    atualizaCliente
}
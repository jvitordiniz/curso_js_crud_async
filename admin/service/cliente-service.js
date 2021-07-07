//*****Abaixo é aberta a comunicação ajax (aplicação x API) assíncrona para alimentar a tbody*****
//***** A fetch substituiu a promise e o http (bloco abaixo)
    /* const promise = new Promise((resolve, reject)=>{
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
    return promise*/
//comando para subir o json-server: json-server --watch db.json   
//caso ocorra erro de CORS execute o comando: browser-sync start --server --file . --host --port 5000 -startPath admin/telas/lista_cliente.html

const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)//fetch tem o "get" automático
    .then(resposta=>{
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    }) 
}

const cadastraCliente = (nome, email) =>{
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const deletaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um cliente')
        }
    })
}

const detalhaCliente = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um cliente')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}


export const clienteService = {
    listaClientes,
    cadastraCliente,
    deletaCliente,
    detalhaCliente,
    atualizaCliente
}
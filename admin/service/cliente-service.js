//*****Abaixo é aberta a comunicação ajax (aplicação x API) assíncrona para alimentar a tbody*****
//***** A fetch já faz o GET e substituiu a promise e o http (bloco abaixo)
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
    return fetch(`http://localhost:3000/profile`)
    .then(resposta=>{
        console.log(resposta)
        return resposta.json()
    }) 
}

export const clienteService ={
    listaClientes
}
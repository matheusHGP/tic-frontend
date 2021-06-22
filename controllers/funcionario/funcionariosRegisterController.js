function registerWorker() {
    const params = getParams()
    let method = 'POST'
    let path = '/funcionario'

    if(params.id){
        method = 'PUT'
        path += `/${params.id}`
    }

    Api(method, path, registerWokerCallback, params)
}

function getParams() {
    const params = {}
    params.nomeFuncionario = document.getElementById('name-func-register').value
    params.emailFuncionario = document.getElementById('cargo-func-register').value
    params.nivelFuncionario = document.getElementById('status-func-register').value
    
    const id = parseInt(document.getElementById('id-worker-register').value)
    if(id){
        params.id = id
    }
    return params
}

function registerWokerCallback(response){
    alert(response)   
}

function clearInputs() {
    document.getElementById('name-func-register').value = ''
    document.getElementById('cargo-func-register').value = ''
    document.getElementById('status-func-register').value = 'Status Funcionário'
    document.getElementById('id-func-register').value = 0
}
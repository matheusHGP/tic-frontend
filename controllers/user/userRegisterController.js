function registerUser() {
    const params = getParams()
    let method = 'POST'
    let path = '/usuario'

    if(params.id){
        method = 'PUT'
        path += `/${params.id}`
    }

    Api(method, path, registerUserCallback, params)
}

function getParams() {
    const params = {}
    params.nomeUsuario = document.getElementById('name-user-register').value
    params.emailUsuario = document.getElementById('email-user-register').value
    params.senhaUsuario = document.getElementById('password-user-register').value
    params.nivelUsuario = document.getElementById('level-user-register').value
    
    const id = parseInt(document.getElementById('id-user-register').value)
    if(id){
        params.id = id
    }
    return params
}

function registerUserCallback(response){
    alert(response)   
}

function clearInputs(){
    document.getElementById('name-user-register').value = ''
    document.getElementById('email-user-register').value = ''
    document.getElementById('password-user-register').value = ''
    document.getElementById('level-user-register').value = 'Nível do usuario'
    document.getElementById('id-user-register').value = 0
}
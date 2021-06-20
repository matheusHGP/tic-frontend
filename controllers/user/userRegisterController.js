function registerUser() {
    const params = getParams()
    Api('POST', '/usuario', registerUserCallback, params)
}

function getParams() {
    const params = {}
    params.nomeUsuario = document.getElementById('name-user-register').value
    params.emailUsuario = document.getElementById('email-user-register').value
    params.senhaUsuario = document.getElementById('password-user-register').value
    params.nivelUsuario = document.getElementById('level-user-register').value
    
    return params
}

function registerUserCallback(response){
    console.log(response)    
}
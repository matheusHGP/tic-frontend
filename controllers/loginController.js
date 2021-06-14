function entrar() {
    document.getElementById("error-message").innerText = ""
    const payload = {}
    payload.emailUsuario = document.getElementById("user").value
    payload.senhaUsuario = document.getElementById("password").value

    const request = new XMLHttpRequest()
    request.open("POST", "http://localhost:8080/usuario/login", true)
    request.onload = function () {
        if (request.status >= 400) {
            document.getElementById("error-message").innerText = request.responseText
        } else {
            window.location.pathname = "/home"
        }
    }

    request.setRequestHeader('Content-Type', 'application/json')

    request.send(JSON.stringify(payload))
}
function getHistory(){
    const path = getPath()
    window.location.pathname = path
}

function getPath(){
    const path = window.location.path || "/views/login.html"
    return path
}

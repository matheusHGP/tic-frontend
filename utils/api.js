const URL = 'http://localhost:8080'

function Api(method, path, callback, payload={}){
    const url = URL + path
    const request = new XMLHttpRequest()
    request.open(method, url, true)
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    request.onload = function(){
        callback(request.responseText)
    }

    request.send(JSON.stringify(payload))
}
const URL = 'http://localhost:8080'

function Api(method, path, callback){
    const url = URL + path
    const request = new XMLHttpRequest()
    request.open(method, url, true)
    
    request.onload = function(){
        callback(JSON.parse(request.responseText))
    }

    request.send()
}
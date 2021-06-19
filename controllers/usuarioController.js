function toggleButton(button) {
    switch (button) {
        case 'pesquisar':
            document.getElementById('btn-group-pesquisar').className = "btn btn-primary"
            document.getElementById('btn-group-cadastrar').className = "btn btn-secondary"
            document.getElementById('conteudo-cadastrar').style.display = 'none'
            document.getElementById('conteudo-pesquisar').style.display = 'block'
            break;
        case 'cadastrar':
            document.getElementById('btn-group-pesquisar').className = "btn btn-secondary"
            document.getElementById('btn-group-cadastrar').className = "btn btn-primary"
            document.getElementById('conteudo-pesquisar').style.display = 'none'
            document.getElementById('conteudo-cadastrar').style.display = 'block'
            break;
    }
}

function getUsers() {
    Api('GET', '/usuario', getAllUbersCallback)
}

function getAllUbersCallback(users) {
    let tableRow = ''
    users.forEach(user => {
        const rowValues = createTableRowValues(user)
        tableRow += createTableRow(rowValues)
    });
    document.getElementById('table-usuario').innerHTML = tableRow
}

function createTableRow(rowValues) {
    let tableRow = '<tr>' + rowValues + '</tr>'
    return tableRow
}

function createTableRowValues(user) {
    const columnValue = `<td>${user.id}</td><td>${user.nomeUsuario}</td><td>${user.emailUsuario}</td><td>${user.nivelUsuario}</td>`
    return columnValue
}
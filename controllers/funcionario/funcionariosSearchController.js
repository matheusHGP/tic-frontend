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

function getFuncionarios() {
    const path = '/funcionario' + getFuncionariosSearchValues()
    Api('GET', path, getFuncionariosCallback)
}

function getFuncionariosCallback(users) {
    users = JSON.parse(users)
    let tableRow = ''
    users.forEach((user, index) => {
        const rowValues = createTableRowValues(user, index)
        tableRow += createTableRow(rowValues)
    });
    document.getElementById('table-funcionario-content').innerHTML = tableRow
}

function createTableRow(rowValues) {
    let tableRow = '<tr>' + rowValues + '</tr>'
    return tableRow
}

function createTableRowValues(worker, index) {
    const statusFuncionario = getstatusFuncionarioToString(worker.statusFuncionario)
    const columnValue = `
    <td>${++index}</td>
    <td>${worker.nomeFuncionario}</td>
    <td>${worker.cargoFuncionario}</td>
    <td>${statusFuncionario}</td>
    <td>
    <div>
        <button class="btn btn-primary" onclick="onClickEditWorker(${worker.id}, '${worker.nomeFuncionario}', '${worker.cargoFuncionario}', '${worker.statusFuncionario}')">
            <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-danger" onclick="onClickExcludeWorker(${worker.id})">
            <i class="bi bi-trash"></i>
        </button>
    </div>
    </td>
    `
    return columnValue
}

function onClickEditWorker(id, nome, cargo, status) {
    document.getElementById('btn-group-pesquisar').className = "btn btn-secondary"
    document.getElementById('btn-group-cadastrar').className = "btn btn-primary"
    document.getElementById('conteudo-pesquisar').style.display = 'none'
    document.getElementById('conteudo-cadastrar').style.display = 'block'
    
    document.getElementById('name-func-register').value = nome
    document.getElementById('cargo-func-register').value = cargo
    document.getElementById('status-func-register').value = status
    document.getElementById('id-worker-register').value = id
    
}

function onClickExcludeWorker(id) {
    const path = `/funcionario/${id}`;
    Api("DELETE", path, excludeClientCallback);
}

function excludeClientCallback(response){
    alert(response)
}

function getstatusFuncionarioToString(nivelId) {
    const statusString = {
        1: 'Livre',
        2: 'Ocupado'
    }

    return statusString[nivelId]
}

function getStatusFuncionarioToInt(nivelString) {
    const nivelInt = {
        'Status Funcionario': 0,
        '1': 1,
        '2': 2
    }

    return nivelInt[nivelString]
}

function getFuncionariosSearchValues() {
    let searchPath = ''
    let searchValues = []
    const nomeFuncionario = document.getElementById('nome-funcionario').value
    const cargoFuncionario = document.getElementById('cargo-funcionario').value
    const statusFuncionario = getStatusFuncionarioToInt(document.getElementById('status-funcionario').value)

    if (nomeFuncionario) searchValues.push(`nomeFuncionario=${nomeFuncionario}`)
    if (cargoFuncionario) searchValues.push(`cargoFuncionario=${cargoFuncionario}`)
    if (statusFuncionario) searchValues.push(`statusFuncionario=${statusFuncionario}`)

    if (searchValues.length) {
        searchPath = '?' + searchValues.join('&')
    }
    return searchPath
}
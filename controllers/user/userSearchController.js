function toggleButton(button) {
  switch (button) {
    case "pesquisar":
      document.getElementById("btn-group-pesquisar").className =
        "btn btn-primary";
      document.getElementById("btn-group-cadastrar").className =
        "btn btn-secondary";
      document.getElementById("conteudo-cadastrar").style.display = "none";
      document.getElementById("conteudo-pesquisar").style.display = "block";
      break;
    case "cadastrar":
      document.getElementById("btn-group-pesquisar").className =
        "btn btn-secondary";
      document.getElementById("btn-group-cadastrar").className =
        "btn btn-primary";
      document.getElementById("conteudo-pesquisar").style.display = "none";
      document.getElementById("conteudo-cadastrar").style.display = "block";
      break;
  }
}

function getUsers() {
  const path = "/usuario" + getUsersSeachValues();
  Api("GET", path, getUsersCallback);
}

function getUsersCallback(users) {
  users = JSON.parse(users);
  let tableRow = "";
  users.forEach((user, index) => {
    const rowValues = createTableRowValues(user, index);
    tableRow += createTableRow(rowValues);
  });
  document.getElementById("table-usuario-content").innerHTML = tableRow;
}


function createTableRowValues(user, index) {
  const nivelUsuario = getNivelUsuarioToString(user.nivelUsuario);
  const columnValue = `
    <td>${++index}</td>
    <td>${user.nomeUsuario}</td>
    <td>${user.emailUsuario}</td>
    <td>${nivelUsuario}</td>
    <td>
    <div>
        <button class="btn btn-primary" onclick="onClickEditUser(${user.id}, '${user.nomeUsuario}', '${user.emailUsuario}', ${user.nivelUsuario})">
            <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-danger" onclick="onClickExcludeUser(${user.id})">
            <i class="bi bi-trash"></i>
        </button>
    </div>
    </td>
    `
    return columnValue
}

function onClickEditUser(id, nome, email, nivel) {
    document.getElementById('btn-group-pesquisar').className = "btn btn-secondary"
    document.getElementById('btn-group-cadastrar').className = "btn btn-primary"
    document.getElementById('conteudo-pesquisar').style.display = 'none'
    document.getElementById('conteudo-cadastrar').style.display = 'block'
    
    document.getElementById('name-user-register').value = nome
    document.getElementById('email-user-register').value = email
    document.getElementById('level-user-register').value = nivel
    document.getElementById('id-user-register').value = id
    
}

function excludeUserCallback(response){
    alert(response)
    getUsers()
}

function onClickExcludeUser(id) {
    const path = `/usuario/${id}`
    Api('DELETE', path, excludeUserCallback)
}

function getNivelUsuarioToString(nivelId) {
  const nivelString = {
    1: "Administrador",
    2: "Basico",
  };

  return nivelString[nivelId];
}

function getNivelUsuarioToInt(nivelString) {
  const nivelInt = {
    "Nível do usuario": 0,
    1: 1,
    2: 2,
  };

  return nivelInt[nivelString];
}

function getUsersSeachValues() {
  let searchPath = "";
  let searchValues = [];
  const nomeUsuario = document.getElementById("nome-usuario").value;
  const emailUsuario = document.getElementById("email-usuario").value;
  const nivelUsuario = getNivelUsuarioToInt(
    document.getElementById("nivel-usuario").value
  );

  if (nomeUsuario) searchValues.push(`nomeUsuario=${nomeUsuario}`);
  if (emailUsuario) searchValues.push(`emailUsuario=${emailUsuario}`);
  if (nivelUsuario) searchValues.push(`nivelUsuario=${nivelUsuario}`);

  if (searchValues.length) {
    searchPath = "?" + searchValues.join("&");
  }
  return searchPath;
}

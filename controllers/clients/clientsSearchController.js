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

function getClients() {
  const path = "/clientes" + getClientsSearchValues();
  Api("GET", path, getClientsCallback);
}

function getClientsCallback(clients) {
  clients = JSON.parse(clients);
  let tableRow = "";
  clients.forEach((client, index) => {
    const rowValues = createTableRowValues(client, index);
    tableRow += createTableRow(rowValues);
  });

  document.getElementById("table-content-client").innerHTML = tableRow;
}

function createTableRow(rowValues) {
  let tableRow = "<tr>" + rowValues + "</tr>";
  return tableRow;
}

function createTableRowValues(client, index) {
  const columnValue = `
    <td>${++index}</td>
    <td>${client.nomeCliente}</td>
    <td>${client.cpfCliente}</td>
    <td>${client.telefoneCliente}</td>
    <td>${client.emailCliente}</td>
    <td>${client.cepEnderecoCliente}</td>
    <td>${client.logradouroEnderecoCliente}</td>
    <td>${client.bairroEnderecoCliente}</td>
    <td>${client.numeroEnderecoCliente}</td>
    <td>
    <div>
        <button class="btn btn-primary" onclick="onClickEditClient(${
          client.id
        },'${client.nomeCliente}',
                    '${client.cpfCliente}',
                    '${client.telefoneCliente}',
                    '${client.emailCliente}',
                    '${client.cepEnderecoCliente}',
                    '${client.logradouroEnderecoCliente}',
                    '${client.bairroEnderecoCliente}',
                    '${client.numeroEnderecoCliente}')">
            <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-danger" onclick="onClickExcludeClient(${
          client.id
        })">
            <i class="bi bi-trash"></i>
        </button>
    </div>
    </td>
    `;
  return columnValue;
}

function onClickEditClient(
  id,
  nomeCliente,
  cpfCliente,
  telefoneCliente,
  emailCliente,
  cepEnderecoCliente,
  logradouroEnderecoCliente,
  bairroEnderecoCliente,
  numeroEnderecoCliente
) {
  document.getElementById("btn-group-pesquisar").className =
    "btn btn-secondary";
  document.getElementById("btn-group-cadastrar").className = "btn btn-primary";
  document.getElementById("conteudo-pesquisar").style.display = "none";
  document.getElementById("conteudo-cadastrar").style.display = "block";

  document.getElementById("nome-client-register").value = nomeCliente;
  document.getElementById("cpf-client-register").value = cpfCliente;
  document.getElementById("telefone-client-register").value = telefoneCliente;
  document.getElementById("email-client-register").value = emailCliente;
  document.getElementById("cep-client-register").value = cepEnderecoCliente;
  document.getElementById("logradouro-client-register").value =
    logradouroEnderecoCliente;
  document.getElementById("bairro-client-register").value =
    bairroEnderecoCliente;
  document.getElementById("numero-client-register").value =
    numeroEnderecoCliente;
  document.getElementById("id-client-register").value = id;
}

function excludeClientCallback(response) {
  alert(response);
  getClients();
}

function onClickExcludeClient(id) {
  const path = `/clientes/${id}`;
  Api("DELETE", path, excludeClientCallback);
}

function getClientsSearchValues() {
  let searchPath = "";
  let searchValues = [];
  const nomeClient = document.getElementById("nome-client").value;
  const cpfClient = document.getElementById("cpf-client").value;

  if (nomeClient) searchValues.push(`nomeCliente=${nomeClient}`);
  if (cpfClient) searchValues.push(`cpfCliente=${cpfClient}`);

  if (searchValues.length) {
    searchPath = "?" + searchValues.join("&");
  }
  return searchPath;
}

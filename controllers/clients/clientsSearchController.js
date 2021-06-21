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
  console.log(tableRow);
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
        <button class="btn btn-primary">
            <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-danger">
            <i class="bi bi-trash"></i>
        </button>
    </div>
    </td>
    `;
  console.log(client);
  return columnValue;
}

function getClientsSearchValues() {
  let searchPath = "";
  let searchValues = [];
  const nomeClient = document.getElementById("nome-client").value;
  const cpfClient = document.getElementById("cpf-client").value;

  if (nomeClient) searchValues.push(`nomeClient=${nomeClient}`);
  if (cpfClient) searchValues.push(`cpfClient=${cpfClient}`);

  if (searchValues.length) {
    searchPath = "?" + searchValues.join("&");
  }
  return searchPath;
}

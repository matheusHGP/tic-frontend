function registerClient() {
  const params = getParams();
  let method = "POST";
  let path = "/clientes";

  if (params.id) {
    method = "PUT";
    path += `/${params.id}`;
  }

  Api(method, path, registerClientCallback, params);
}

function getParams() {
  const params = {};

  params.nomeCliente = document.getElementById("nome-client-register").value;
  params.cpfCliente = document.getElementById("cpf-client-register").value;
  params.telefoneCliente = document.getElementById(
    "telefone-client-register"
  ).value;
  params.emailCliente = document.getElementById("email-client-register").value;
  params.cepEnderecoCliente = document.getElementById(
    "cep-client-register"
  ).value;
  params.logradouroEnderecoCliente = document.getElementById(
    "logradouro-client-register"
  ).value;
  params.bairroEnderecoCliente = document.getElementById(
    "bairro-client-register"
  ).value;
  params.numeroEnderecoCliente = document.getElementById(
    "numero-client-register"
  ).value;

  const id = parseInt(document.getElementById("id-client-register").value);

  if (id) {
    params.id = id;
  }

  return params;
}

function registerClientCallback(response) {
  alert(response);
}

function clearInputs() {
  document.getElementById("nome-client-register").value = "";
  document.getElementById("cpf-client-register").value = "";
  document.getElementById("telefone-client-register").value = "";
  document.getElementById("email-client-register").value = "";
  document.getElementById("cep-client-register").value = "";
  document.getElementById("logradouro-client-register").value = "";
  document.getElementById("bairro-client-register").value = "";
  document.getElementById("numero-client-register").value = "";
  document.getElementById("id-client-register").value = 0;
}

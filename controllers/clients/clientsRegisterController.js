function registerUser() {
  const params = getParams();
  Api("POST", "/clientes", registerUserCallback, params);
}

function getParams() {
  const params = {};

  params.nomeCliente = document.getElementById("nome-client-register").value;
  params.cpfCliente = document.getElementById('cpf-client-register').value
  params.telefoneCliente = document.getElementById('telefone-client-register').value
  params.emailCliente = document.getElementById('email-client-register').value
  params.cepEnderecoCliente = document.getElementById('cep-client-register').value
  params.logradouroEnderecoCliente = document.getElementById('logradouro-client-register').value
  params.bairroEnderecoCliente = document.getElementById('bairro-client-register').value
  params.numeroEnderecoCliente = document.getElementById('numero-client-register').value
  return params;
}

function registerUserCallback(response) {
  console.log(response);
}

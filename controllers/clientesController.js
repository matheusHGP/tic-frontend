function toggleButton(button) {
  switch (button) {
    case "pesquisar":
      document.getElementById("btn-group-pesquisar").className =
        "btn btn-primary";
      document.getElementById("btn-group-cadastrar").className = "btn";
      document.getElementById("conteudo-cadastrar").style.display = "none";
      document.getElementById("conteudo-pesquisar").style.display = "block";
      break;
    case "cadastrar":
      document.getElementById("btn-group-pesquisar").className = "btn";
      document.getElementById("btn-group-cadastrar").className =
        "btn btn-primary";
      document.getElementById("conteudo-pesquisar").style.display = "none";
      document.getElementById("conteudo-cadastrar").style.display = "block";
      break;
  }
}

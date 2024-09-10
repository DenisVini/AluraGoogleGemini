function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
     //console.log(section);
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    let resultados = "";
    let titulo = "";
    let descricao = "";
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p> "
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    for (let dado of dados){
       titulo = dado.titulo.toLowerCase()
       descricao = dado.descricao.toLowerCase()
      if (dado.titulo.includes(campoPesquisa)|| dado.descricao.includes(campoPesquisa)){
        resultados += `<div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
    </div>`
}
      }
      
      if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"

      }


    section.innerHTML = resultados
}
//console.log(dados);


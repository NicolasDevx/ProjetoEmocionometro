const buscarProfessores = async () => {
    const buscarElemento = document.getElementById('buscarProf').value
    const apiURL = `http://localhost:3000/professores?nome_like=${buscarElemento}`
    const response = await fetch(apiURL)
    const professores = await response.json()
    mostrarProfessores(professores)

    const pesquisa = document.getElementById('pesquisa')
    pesquisa.innerHTML = ""
    
    if (professores.length === 0) {
      pesquisa.innerHTML = "Desculpa! Nenhum resultado encontrado."
      console.log(pesquisa) 
    } else {
      mostrarProfessores(professores)
    }
}

  document.getElementById('buscarImg').addEventListener('click', buscarProfessores)
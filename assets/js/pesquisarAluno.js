const buscarAlunos = async () => {
  const buscarElemento = document.getElementById('buscarProf').value
  const apiURL = `http://localhost:3000/alunos?nome_like=${buscarElemento}`
  const response = await fetch(apiURL)
  const alunos = await response.json()
  mostrarAlunos(alunos)

  const pesquisa = document.getElementById('pesquisa')
  pesquisa.innerHTML = ""

  if (alunos.length === 0) {
    pesquisa.innerHTML = "Desculpa! Nenhum resultado encontrado."
    console.log(pesquisa)
  } else {
    mostrarAlunos(alunos)
  }
}
document.getElementById('buscarImg').addEventListener('click', buscarAlunos)
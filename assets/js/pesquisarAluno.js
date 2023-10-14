const buscarAlunos = async () => {
    const buscarElemento = document.getElementById('buscarProf').value
    const apiURL = `http://localhost:3000/alunos?nome_like=${buscarElemento}`
    const response = await fetch(apiURL)
    const alunos = await response.json()
    mostrarAlunos(alunos)
  };

  document.getElementById('buscarImg').addEventListener('click', buscarAlunos)
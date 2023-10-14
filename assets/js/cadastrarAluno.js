const formulario = document.getElementById('formulario')

const cadastrarAluno = async (alunos) => {
  await fetch('http://localhost:3000/alunos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(alunos)
  })

  window.location = "listarAluno.html"

}

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  const nome = formulario.elements['nome'].value
  const turma = formulario.elements['turma'].value
  const ativo = formulario.elements['ativo'].checked ? true : false;

  const aluno = {
    nome,
    turma,
    ativo
  }

  cadastrarAluno(aluno)

})
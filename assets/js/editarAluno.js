const formulario = document.getElementById('formulario')
let alunosId = null 

const getIdUrl=()=>{
    const paramString = window.location.search
    const params = new URLSearchParams(paramString)
    alunosId = params.get('id')
    console.log(alunosId)
}

const buscarAlunos = async ()=>{
    const response = await fetch(`http:///localhost:3000/alunos/${alunosId}`)
    const aluno = await response.json()
    return aluno
}

const carregarFormularioAluno = async (aluno)=>{
    document.getElementById('nome').value=aluno.nome
    document.getElementById('turma').value=aluno.turma
    const toggleEdicao = document.getElementById("toggle-edicao")
    const ativo = aluno.ativo === true

    if (ativo) {
        toggleEdicao.checked = true;
        toggleEdicao.parentElement.classList.add(true);
    } else {
        toggleEdicao.checked = false;
        toggleEdicao.parentElement.classList.add(false);
    }
}

const carregarDados = async ()=>{
    getIdUrl()
    const aluno = await buscarAlunos()
    carregarFormularioAluno(aluno)
}

const editarAluno = async (aluno)=>{
    await fetch(`http:///localhost:3000/alunos/${alunosId}`,{
        method:'PUT',  
        headers:{
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(aluno)
      })
      window.location="listarAluno.html"
}


formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nome = formulario.elements['nome'].value
    const turma = formulario.elements['turma'].value
    const ativo = formulario.elements['ativo'].checked ? true : false;

    const aluno = {
        nome,
        turma,
        ativo
    }

    editarAluno(aluno)
 
})


carregarDados()
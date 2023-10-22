const formulario = document.getElementById('formulario')
let professoresId = null

const getIdUrl = () => {
    const paramString = window.location.search
    const params = new URLSearchParams(paramString)
    professoresId = params.get('id')
    console.log(professoresId)
}

const buscarProfessor = async () => {
    const response = await fetch(`https://emocionomentro.onrender.com/professores/${professoresId}`)
    const professor = await response.json()
    return professor
}

const carregarFormularioProfessor = async (professor) => {
    document.getElementById('nome').value = professor.nome
    document.getElementById('disciplina').value = professor.disciplina
    document.getElementById('perfil').value = professor.perfil
    const toggleEdicao = document.getElementById("toggle-edicao")
    const ativo = professor.ativo === true

    if (ativo) {
        toggleEdicao.checked = true
        toggleEdicao.parentElement.classList.add(true)
    } else {
        toggleEdicao.checked = false
        toggleEdicao.parentElement.classList.add(false)

    }
}

const carregarDados = async () => {
    getIdUrl()
    const professor = await buscarProfessor()
    carregarFormularioProfessor(professor)
}

const editarProfessor = async (professor) => {
    await fetch(`https://emocionomentro.onrender.com/professores/${professoresId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(professor)
    })
    window.location = "listarProfessor.html"
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = formulario.elements['nome'].value
    const disciplina = formulario.elements['disciplina'].value
    const perfil = formulario.elements['perfil'].value
    const ativo = formulario.elements['ativo'].checked ? true : false

    const professor = {
        nome,
        disciplina,
        perfil,
        ativo
    }

    editarProfessor(professor)

})


carregarDados()
const formulario=document.getElementById('formulario')

const cadastrarProfessor = async (professores)=>{
    await fetch('http://localhost:3000/professores',{
      method:'POST',  
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(professores)
    })

    window.location="listarProfessor.html"

}

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nome=formulario.elements['nome'].value
    const perfil=formulario.elements['perfil'].value
    const disciplina=formulario.elements['disciplina'].value
    const ativo=formulario.elements['ativo'].value

    const professor={
        nome,
        perfil,
        disciplina,
        ativo
    }

    cadastrarProfessor(professor)
 
})
const excluirAluno = async (id) => {
    await fetch(`http://localhost:3000/alunos/${id}`, {
        method: 'DELETE'
    })
    getAlunos()
}
const excluirProfessor = async(id)=>{
    await fetch(`http://localhost:3000/professores/${id}`,{method:'DELETE'})
    getProfessor()
}
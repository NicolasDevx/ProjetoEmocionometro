const confirmaProfessor = document.getElementById("confirmaProfessor")
const confirmarModal = document.getElementById("confirmarModal")
const confirmarExclusao = document.getElementById("confirmarExclusao")
const cancelarExclusao = document.getElementById("cancelarExclusao")

const excluirAluno = (id, nome) => {
  confirmarModal.style.display = "block"

  confirmaProfessor.textContent = `Você tem certeza que deseja excluir o aluno: ${nome}?`

  confirmarExclusao.addEventListener("click", async () => {
    confirmarModal.style.display = "none"
    await fetch(`https://emocionomentro.onrender.com/alunos/${id}`, {
      method: "DELETE",
    }).then(() => {
      getAlunos()
    })
  })
  cancelarExclusao.addEventListener("click", () => {
    confirmarModal.style.display = "none"
  })
}

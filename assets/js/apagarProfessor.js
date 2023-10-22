const confirmaProfessor = document.getElementById("confirmaProfessor")
const confirmarModal = document.getElementById("confirmarModal")
const confirmarExclusao = document.getElementById("confirmarExclusao")
const cancelarExclusao = document.getElementById("cancelarExclusao")

const excluirProfessor = (id, nome) => {
  confirmarModal.style.display = "block"

  confirmaProfessor.textContent = `Você tem certeza que deseja excluir o professor(a): ${nome}?`

  confirmarExclusao.addEventListener("click", async () => {
    confirmarModal.style.display = "none"
    await fetch(`http://localhost:3000/professores/${id}`, {
      method: "DELETE",
    }).then(() => {
      getProfessor()
    })
  })
  cancelarExclusao.addEventListener("click", () => {
    confirmarModal.style.display = "none"
  })
}

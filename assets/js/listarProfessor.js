const getProfessor = async () => {
    const apiURL = await fetch('http://localhost:3000/professores')
    const professores = await apiURL.json()
    mostrarProfessores(professores)
}

const mostrarProfessores = (professores) => {
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = ''

    professores.forEach((professores) => {
        const professoresHTML = `
        <tr>
            <td>${professores.nome}</div></td>
            <td>${professores.disciplina}</td>
            <td>${professores.perfil}</td>
            <td>${professores.ativo ? "<img src='../assets/img/ativo.svg' class='toggle-img'" : "<img src='../assets/img/inativo.svg' class='toggle-img'"}">
            <td>
            <button class="editarbtn" onclick="editarProfessor(${professores.id})"></button>
            <button class="excluirbtn" onclick="excluirProfessor(${professores.id})"></button>
            </td>
        </tr>
        `
        tabela.innerHTML = tabela.innerHTML + professoresHTML
    })
}

getProfessor()

const ordenar = document.getElementById('ordenar-nome')
const seta = ordenar.querySelector('.seta')
let ordenarAsc = true

ordenar.addEventListener('click', () => {
    ordenarNome()
    mudarSeta()
})

const ordenarNome = async () => {
    const alterarOrdem = ordenarAsc ? 'asc' : 'desc'
    const apiURL = await fetch(`http://localhost:3000/professores?_sort=nome&_order=${alterarOrdem}`)
    const professores = await apiURL.json()
    mostrarProfessores(professores)

    ordenarAsc = !ordenarAsc
}

const mudarSeta = () => {
    seta.textContent = ordenarAsc ? 'arrow_drop_up' : 'arrow_drop_down'
}

const editarProfessor = (id) => {
    window.location = `editarProfessor.html?id=${id}`
}
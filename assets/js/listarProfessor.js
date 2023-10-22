const getProfessor = async () => {
    const apiURL = await fetch('https://emocionomentro.onrender.com/professores')
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
            <div class="tooltip-editar">
            <button class="editarbtn" onclick="editarProfessor(${professores.id})"></button>
            <span class="tooltiptext">Editar</span>
            </div>
            <div class="tooltip-excluir">
            <button class="excluirbtn" onclick="excluirProfessor(${professores.id}, '${professores.nome}')"></button>
            <span class="tooltiptext">Excluir</span>
            </div>
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
    const apiURL = await fetch(`https://emocionomentro.onrender.com/professores?_sort=nome&_order=${alterarOrdem}`)
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
const getAlunos = async () => {
    const apiURL = await fetch('http://localhost:3000/alunos')
    const alunos = await apiURL.json()
    mostrarAlunos(alunos)
}

const mostrarAlunos = (alunos) => {
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = ''

    alunos.forEach((alunos) => {
        const alunosHTML = `
        <tr>
            <td>${alunos.nome}</div></td>
            <td>${alunos.turma}</td>
            <td>${alunos.ativo ? "<img src='../assets/img/ativo.svg' class='toggle-img'" : "<img src='../assets/img/inativo.svg' class='toggle-img'"}">
            <td>
            <div class="tooltip-editar">
            <button class="editarbtn" onclick="editarAluno(${alunos.id})"></button>
            <span class="tooltiptext">Editar</span>
            </div>
            <div class="tooltip-excluir">
            <button class="excluirbtn" onclick="excluirAluno(${alunos.id})"></button>
            <span class="tooltiptext">Excluir</span>
            </td>

        </tr>
        `
        tabela.innerHTML = tabela.innerHTML + alunosHTML
    })
}

getAlunos()

const ordenar = document.getElementById('ordenar-nome')
const seta = ordenar.querySelector('.seta')
let ordenarAsc = true

ordenar.addEventListener('click', () => {
    ordenarNome()
    mudarSeta()
})
const ordenarNome = async () => {
    const alterarOrdem = ordenarAsc ? 'asc' : 'desc'
    const apiURL = await fetch(`http://localhost:3000/alunos?_sort=nome&_order=${alterarOrdem}`)
    const alunos = await apiURL.json()
    mostrarAlunos(alunos)

    ordenarAsc = !ordenarAsc
}

const mudarSeta = () => {
    seta.textContent = ordenarAsc ? 'arrow_drop_up' : 'arrow_drop_down'
}

const editarAluno = (id) => {
    window.location = `editarAluno.html?id=${id}`
}
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
            <button class="editarbtn" onclick="editarAluno(${alunos.id})"></button>
            <button class="excluirbtn" onclick="excluirAluno(${alunos.id})"></button>
            </td>

        </tr>
        `
        tabela.innerHTML = tabela.innerHTML + alunosHTML
    })
}

getAlunos()

const editarAluno = (id) => {
    window.location = `editarAluno.html?id=${id}`
}
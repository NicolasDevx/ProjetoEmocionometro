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

const editarProfessor = (id) => {
    window.location = `editarProfessor.html?id=${id}`
}
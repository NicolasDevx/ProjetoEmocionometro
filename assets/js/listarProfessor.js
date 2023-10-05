const getProfessor = async () => {
    const apiURL = await fetch('http:///localhost:3000/professores')
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
            <td>${professores.ativo}</td>
            <td>
            <button onclick="editarProfessor(${professores.id})">Editar</button>
            <button onclick="excluirProfessor(${professores.id})">Apagar</button>
            </td>

        </tr>
        `
        tabela.innerHTML = tabela.innerHTML + professoresHTML
    })
}

getProfessor()
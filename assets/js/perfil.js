const botaoPessoais = document.getElementById('botao-pessoais')
const botaoSenha = document.getElementById('botao-senha')

const mostrarDadosPessoais = () => {
    const mostrarDados = document.getElementById('mostrar-Dados')
    mostrarDados.innerHTML = `
        <div class="dados-titulo">
        <h1>Dados pessoais</h1>
        </div>
        <div class="dados-pessoais">
        <label class="label-perfil" for="nome">Nome</label>
        <input class="input-perfil" type="text" id="nome" readonly>
        <button class="editarbtn""></button>
        </div>
        <hr>
        <div class="dados-pessoais">
        <label class="label-perfil" for="email">Email</label>
        <input class="input-perfil" type="text" id="email" readonly>
        <button class="editarbtn""></button>
        </div>
        <hr>
        <div class="dados-pessoais">
        <label class="label-perfil" for="celular">Celular</label>
        <input class="input-perfil" type="text" id="celular" readonly>
        <button class="editarbtn""></button>
        </div>
        <hr>
        <div class="dados-pessoais">
        <label class="label-perfil" for="telefone">Telefone</label>
        <input class="input-perfil" type="text" id="telefone" readonly>
        <button class="editarbtn""></button>
        </div>
    `
    botaoPessoais.classList.add('botao-perfil-ativo')
    botaoSenha.classList.remove('botao-perfil-ativo')
    botaoSenha.classList.add('botao-perfil')

    const apiURL = 'https://emocionomentro.onrender.com/usuarios'
    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            const usuario = data[0]
            document.getElementById('nome').value = usuario.nome
            document.getElementById('email').value = usuario.email
            document.getElementById('celular').value = usuario.celular
            document.getElementById('telefone').value = usuario.telefone
        })
}

const mostrarSenha = () => {
    const mostrarDados = document.getElementById('mostrar-Dados')
    mostrarDados.innerHTML = `
        <h1>Alterar Senha</h1>
        <label class="label-perfil-senha" for="senha-atual">Senha Atual</label>
        <input class="input-perfil-senha" type="password" id="senha-atual">

        <label class="label-perfil-senha" for="nova-senha">Nova Senha</label>
        <input class="input-perfil-senha" type="password" id="nova-senha">

        <label class="label-perfil-senha" for="confirmar-senha">Confirmar Nova Senha</label>
        <input class="input-perfil-senha" type="password" id="confirmar-senha">

        <button class="botao" id="nova-senha">Salvar Nova Senha</button>
    `
    botaoSenha.classList.add('botao-perfil-ativo')
    botaoPessoais.classList.remove('botao-perfil-ativo')
    botaoPessoais.classList.add('botao-perfil')
}

botaoPessoais.addEventListener('click', mostrarDadosPessoais)
botaoSenha.addEventListener('click', mostrarSenha)
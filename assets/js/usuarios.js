function alertaPersonalizado(message) {
    const alerta = document.getElementById('alerta')
    alerta.textContent = message
    alerta.classList.add('show')

    setTimeout(() => {
        alerta.classList.remove('show')
    }, 3000)
}

const login = async () => {
    const email = document.getElementById('login-email').value
    const senha = document.getElementById('login-senha').value

    const botaoEntrar = document.querySelector('.botao-entrar')
    if (email && senha) {
        botaoEntrar.classList.add('habilitado')
    }

    const apiURL = 'https://emocionomentro.onrender.com/usuarios'
    const response = await fetch(apiURL)
    const resultado = await response.json()
    const usuario = resultado.find(usuario => usuario.email === email && usuario.senha === senha)

    if (usuario) {
        window.location.href = './pages/loading.html'
    } else {
        alertaPersonalizado('Usuário ou Senha incorretos. Tente novamente.')
    }
}

const emailInput = document.getElementById('login-email')
const senhaInput = document.getElementById('login-senha')

emailInput.addEventListener('input', () => {
    atualizarBotaoEntrar(emailInput, senhaInput)
})
senhaInput.addEventListener('input', () => {
    atualizarBotaoEntrar(emailInput, senhaInput)
})

const atualizarBotaoEntrar = (emailInput, senhaInput) => {
    const email = emailInput.value
    const senha = senhaInput.value
    const botaoEntrar = document.querySelector('.botao-entrar')

    if (email && senha) {
        botaoEntrar.classList.add('habilitado')
    } else {
        botaoEntrar.classList.remove('habilitado')
    }
}

const senhaDigitada = document.getElementById('login-senha')
const olho = document.getElementById('olho')

olho.addEventListener('click', () => {
    if (senhaDigitada.type === 'password') {
        senhaDigitada.type = 'text'
        olho.textContent = 'visibility'
    } else {
        senhaDigitada.type = 'password'
        olho.textContent = 'visibility_off'
    }
})
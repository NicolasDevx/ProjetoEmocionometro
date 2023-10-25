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


const nomeUsuario = async () => {
    const URL = 'https://emocionomentro.onrender.com/usuarios'
    const res = await fetch(URL)
    const resul = await res.json()
    const nomeUsu = document.getElementById("nomeUsuario")

    if (resul.length > 0) {
        nomeUsu.textContent = resul[0].nome
    } else {
        nomeUsu.textContent = "Nenhum usuário encontrado"
    }
    console.log(resul)
}

nomeUsuario()


const entrarBotao = document.querySelector('.botao-entrar')
entrarBotao.addEventListener('click', login)


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
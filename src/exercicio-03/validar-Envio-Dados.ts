// type TDados = {
//     nomeDigitado: string
//     email: string
//     senha: string
// }

function validarUsuario(dados: any) {
    const {nome, email, senha} = dados

    if (!nome || !email || !senha) {
        return 'Todos os campos são obrigatórios'
    }
        return 'true'
}

export default validarUsuario

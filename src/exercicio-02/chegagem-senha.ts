function criarSenha(senha: string) {
    const senhaNumber = Number(senha)
    const senhaNaoForNumber = isNaN(senhaNumber)
    if (senhaNaoForNumber || senha.length < 4) {
        return 'SENHA INVÁLIDA'
    }
    return 'SENHA VALIDA'
}

export default criarSenha

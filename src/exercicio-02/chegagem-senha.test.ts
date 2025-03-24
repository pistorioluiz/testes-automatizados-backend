import criarSenha from "./chegagem-senha";

describe('Chegagem de uma senha', () => {
    test('Deve retornar senha inválida se não possuir no mínimo 4 caractéres', () => {
        const senha = '456'
        const resultadoSenha = criarSenha(senha)
        expect(resultadoSenha).toBe('SENHA INVÁLIDA')
    })

    test('Deve retornar senha inválida se a senha possuir caractéres NÃO numéricos', () => {
        const senha = '456a'
        const resultadoSenha = criarSenha(senha)
        expect(resultadoSenha).toBe('SENHA INVÁLIDA')
    })

    test('Deve retornar senha valida se a senha possuir as verificações exigidas', () => {
        const senha = '4567'
        const resultadoSenha = criarSenha(senha)
        expect(resultadoSenha).toBe('SENHA VALIDA')
    })
})

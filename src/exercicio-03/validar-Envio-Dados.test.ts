import validarUsuario from './validar-Envio-Dados'

describe('Validação envio de dados', () => {
    test('Deve verificar se falta algum dado', () => {
        const usuario = validarUsuario ({
            nomeDigitado: 'Luiz Gustavo',
            email: 'luiz@email.com'
        })
        const usuario1 = validarUsuario ({
            nomeDigitado: 'Luiz Gustavo',
            senha: 'luiz123'
        })
        const usuario2 = validarUsuario ({
            email: 'luiz@email.com',
            senha: 'luiz123'
        })
        expect(usuario).toBe('Todos os campos são obrigatórios')
        expect(usuario1).toBe('Todos os campos são obrigatórios')
        expect(usuario2).toBe('Todos os campos são obrigatórios')
        })
    test('Deve verificar se está preenchido totalmente', () => {
        const usuario3 = validarUsuario ({
            nomeDigitado: 'Luiz Gustavo',
            email: 'luiz@email.com',
            senha: 'luiz123'
        })
        expect(usuario3).toBeTruthy()
        })
})

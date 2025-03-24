import calcularResultado from './resultado-Venda'

describe('Resultado de uma venda', () => {
    test('Deve testar se uma venda é maior que a compra', () => {
        const venda = 120
        const compra = 110
        const resultado = calcularResultado(venda, compra)
        expect(resultado).toBe(`O valor do lucro é: 10`)
        })

    test('Deve testar se terá prejuízo', () => {
        const venda = 120
        const compra = 130
        const resultado = calcularResultado(venda, compra)
        expect(resultado).toBe(`O valor do prejuízo é: -10`)
    })

    test('Deve testar se não houve prejuízo nem lucro', () => {
        const venda = 120
        const compra = 120
        const resultado = calcularResultado(venda, compra)
        expect(resultado).toBe(`Venda a preço de custo`)
    })
})

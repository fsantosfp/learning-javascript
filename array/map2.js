const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const retornaPreco = e => {
    const item = JSON.parse(e)
    return item.preco
}

const precos = carrinho.map(retornaPreco)
console.log(precos)

const precos2 = carrinho.map(element => JSON.parse(element)).map(item => item.preco)
console.log(precos2)

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
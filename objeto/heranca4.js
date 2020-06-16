/**
 * Objetos criados através da notação de objeto {} o objeto criado passa a ter um atributo chamado .__proto__ onde fica a refença a sua herança
 * Quando criamos um objeto através deu uma função o atributo .__proto__ irá apontar para o .prototype da função isso pq funções não tem um atributo .__proto__ assim como objetos literais
 * não tem o atributo .prototype. Porem ambos os atributos .__proto__ e .prototype são atibutos para refenciar a herança.
 * 
 * O atibuto .prototype tem um atributo .__proto__ que aponta para a heraça do objeto global assim com quando criamos um objeto literal e não fazemos referencia a nenhum outro objeto como herança.
 */


function MeuObjeto(){}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.__proto__)

MeuObjeto.prototype.nome = "Anônimo"
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
console.log(obj3.prototype)
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()
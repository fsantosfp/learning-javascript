// Versão local
// aprovados.__proto__.forEach2 = function(fn){
//     for(let i = 0; i < this.length; i++){
//         fn(this[i], i, this);
//     }
// }

// Versão global

Array.prototype.forEach2 = function(fn){
    for(let i = 0; i < this.length; i++){
        fn(this[i], i, this);
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`)
})
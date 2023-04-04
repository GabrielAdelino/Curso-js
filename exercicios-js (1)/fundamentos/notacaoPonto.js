console.log(Math.ceil(6.10))

const obj1 = {}
//objt1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome
    this.exec = function() {
         console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
//  1 create in function 
function MyFunction(){
    console.log(`test`)
}
MyFunction ()
MyFunction ()

const MyFunctioninVariable = function () {
    console.log(`Function in variable`)
}

MyFunctioninVariable ()

function functionParameber (txt) {
    console.log(`printing: ${txt}`)
}

functionParameber("Printing something")
functionParameber("other function")

// 2 return

const a = 10
const b = 20
const c = 30
const d = 40

function soma (n1,n2) {
return n1 + n2;

}

const result = soma(a,b)

console.log (result)

console.log(soma(c, d))

//  3 escopo da funcão

let y = 10

function testingScope(){
    let y = 20
    console.log(`Y dentro da função é:${y}`)
}


testingScope()

console.log(`Y fora da função é: ${y}`)

testingScope()
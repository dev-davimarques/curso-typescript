// const num: number = 15;
// if(num>15){
//     console.log('Número é maior do que 15')
// } else if (num === 15 ){
//     console.log('Número igual 15')
// } else {
//     console.log("Número menor do que 15")
// }

const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Você é um estudante',
    viewer: 'Você pode visualizar'
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')
interface Pessoa { 
    nome: string,
    idade?: number,
    profissao?: string // profissao: string | undefined
    // a interrogação torna opcional
}

// após o dois pontos, é obrigatório ser o nome da interface
const pessoa: Pessoa = {
    nome: 'Davi',
    idade: 23
}

const outraPessoa: Pessoa = {
    nome: 'José',
    idade: 30,
    profissao: 'Desenvolvedor'
}

const arrayPessoa: Array<Pessoa> = [ // Array<Pessoa> ou Pessoa[]
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [ // array de números
    1, 2, 3
]

const arrayString: Array<string> = [ // string[]
    'Davi', 'Antônio', 'João'
]
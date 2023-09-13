const arrayForEach: Array<number> = [1,2,3,4]
// forEach vai percorrer o array
arrayForEach.forEach(num => {
    if(num % 2 === 1){ // aqui teremos infinitas possibilidades
        console.log(num)
    }
})
console.log('------')

// arrayForEach.forEach(num => console.log(num))
// console.log('-----------')
// console.log(arrayForEach)


arrayForEach.map(num => console.log(num)) // função map funciona quase igual o forEach, a diferença é performática, forEach é um pouco mais lento que o map
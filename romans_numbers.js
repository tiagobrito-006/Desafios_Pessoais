// * Trasnformar númeres arábicos(tradicionais) em números romanos

function toRoman(number) {
    // * Primeiro criar variáveis com os números romanos e arábicos
    const roman_numbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    const arabic_numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    // * Criar uma array para que cada letra seja inserida e depois unida
    let final_number= []

    /*  
     * Um laço percorrerá todos os números arábicos(tradicionais) 
     * até achar um que o número principal seja maior ou igual.
     * Ao achar, testará para saber se esse número poderá ser mul-
     * tiplicado por 2 ou 3 para se aproximar ou se igualar ao 
     * número principal, se isso acontecer, a letra equivalente ao
     * número (por isso o uso do for in, para se usar o indice depois)
     * será inserida 2 ou 3 vezes na array final, depois subtrairá
     * o número principal pela quantidade de vezes que o número pró-
     * ximo foi multiplicado, reiniciando o laço (o mesmo acontece
     * para o caso do número só puder ser multiplicado uma vez).
     */


    for (index in arabic_numbers) { 
        if (number >= arabic_numbers[index] && number > 0) {
            if (arabic_numbers[index] * 3 <= number) { 
                final_number.push(roman_numbers[index].repeat(3)) 
                number -= arabic_numbers[index] * 3 
            }
            else if (arabic_numbers[index] * 2 <= number) { 
                final_number.push(roman_numbers[index].repeat(2)) 
                number -= arabic_numbers[index] * 2 
            }
            else { 
                final_number.push(roman_numbers[index]) 
                number -= arabic_numbers[index]
            }
        }
    }

    // * Então retorna a array em forma de string
    return final_number.join('')
}


// * -----------------------------------------------------------------


// * Transformar números romanos em arábicos

function toArabic(number) {
    // * Primeiro criar variáveis com os números romanos e arábicos
    const roman_numbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    const arabic_numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    // * Criar uma array para que cada letra seja inserida e depois unida
    final_number = []

    /*
    * Um laço for of percorrerá o número romano, dentro desse laço,
    * um laço for in percorrerá a lista de números romanos até achar 
    * uma letra igual a atual do laço for of. Ao achar, fará um teste
    * para saber se o número adicionado anteriormente era menor que o
    * atual, já que na notação dos números romanos um número menor an-
    * tes de um maior significa uma subtração, se for menor, subtrairá
    * o número atual por 2x o número anterior 
    * (EX: 'IV' = [1, 5] ficará [1, 5 -(2*1)] = [1, 3] )
    * feito assim para que na hora de se somar todos os valores somará
    * corretamente. Se não for menor, adicionará o valor normalmente
    * e seguirá para a próxima letra/número.
    */


    for (num of number) {
        for (index in roman_numbers) {
            if (num.toUpperCase() === roman_numbers[index]) {
                if (final_number[final_number.length - 1] < arabic_numbers[index]) {
                    final_number.push(arabic_numbers[index] - (final_number[final_number.length - 1] * 2))
                }
                else {
                    final_number.push(arabic_numbers[index])
                }
            }
        }
    }
    // * Uma variável para armazenar o resultado da soma dos valores
    let result = 0

    // * Um laço forEach para percorrer a array e somar os valores
    final_number.forEach(numero => result += numero)

    return result
} 


console.log(toRoman(494)) // CDXCIV
console.log(toArabic("CDXCIV"))  // 494
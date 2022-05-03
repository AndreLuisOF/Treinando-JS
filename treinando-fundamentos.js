// Apresentação com nome, idade e curso 
// media das idades 

const apresentacao = (nome, idade, curso) => {
    if (idade > 30){
        return `Meu nome é ${nome}, tenho ${idade} anos e eu cursei ${curso}.`
    } else {
        return `Meu nome é ${nome}, tenho ${idade} anos e eu curso ${curso}.`
    }
}  

function mediaIdades(num1, num2, num3) {
    const media = (num1 + num2 + num3) / 3;
    return `A media de idades da familia é ${media} anos.`
}

console.log(apresentacao("Andre", 22, "computação"))^
console.log(apresentacao("Gabriel", 18, "administração"))
console.log(apresentacao("Juliana", 55, "Engenharia Quimica"))
console.log(mediaIdades(22, 19, 55))

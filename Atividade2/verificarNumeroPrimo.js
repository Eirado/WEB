function verificarNumeroPrimo(num1){
    if (num1 <= 1){
        return
    }

    if (num1 % 2 == 0) {
        return console.log("True")
    } else
    return console.log("False")
}

verificarNumeroPrimo(2)
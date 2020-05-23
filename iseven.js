let isEven = function(number){
    if (number>=0){
        if (number == 0){
            return true
        }
        else if (number == 1){
            return false
        }
        else if (number>1){
            let numbernew = number - 2
            return (isEven(numbernew))
        }

    }
    else return undefined
}
isEven(200);
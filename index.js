const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const  returnFirstTwoDrivers = function(){
return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(){
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(num1){
    return function(){
        const num2 = num1*5
        return num2
    }
}
function fareDoubler (num1){
    const num3 = num1*2
    return num3 
}
function fareTripler (num1){
    const num4 = num1*3
    return num4
}
function selectDifferentDrivers (drivers,x){
    if (x === returnFirstTwoDrivers){
       return returnFirstTwoDrivers()
    } else {
        return returnLastTwoDrivers()
    }

}
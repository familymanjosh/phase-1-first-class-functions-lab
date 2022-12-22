const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2)
}
console.log(returnFirstTwoDrivers)
const returnLastTwoDrivers = function(){
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(num1){
    return function(num2){
        num2 = num1*5;
        return num2;
    }; 
}

function fareMultiplier(num2){
    const num4 = num2*4;
    return num4;
}

function fareDoubler(num2){ 
    const num3 = num2*2;
    return num3
}

function fareTripler(num2){
    const num5 = num2*3;
    return num5
}
function selectDifferentDrivers(drivers, x){
    if (x===returnFirstTwoDrivers){
        return returnFirstTwoDrivers()
    }else {
        return returnLastTwoDrivers()
    }
}
  
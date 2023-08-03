
function returnFirstTwoDrivers(array) {
    return [array[0], array[1]];
}

function returnLastTwoDrivers(array) {
    return [array[array.length - 2], array[array.length - 1]]
}

function createFareMultiplier(multiplier) {
    /*
    This is a higher-order function that takes in one argument, 
    an integer, and returns a function that will multiply 
    a fare for a ride accordingly. For example, 
    if createFareMultiplier() receives an argument of 4, 
    it will return a function that takes in a fare as 
    an argument and quadruples the fare.
    */

    return function (fare) {
        return fare * multiplier;
    }

}   

function fareDoubler(fare) {
    /*
    Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
    Invoke createFareMultiplier() in such a way that the new 
    fareDoubler() function accepts a fare as its lone argument and doubles it.
    */

    const fareFunction = createFareMultiplier(2);
    return fareFunction(fare);
}

function fareTripler(fare) {
    /*
    Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
    Invoke createFareMultiplier() in such a way that the new 
    fareTripler() function accepts a fare as its lone argument and triples it.
    */
    const fareFunction = createFareMultiplier(3);
    return fareFunction(fare);
}

function selectDifferentDrivers(array, func) {
    return func(array);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
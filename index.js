// Code your solution here


function findMatching(driverArray,string){
    return driverArray.filter((driver)=> driver.toLowerCase() === string.toLowerCase())
};


function fuzzyMatch(driverArray,string){
    return driverArray.filter((driver) => driver.startsWith(string)
    )
};

function matchName(driverArray,string){
    return driverArray.filter((driver) => driver.name.toLowerCase() === string.toLowerCase())
}
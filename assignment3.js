
function sumOfList(list){
    // returns the sum of the given array
    // sending non-numerical values will cause wonky behavior
    sum = 0
    list.forEach((i) => sum += i)
    return sum
}
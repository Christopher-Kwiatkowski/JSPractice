
let getMyGrade = function(currentMarks, totalMarks) {
   let myPercent = (currentMarks/totalMarks) * 100 

    let myGrade = ''

    if (myPercent >= 90) {
        myGrade = 'A'
    } else if (myPercent >= 80) {
        myGrade = 'B'
    } else if (myPercent >= 70) {
        myGrade = 'C'
    } else if (myPercent >= 60) {
        myGrade = 'D'
    } else  {
        myGrade = 'F'
    }
  
    return `Your grade is ${myGrade} and the percentage is ${myPercent}`
}


let yourResult = getMyGrade(92, 200)
console.log(yourResult);


// let currentMarks = 80
// let totalMarks = 100
// let actualMarks = (100 * (currentMarks/totalMarks))
// if (actualMarks > 90) {
//     console.log('A - Amazing')
// } else if (actualMarks > 80 && actualMarks <= 90){
//     console.log('B - Good')
// } else if (actualMarks > 70 && actualMarks <= 80){
//     console.log('C - Poor')
// } else if (actualMarks > 60 && actualMarks <= 70){
//     console.log('D - Fail')
// } else if (actualMarks <= 0){
//     console.log('F - Fail - See me')
// } else {
//     console.log('Error')
// }





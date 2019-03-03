
// if(false) {
//     console.log('I am inside if Block')
//     console.log('I am still inside if Block')
// } else if(false){
//     console.log('I am inside IF IN CAPS BLOCK')

// } else {    
//     console.log('NOTICE THIS PART')

// }


// LCO

var whoIsHere = 'abc'

if (whoIsHere === 'user') {
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if (whoIsHere === 'teacher'){
    console.log('Greeting message for teacher')
    console.log('Allow access to his courses')
} else {
    console.log('MESSAGE: please verify your email')
    console.log('Send user an email for verification')

}


// Grade problem

// students marks :

// 10 - Amazing
// 5 - Good
// 3 - Poor
// 0 - Fail

var myGrade = "0"

if (myGrade === '10') {
    console.log('10 - Amazing')
} else if (myGrade === '5'){
    console.log('5 - Good')
} else if (myGrade === '3'){
    console.log('3 - Poor')
} else if (myGrade === '0'){
    console.log('0 - Fail')
} else {
    console.log('Error')
}
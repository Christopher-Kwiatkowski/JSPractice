const convertToRs = (dollar) =>  {//conversion of ruppies to dollars
    if (typeof dollar === 'number'){
        return dollar * 64
    } else {
        throw Error('Amount needs to be an integer')
    }
}

const myValue = convertToRs ('Five')
console.log(myValue);    

// try {
//     const myValue = convertToRs ('Five')
// console.log(myValue);    
// } catch (error) {
//     console.log(error);
        
// }

console.log('I will not run if program crashes');




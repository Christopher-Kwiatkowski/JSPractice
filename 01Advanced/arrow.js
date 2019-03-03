// const sayHello = function(name){
//     return "Hey there, " + name + "!"
// }

// console.log(sayHello('Sammy'));


const sayHello = (name) => `Hey there, ${name}!`


// console.log(sayHello('Sammy'));


const todos = [{
    title: 'Buy bread',
    isDone: true,
}, {
    title: 'GO to gym',
    isDone: true,
}, {
    title: 'Record youtube video',
    isDone: false,
}, {
    title: 'Dog Walk',
    isDone: true,
}, {
    title: 'Make Dinner',
    isDone: false,
}, {
    title: 'Greet Sister',
    isDone: false,
}]


const thingsDone = todos.filter((todo) => todo.isDone === true)
const thingsNotDone = todos.filter((todo) => todo.isDone === false)

// console.log(thingsDone);
// thingsNotDone.forEach(todo => console.log(todo.title));

const cameras = {
    price: 600,
    weight: 2000,
    myDes: function(){
        return `This canon camera costs $${this.price}`
    }
}

console.log(cameras.myDes());
//Note, no arrow funtion in this case.

//This is only for Redux people
//const func = () => ({key: 'value'});
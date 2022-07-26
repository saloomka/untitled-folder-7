//1

/*
function sum(...arguments){
    let posSum=0;
    for(let item of arguments){
   if(item > 0){
    posSum +=item;
   }
}return posSum;
}
let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);
*/


//2


/*
function sum(...arguments){
    let addSum=0;
    for(let item of arguments){
        addSum +=item;
    }
    return addSum;
}
let arguments=[10, 50, 6, 7, 8, 11, 6, 3, 9
];
console.log(sum(...arguments));
*/

//3

/*
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
console.log(user.firstname + " " + user.lastname);
console.log(user.isloggedin = true ? true : false);

*/

//4


/*
function numbers(...x){
    
    for(let i = 0; i< x.length; i++){
        let max = x[0];
        if(x[i] > max){
         return max=x[i];
        }
    }
};
numbers[1, 7, -5, 4, 5, 8, 575, 45];


// console.log(Math.max(1, 7, -5, 4, 5, 8, 575, 45)); ჩაშენებული მეთოდით, მარტივად გამოდის. ჩემი ფუნქცია, სამწუხაროდ, შედეგს არ იძლევა. ვხვდები რომ რაღაც უნდა დავამატო, მაგრამ რა-არ ვიცი.


*/


//5
/*
 let array = [1,2,4,10,34,5,7,87];
    for(let i=0; i < array.lenght; i++){
        if(array[i] > 0 && array[i] < 10){
            return array[i];
        }

    }
აქ ფუნქცია დავწერე, მაგრამ მერე იგივე პრობლემა შემექმნა, რაც ზემოთ. 

*/

//6
/*

let numbers =[1,2,3,4,5,6,7,8,9,10];
for(let i=0; i< numbers.length; i++){
    if(numbers[i] === 5){
        break;
    }
}
console.log(numbers);

*/
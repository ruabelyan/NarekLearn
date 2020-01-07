 
// var arr = [1,5,9,44,7,86,2,5,8,4,6,3,4,9,66,58,6,5];
// var delArr = [];
// var delArr2 = [];

// var i = 0;
// var g
// var h

//  while(i<arr.length){

//     if(arr[i]% 2 == 0){
//         g = arr[i]
//         delArr.push(g)
        
//     }
//     if(arr[i]% 2 !== 0){
//         h = arr[i]
//         delArr2.push(h)
//         // console.log(delArr2)
//     }
   
//   i++

//  }
//  console.log(delArr2)
//  console.log(delArr)



// var i = 0;

// var arr = [1,5,9,44,7,86,2,5,8,4,6,3,4,9,66,58,6,5];
// var max = arr[0]
// while(i < arr.length){

//     if(arr[i]>max){
//         max = arr[i]
        
//     }

//     i++
    
// }

// console.log(max)


// var arr = [1,5,9,44,7,86,2,5,8,4,6,3,4,9,66,58,6,5];
//     for(key of arr){
//         console.log(arr[key])
//     }
   
// var arr = [1,5,9,44,7,86,2,5,8,4,6,3,4,9,66,58,6,5];
// var i = 0;
// while(i < arr.length){
//     if(arr[i]> 10){
//         console.log(arr[i])
//     }
//     i++
// }
// for(key in arr){
//     console.log(arr[key])
// }


// var myObject = {
//     "name": "Поздравление",
//     "month": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август"],
//     "random array": [5, true, { year: 2018, number: 8 }, 12, 25.4],
//     "year array": [2017, 2018]
// };
// // console.log(myObject.month)
// myObject.month[2] = 'Мартa!'
// myObject.birday = "С праздником";




// console.log(myObject.birday,myObject['random array'][2].number,myObject.month[2])
// // console.log(myObject)

// var g = prompt()
// document.write(g)

// var vegetables =  ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// function arrayClone(arr){

//     var arr1 = [];
//     for (let i = 0; i < vegetables.length; i++) {
//         arr1.push(arr[i])
        
        
//         return arr  
//      }
    
        

//     }
//     arrayClone(arr)

// console.log(vegetables)



// i = -1;

// while (++i < arr.length) {


//     copyArr[i] = arr[i];
// }

// console.log(arr)
// console.log(copyArr)


/*1. Клонирование массива
Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.
*/


//     var arr =  ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//     var copyArr = [];

//     function Clone(){

//         for (let i = 0; i < arr.length; i++) {
//             copyArr= arr
             
//          }
//          return copyArr
//     }

//  console.log(arr)
//  console.log(Clone(copyArr))


/*2. Преобразование массива в строку
Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.*/

// var elem
// var arr =  ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// var str = arr.join()

// console.log(str)



/*3. Двоеточие между нечётными числами
Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.
*/



































/*4. Замена регистра символов
Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].
*/


// var num = prompt();
// function reverse(){
//     var split = num.split('')
//     for (var i = 0; i < split.length; i++) {
//       var mec = split[i].toUpperCase()
//         var poqr = split[i].toLowerCase()
//         if(split[i] === mec){
//             console.log(poqr)
//         }
//         else if(split[i] === poqr){
//             console.log(mec)
//         }
//     }     
// }
// reverse();


/*5. Удалить повторяющиеся элементы массива
Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
*/

var arr = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java"
];
var arr0 = arr[0];
var g = 0

for (var i = 0; i < arr.length; i++) {

    if(arr0 == arr[i]){
       g++


       for (var j = 0; j <= g.length; j++) {
           
           console.log('hhh')
       }
    }
   
    
}





function removeDuplicates(arr) {

// Ваш код

}
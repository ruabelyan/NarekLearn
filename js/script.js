 
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



// const num = prompt();

// console.log(typeof num)
// var colum = (num)=>{
// var h = [];
// h.push(num[0])


// // console.log(h)
    
// for (let i = 0; i < num.length; i++) {
    
//     if((num[i-1]%2 !== 0) && (num[i]% 2 !== 0) ){

//         h.push(":", num[i])
        
//     }else{
//         h.push(num[i])
//     }
//   }
//   return h.join()
// }
// colum(num)

// console.log(colum(num))



























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

// var list = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];
// var newList = [];

//grel Nareki het



/*6. Найдите високосные годы
Високосным годом является каждый четвертый год и века начинаются только на высокостные года, отличие високосного года от обычного заключается в появлении 366-го дня. Напишите функцию chooseYears(start, end), которая принимает в качестве аргументов диапозон лет и возвращает массив високосных лет в заданном диапазоне.
*/



// for (let i = 1800; i <= 2020; i++) {
//     if((i % 4 === 0) && (i % 100 != 0)){
//         console.log(i)
//     }
    
// }

/*7. Отобразить элементы в случайном порядоке
Используя метод sort перепишите предсталенный ниже код, который с помощью цикла for случайно изменяет порядок расстановки элементов массива.
*/

// function shuffle(arr) {
//     for (var i = arr.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }

// var array = [0,1,2,3,4,5,6,7,8,9];
// console.log(shuffle(array));

//?????

/*8. Получить первые элементы массива
Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.
*/


// var array = [1,2,3,4,5,6,7,8,9];

// // var num = +prompt();
// var arr = [];
// var func

// function getFirst(array,num) {
//   for (let j = 0; j < num; j++) {
 
//     console.log(array[j])
   
//   }

//  } 

// getFirst(array,5)


/*9. Получить последние элементы массива
Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива.
*/

// var array = [1,2,3,4,5,6,7,8,9];

// var num = 5
//  function getLast(array, n) {
//     for (let i = 0; i < num; i++) {
      
      
//     }
// };



/*10. Сумма элементов двух массивов
Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
*/


// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6];
// var arr3 = []
// if(arr1.length>arr2.length){
//   var count = arr1.length
// }else{
//   var count = arr2.length
// }
// // console.log(count)

// for (let i = 0; i < count; i++) {

//   if(arr2[i]=== undefined){
//     arr2.push(0);
//   }else{
//     if(arr1[i]=== undefined){
//       arr1.push(0)
//     }
//   }
//   arr3.push(arr1[i] + arr2[i])

// }

// console.log(arr3)
  
   /*11. Количество повторяющихся элементов в массиве
Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.
*/
// var arr = [3, 7, 3, 4, 5, 5, 8, 8, 8];

// var arr2 = [];
// var count = 0;
// for (var i = 0; i < arr.length; i++)
// {
//     var a = arr[i];

// for (let j = 0; j < i; j++) {

//     if(arr[i] == arr[j]){

//         console.log(arr[i])
//     }
    
// }
// }

/*12. Разворачивание массива массивов
Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.
*/

// var arr1 = [1, [2,[3,[4]]]];
// var arr2 = [1, [2], [3, [[4]]],[5,6]];

// console.log(arr1)




/*13. Объединить два массива без дублирования элементов
Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.
*/
// var array1 = [5, 2, 1, 11,25,65];
// var array2 = [5, 2, 1, 12,36,22]; 
// var array3 = []
// var length
// if(array1.length<array2.length){
//     var length = array2.length
// }else{
//     var length = array1.length
    
// }

//     for (let i = 0; i <length; i++) {
//         const element1 = array1[i];
//         const element2 = array2[i];
        
//         console.log(array1,array2)
        


        
//     }








// var clone = arr.slice(0)

// while(clone.length){
//   arrI = clone.shift()
// }


// 1.
// var set = [...new Set(arr)]

// console.log(set)

//2.
// const uniqArray = arr.filter((item,index)=>{
//   return index === arr.indexOf(item);

// })
// console.table(uniqArray)


//3,
// let uniqArray = arr.reduce((uniq,item)=>{
//   return uniq.includes(item) ? uniq : [...uniq,item]
// },[])

// console.log(uniqArray)





// function countIdentic(arr) {

     
// }

   




















// let arr = [3,4,5];
// // arr[5] = 9
// // delete arr[5]

// let b = [];

// for (let i = 0; i < arr.length; i++) {
//   b[i] = arr[i]*2
  
// }
// console.log(arr)
// console.log(b)
// let c =  arr.map(function(x){
//   // console.log(z)

//   return x*2
// })
// console.log(c)

// arr.forEach(function(item,i,arr){
//   b[i] = arr[i]*2
//   console.log( b)
// })


// let a = [4,5,12,200,1,0,-2];

// let b = a.map(function(item,index) {

//     // console.log(index)
//     return index
// })
// // console.log(b)



// let c = a.filter(function(item,index){

//     if(item > 0) {
//         return index
//     }
    
// })


//10.01.2020
// var array = [1,-2,3,-4,5,-6,7,8,-9];
// var b = [];

// for (let i = 0; i < array.length; i++) {
    
//     if(array[i]>= 0){

//         b.push(array[i])
        
//     }
    
// }
// // console.log(b)
// console.log(array)
    
// var c = array.filter(function(elem){

//     return elem >= 0
// })
// console.log(c)

// for(var key in array){
//   console.log(array[key])
// }

// for(var key of array){
//   console.log(key)
// }

// for (let i = 0; i < array.length; i++) {
//       var str = array[i]
//     if(str == num){

//     }
// }



// const num = prompt('Введите число', 6876666);

// function colonOdd(num) {

//     var d = 0
//     var q="!!"
//     for (var i = 0; i < num.length - 1; i++) {
//         //        console.log("ggg")
//         if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0) {
//             console.table(num[i] % 2)
//             //        console.log(num[i+1]%2)
//             if (d == 0) {

//               console.table(num[i] + ':' + num[i + 1])
//             } else {
//               console.table(':' + num[i + 1])
//             }

//         } else {
//             d = 1
//             console.table(num[i + 1])
//         }

//     }
//     return q
// }

// console.table(colonOdd(num));


var inp = document.getElementById('inp')
var btn = document.getElementById('btn')


btn.onclick = ()=>{
    console.log(inp.value)
}

var b = Math.floor(Math.random()*10)
var h = parseInt(b)
if(inp.value === b){
    console.log('duq haxteciq')
}
console.log(b)

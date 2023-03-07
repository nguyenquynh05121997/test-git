// var a = 1

// var b = 2
// //String
// var fullName = "nguyen 'van' quynh"
// // console.log(fullName)
// //boolean

// var isSuccess = true

// //Undefined type

// var age

// console.log(age)

// //NUll

// var isNull = null
// console.log(isNull)

// //symbol

// var id  = Symbol('id')
// console.log(id)

// var myfunction = function() {
//     console.log(fullName)
// }
// myfunction()
// console.log(typeof null)


// var a = 1
// var b = 3

// var result = a || b
// console.log("result" , result)

// if (result) {
//     console.log("dieu kien dung")
// }
// else {
//     console.log("dieu kien sai")
// }


// function writeLog() {
//     // var sum = a + b
//     // console.log(sum)
    
//     var firstName = 'nguyen'
//     var lastName = 'quynh'
//     var fullName = `${firstName}`+' '+`${lastName}`
//     console.log(fullName)
// }
// var a = 10
// var b = 34
// writeLog()

// function checkYear() {
//     for (let year = 2020; year < 2030; year++) {
//         console.log(year,(year % 4 === 0 || (year % 400 == 0 && year & 100 ==0 ))?
//         'la nam nhuan':'la nam khong nhuan')
//     }
// }
// checkYear()

/*
function showMessage() {
    function showFullName() {
        alert('nguyen van quynh')
    }
    function showAge() {
        alert('25')
    }
    function showAdress() {
        alert('thanh khe thanh ha hai duong')
    }
    showFullName()
    showAge()
    showAdress()
}

showMessage()
*/

/*
myObject()
function myObject() {
    console.log('Declaration function')
}
var myObject2 = function() {
    console.log('Expression function')
}
myObject2()
*/

// function getUpperCaseName(str) {
//     return str.toUpperCase()
// }



// // Expected results:
// console.log(getUpperCaseName("nguyen van a")) // "NGUYEN VAN A"
// console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"

// var firstName = "nguyen"
// var lastName = "quynh"
// var middleName = "van" 

// var fullName = `${firstName} ${middleName} ${lastName}`
// console.log(fullName)

// console.log(firstName.concat(" ",middleName," ",lastName," sinh nam 1997" ))
// console.log(`${firstName} ${middleName} ${lastName} sinh nam 1997`)

// console.log(fullName.substring(1,7)) // from :1 to 6
// console.log(fullName.substr(7,12)) //7: start, 14: so tu tiep theo

// console.log(fullName.replace(/van/gi, "thanh"))


// console.log(fullName.length)
// console.log(fullName.slice(-16,-11))
// console.log(fullName.substring(1,8))

// var x = 2

// function myFunction() {
//     console.log("i :" ,i)
//     var i = 0
//     for( i = 0; i < 3; i++){
//         console.log("i inside : ",i)
//     }

//     console.log("i outside : ", i)
// }

// console.log(this.x)
// myFunction()

// let text = "nguyen van quynh"

// console.log(text.padEnd(text.length + 5
//     ," 1997"))

// // for ( let i = 0; i < text.length; i++ ){
// //     console.log(text[i])
// // }

// console.log(text.split(" "))


/*
--------number---------

function isNumber (value){
    return  Number.isFinite(value)
}


// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false
*/


// function isNumber(value) {
//     if(isNaN(value) == true){
//         return false
//     }
//     else {
//         return typeof value == "number"
//     }
// }

/**
Array
javascript array methods
 
 */

var languages = [
    "Javascript",
    "PHP",
    "C++"
]
 var language2 = [
    "HTML, CSS",
    "Dart"
 ]
// console.log(Array.isArray(languages))
// console.log(languages[3])
// var language2 = languages.join(" - ")

// console.log(languages.toString)

// console.log(language2.split(" - "))

// console.log(languages.join(", "))

////pop - xoa phan tu cuoi mang

// console.log(languages.pop(3))
// console.log(languages)

// console.log(languages.push("Dart", "C#"))
// console.log(languages)

// console.log(languages.shift())
// console.log(languages)

// console.log(languages.unshift("HTML"))
// console.log(languages.unshift("CSS"))
// console.log(languages)

// console.log(languages.concat(language2))

// console.log(languages.splice(1,0,"Python"))
// console.log(languages)

// console.log(languages.slice(1,2))
// console.log(languages)

// function joinWithCharacter(array, charactor) {
//     return array.join(charactor)
// }


// // Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"

// Viết hàm tại đây



// function getLastElement(array) {
//     return array.slice(-1)
// }

// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']



// object

var myInfo = {
    name: "Quynh",
    age : 25,
    address: "thanh khe- thanh ha- hai duong",
    getInfo: function() {
        return "khoa hoc tai f8"
    },
    languages: ["java","c++","php"]
}

console.log(myInfo.languages[1])